import react from '@vitejs/plugin-react';
import fs from 'fs';
import resolvePackagePath from 'resolve-package-path';
import { ServerOptions, defineConfig } from 'vite';

const serverOptions: ServerOptions = {
  port: 3000,
  headers: {
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'cache-control': 'max-age=300',
  },
};

export default defineConfig({
  server: serverOptions,
  plugins: [
    {
      name: 'copy-resources',
      buildStart: copyResources,
    },
    react(),
  ],
});

function copyResources() {
  const packagePath = resolvePackagePath(
    '@microblink/platform-sdk',
    '.',
  )?.replace('/package.json', '');

  const resourcesPath = `${packagePath}/dist/resources`;
  const destinationPath = 'public/resources';

  if (fs.existsSync(destinationPath)) {
    fs.rmSync(destinationPath, { recursive: true, force: true });
  }

  fs.mkdirSync(destinationPath);
  fs.cpSync(resourcesPath, destinationPath, { recursive: true });
}
