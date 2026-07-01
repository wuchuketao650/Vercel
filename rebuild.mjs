import fs from 'fs';
import path from 'path';
const base = 'D:\\webdemo';
function w(rel, content) {
  const p = path.join(base, rel);
  fs.mkdirSync(path.dirname(p), {recursive: true});
  fs.writeFileSync(p, content, 'utf8');
  console.log('OK:', p);
}

w('styles/globals.css', `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98];
  }
  .btn-secondary {
    @apply inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-full border border-gray-200 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98];
  }
  .card {
    @apply bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6;
  }
}
`);

w('lib/utils.ts', `import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`);

w('tailwind.config.ts', `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a' }
      }
    }
  },
  plugins: []
};
`);

w('next.config.mjs', `const nextConfig = { reactStrictMode: true };
export default nextConfig;
`);

w('postcss.config.js', `module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };
`);

w('tsconfig.json', `{
  "compilerOptions": {
    "target": "ES2017", "lib": ["dom", "dom.iterable", "esnext"], "allowJs": true,
    "skipLibCheck": true, "strict": true, "noEmit": true, "esModuleInterop": true,
    "module": "esnext", "moduleResolution": "bundler", "resolveJsonModule": true,
    "isolatedModules": true, "jsx": "preserve", "incremental": true,
    "plugins": [{ "name": "next" }], "baseUrl": ".", "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
`);

console.log('Config files written');
