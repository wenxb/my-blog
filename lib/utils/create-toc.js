import {cn} from "@/lib/utils/index";

const headingList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']


/**
 * Returns the `<main>` node, or the `<body>` node if there is no `<main>`.
 * The second node returned is the parent of the first node.
 */
export function findMainNode(root) {
    let [body, bodyParent] = findTagName(root, "body");
    let [main, mainParent] = findTagName(body || root, "main");

    if (main) {
        return [main, mainParent || body || root];
    } else {
        return [
            body || root,
            bodyParent || root
        ];
    }
}


/**
 * Recursively crawls the HAST tree and finds the first element with the specified tag name.
 */
function findTagName(node, tagName) {
    if (isHtmlElementNode(node) && node.tagName === tagName) {
        return [node, undefined];
    }

    if (node.children) {
        let parent = node;
        for (let child of parent.children) {
            let [found] = findTagName(child, tagName);
            if (found) {
                return [found, parent];
            }
        }
    }

    return [undefined, undefined];
}

/**
 * Creates a `<nav>` and/or `<ol>` element containing the table of contents.
 */
export function createTOC(node) {
    const headings = findHeadings(node)
    let list = createTocList(headings);

    if (list) {
        list.properties.className = ['toc', list.properties.className].filter(Boolean).join(" ") || undefined;
    }

    return list;
}

/**
 * Creates an `<ol>` element containing the table of contents.
 */
function createTocList(headings) {
    let tocList = []; // 存储 TOC 项的数组
    let currentLevel = 0; // 默认从 h2 开始（即第一层级）
    let lastHeadingLevel = 1; // 初始化为第一个标题的层级，通常为 h2

    for (let heading of headings) {
        // 计算当前标题的层级
        let headingLevel = parseInt(heading.tagName.slice(-1), 10); // 从 h1 -> 1, h2 -> 2, h3 -> 3 获取标题级别

        // 根据标题层级与前一个标题的层级的比较来调整当前层级
        if (headingLevel > lastHeadingLevel) {
            currentLevel++; // 当前标题比前一个标题级别高，进入下一级
        } else if (headingLevel < lastHeadingLevel) {
            currentLevel = Math.max(1, currentLevel - 1); // 当前标题比前一个标题级别低，返回上一级
        }

        // 创建一个 listItem，并包含标题文本和层级信息
        let listItem = createListItem(heading, currentLevel);

        // 将当前 listItem 添加到 TOC 列表
        tocList.push(listItem);

        // 更新 lastHeadingLevel 为当前标题的层级
        lastHeadingLevel = headingLevel;
    }

    // 返回生成的展平 TOC 列表
    return createList(tocList);
}

/**
 * Creates an `<ol>` and `<li>` element for the given heading
 */
function createList(items) {
    if (!items.length) return null

    return {
        type: "element",
        tagName: "ol",
        properties: {
            className: "toc-list",
        },
        children: items,
    };
}

/**
 * Creates an `<li>` element for the given heading
 */
function createListItem(heading, level) {
    return {
        type: "element",
        tagName: "li",
        data: {
            hookArgs: [heading],
        },
        properties: {
            className: cn(
                `toc-item-${heading.tagName} toc-level-${level}`,
            ),
        },
        children: [
            {
                type: "element",
                tagName: "a",
                properties: {
                    className: cn(
                        `toc-link-${heading.tagName} line-clamp-1 py-2 px-4 hover:bg-accent`,
                        level >= 2 && 'pl-6'
                    ),
                    href: `#${heading.properties.id || ""}`,
                },
                children: [
                    {
                        type: "text",
                        value: getInnerText(heading),
                    }
                ]
            }
        ],
    };
}

/**
 * Returns the text content of all children of the given node
 */
function getInnerText(node) {
    let text = "";

    if (node.type === "text") {
        text += node.value || "";
    }

    if (node.children) {
        for (let child of node.children) {
            text += getInnerText(child);
        }
    }

    return text;
}

/**
 * Finds all HTML heading nodes (`<h1>` through `<h6>`)
 */
export function findHeadings(node) {
    let headingNodes = [];
    findHeadingsRecursive(node, headingNodes);
    return headingNodes;
}

/**
 * Recursively crawls the HAST tree and adds all HTML heading nodes to the given array.
 */
function findHeadingsRecursive(node, headingNodes) {
    if (isHeadingNode(node)) {
        headingNodes.push(node);
    }

    if (node.children) {
        for (let child of node.children) {
            findHeadingsRecursive(child, headingNodes);
        }
    }
}

/**
 * Determines whether the given node is an HTML element.
 */
function isHtmlElementNode(node) {
    return typeof node === "object" &&
        node.type === "element" &&
        typeof node.tagName === "string" &&
        "properties" in node &&
        typeof node.properties === "object";
}

/**
 * Determines whether the given node is an HTML heading node, according to the specified options
 */
function isHeadingNode(node) {
    return isHtmlElementNode(node) && headingList.includes(node.tagName);
}
