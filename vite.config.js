import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { EsLinter, linterPlugin } from 'vite-plugin-linter';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
    plugins: [
        react(),
        linterPlugin({
            include: ['./src/**/*.js', './src/**/*.jsx'],
            linters: [new EsLinter({ configEnv: configEnv })]
        })
    ],
    server: { port: 3100 }
}));
