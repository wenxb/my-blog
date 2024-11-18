import {withContentlayer} from 'next-contentlayer'
import {initField, startFileWatcher} from "./scripts/post.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, {isServer, dev}) => {
        // 开启 WebAssembly 支持
        config.experiments = {
            layers: true,
            asyncWebAssembly: true,
        };

        if (!isServer) {
            config.output.environment = { ...config.output.environment, asyncFunction: true };
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
