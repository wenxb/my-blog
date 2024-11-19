import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react';
import * as prod from 'react/jsx-runtime'
import {createTOC, findMainNode} from "@/lib/utils/create-toc";
import rehypeSlug from "rehype-slug";

const production = {
    Fragment: prod.Fragment,
    jsx: prod.jsx,
    jsxs: prod.jsxs,
}

const createTocPlugin = () => {
    return function transformer(root) {
        let [mainNode] = findMainNode(root);

        let tocNode = createTOC(root)

        mainNode.children.length = 0
        if (tocNode) {
            mainNode.children?.push(tocNode);
        }
        return root
    }
}

const TocExtractor = ({md}) => {
    const processor = unified()
        .use(remarkParse) // 解析 Markdown
        .use(remarkRehype) // 转换为 HTML AST
        .use(rehypeSlug)
        .use(createTocPlugin)
        .use(rehypeReact, production)
        .processSync(md)

    const result = processor.result

    return (result.props?.children && (
            <div className={'border rounded-xl overflow-hidden'}>
                <div className={'px-3 pt-3 text-xl pb-2 font-bold'}>目录</div>
                {result}
            </div>
        ))
}

export default TocExtractor;
