import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "@/components/mdx/Link.js";

const components = {
    Image,
    a: Link
}

export function Mdx({ code }) {
    const Component = useMDXComponent(code)

    return <Component components={components} />
}
