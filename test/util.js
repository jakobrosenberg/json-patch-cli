export const test = async (msg, cb) => {
    try {
        await cb()
        console.log(msg, '✅')
    } catch (err) {
        console.log(msg, '❌')
        console.error(err)
    }
}

import { dirname } from 'path';
import { fileURLToPath, URL } from 'url';

export const __dirname = dirname(fileURLToPath(import.meta.url))
