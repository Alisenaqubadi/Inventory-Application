// utils/path.js
import path from 'path';
import { fileURLToPath } from 'url';

export const __dirname = path.dirname(fileURLToPath(import.meta.url));
export function joinPath(continuePath) {
 return path.join(__dirname, `../src/${continuePath}`)   
}