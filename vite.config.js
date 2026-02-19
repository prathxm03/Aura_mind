import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.css'],
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    assetsInclude: ['**/*.svg', '**/*.csv'],
})
