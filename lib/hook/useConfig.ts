import path from "node:path";
import * as fs from "node:fs";
// @ts-ignore
import yaml from 'js-yaml'
import {Config} from "@/lib/types/config";

export default function useConfig(): Config {
    const filePath = path.resolve(process.cwd(), 'config.yml')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return yaml.load(fileContents)
}
