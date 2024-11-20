import {withContentlayer} from 'next-contentlayer'
import {initField, startFileWatcher} from "./scripts/post.mjs";
import path from "node:path";
import fs from "node:fs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, {isServer, dev}) => {
        config.experiments = Object.assign(config.experiments || {}, {
            layers: true,
            asyncWebAssembly: true,
        });
        config.module.rules.push({
            test: /\.wasm$/,
            type: 'webassembly/async',
        });
        if (!isServer) {
            config.output.environment = {...config.output.environment, asyncFunction: true};
        }
        config.output.webassemblyModuleFilename = isServer && !dev ? './../static/wasm/[modulehash].wasm' : 'static/wasm/[modulehash].wasm';

        if (!dev) {
            config.plugins.push(
                new (class {
                    apply(compiler) {
                        compiler.hooks.afterEmit.tapPromise(
                            'WasmFileWebpackPlugin',
                            async (compiler) => {
                                if (isServer) {
                                    const wasmFolder = path.join(compiler.options.output.path, 'static/wasm')
                                    const targetFolder = path.join(compiler.options.output.path, '../static/wasm')

                                    try {
                                        if (fs.existsSync(wasmFolder)) {
                                            const files = fs.readdirSync(wasmFolder);
                                            if (!fs.existsSync(targetFolder)) {
                                                fs.mkdirSync(targetFolder, {recursive: true});
                                            }

                                            files.forEach((file) => {
                                                const sourcePath = path.join(wasmFolder, file);
                                                const targetPath = path.join(targetFolder, file);
                                                if (fs.existsSync(targetPath)) {
                                                    console.log(`文件已存在，跳过: ${file}`);
                                                    return;
                                                }

                                                // 复制文件
                                                try {
                                                    fs.copyFileSync(sourcePath, targetPath);
                                                    console.log(`文件Copy成功: ${file}`);
                                                } catch (err) {
                                                    console.error(`Copy文件失败: ${file}`, err);
                                                }
                                            });
                                        }
                                    } catch (err) {
                                        console.error('读取Wasm文件夹失败:', err);
                                    }
                                }
                            },
                        );
                    }
                })(),
            );
        }

        const postPath = "./content/post"
        if (dev) {
            startFileWatcher(postPath)
        } else {
            initField(postPath)
        }

        return config;
    }
}


export default withContentlayer(nextConfig)
