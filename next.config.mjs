import {withContentlayer} from 'next-contentlayer'
import {initField, startFileWatcher} from "./scripts/post.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, {isServer, dev}) => {
        const postPath = "./content/post"

        if (dev) {
            if (isServer) {
                startFileWatcher(postPath)
            }
        } else {
            initField(postPath)
        }

        return config;
    }
}

export default withContentlayer(nextConfig)
