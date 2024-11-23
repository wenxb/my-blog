import path from "node:path";
import * as fs from "node:fs";
import yaml from 'js-yaml'

export default function useConfig() {
    const filePath = path.resolve(process.cwd(), 'config.yml')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return yaml.load(fileContents)
}
