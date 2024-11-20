import {withContentlayer} from 'next-contentlayer'
import {initField, startFileWatcher} from "./scripts/post.mjs";
import {join} from "node:path";
import {access, symlink} from "node:fs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, {isServer, dev}) => {
        config.experiments = {
            layers: true,
            asyncWebAssembly: true,
            syncWebAssembly: true,
        };
        config.optimization.moduleIds = 'named';

        if (!isServer) {
            config.output.environment = { ...config.output.environment, asyncFunction: true };
        }
        config.output.webassemblyModuleFilename = isServer ? '../static/wasm/[modulehash].wasm' : 'static/wasm/[modulehash].wasm';

        const postPath = "./content/post"
        if (dev) {
            startFileWatcher(postPath)
        } else {
            initField(postPath)
        }

        config.plugins.push(
            new (class {
                apply(compiler) {
                    compiler.hooks.afterEmit.tapPromise(
                        'SymlinkWebpackPlugin',
                        async (compiler) => {
                            if (isServer) {
                                const from = join(compiler.options.output.path, '../static');
                                const to = join(compiler.options.output.path, 'static');

                                try {
                                    await access(from,()=>{});
                                } catch (error) {
                                    if (error.code === 'ENOENT') {
                                        // No link exists
                                    } else {
                                        throw error;
                                    }
                                }

                                await symlink(to, from, 'junction',()=>{});
                                console.log(`created symlink ${from} -> ${to}`);
                            }
                        },
                    );
                }
            })(),
        );
        return config;
    }
}


export default withContentlayer(nextConfig)
