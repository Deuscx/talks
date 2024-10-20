import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        fs: {
            strict: false
        }
    },
    publicDir: resolve(__dirname, './src/public'),
})
