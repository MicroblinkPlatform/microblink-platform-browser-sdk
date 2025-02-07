import fs from 'fs';
import resolvePackagePath from 'resolve-package-path';
import { defineConfig } from 'vite';

const serverOptions = {
  port: 3000,
  // hmr: false,
  host: true,
  headers: {
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
  },
  // host: true,
};

export default defineConfig({
  server: serverOptions,
  plugins: [
    {
      name: 'copy-resources',
      buildStart: copyResources,
    },
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
