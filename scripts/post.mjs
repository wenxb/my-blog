import {customAlphabet} from 'nanoid';
import chokidar from 'chokidar';
import matter from 'gray-matter';
import fs from 'node:fs';
import path from "node:path";


const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nanoidCustom = customAlphabet(alphabet, 22);

// 使用 gray-matter 和 fs-extra 检查并生成 ID
function ensureField(filePath) {
    if (filePath.endsWith('.mdx') || filePath.endsWith('.md')) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const {data, content} = matter(fileContent);
        let isUpdated = false

        if (!data.id || !/^[0-9A-Za-z]{22}$/.test(data.id)) {
            data.id = nanoidCustom();
            isUpdated = true
        }

        if (!data.date) {
            data.date = new Date().toISOString();
            isUpdated = true
        }

        // 使用 gray-matter 重新生成文件内容
        if (isUpdated) {
            const updatedContent = matter.stringify(content, data);
            fs.access(filePath, fs.constants.W_OK, (err) => {
                if (!err) {
                    fs.writeFileSync(filePath, updatedContent, 'utf8');
                    isUpdated = false
                }
            });
        }
    }
}

// 检查id字段
export function initField(postContentPath) {
    fs.readdirSync(postContentPath).forEach((file) => {
        const filePath = path.join(postContentPath, file);
        ensureField(filePath);
    });
}

// 文件监听函数
export function startFileWatcher(watchPaths) {
    // 初始化监听器
    const watcher = chokidar.watch(watchPaths, {
        persistent: true,
        ignoreInitial: true,
    });

    initField(watchPaths)

    // 监听文件的增、改事件
    watcher.on('all', (event, filePath) => {
        if (event === 'change' || event === 'add') {
            ensureField(filePath);
        }
    });
}
