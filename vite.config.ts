import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import webExtension from "@samrum/vite-plugin-web-extension";
import { getManifest } from './src/utils/manifest';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    root: 'src',
    build: {
      outDir: `../dist/app_${Number(env.MANIFEST_VERSION)}`,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      vue(),
      webExtension({
        manifest: getManifest(Number(env.MANIFEST_VERSION)),
      }),
    ]
  }
});