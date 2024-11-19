import Image from "next/image";
import Link from "@/components/md/Link";
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeReact from 'rehype-react';
import remarkGfm from 'remark-gfm';
import rehypeHighlightLines from "rehype-highlight-code-lines";
import 'highlight.js/styles/github-dark.min.css';
import * as prod from 'react/jsx-runtime'
import rehypeSlug from "rehype-slug";

const production = {
    Fragment: prod.Fragment,
    jsx: prod.jsx,
    jsxs: prod.jsxs,
    components: {
        img: Image,
        a: Link,
    },
}

const MarkdownRenderer = ({md}) => {
    const processor = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype) // 转换为 HTML 格式的 AST
        .use(rehypeSlug)
        .use(rehypeHighlight)
        .use(rehypeHighlightLines,{
            showLineNumbers: true,
            lineContainerTagName: 'div'
        })
        .use(rehypeReact, production)
        .processSync(md)

    return processor.result
};

export default MarkdownRenderer;
