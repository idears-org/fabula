/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './.storybook/vitest.setup.ts', // 我们仍然可以使用这个文件进行全局设置
    include: [
      'src/**/*.test.tsx',
      'src/**/*.test.ts'
    ],
    exclude: [
      'node_modules',
      'dist',
      '.idea',
      '.git',
      '.cache',
      'src/**/*.stories.tsx', // 从常规测试运行中排除 Storybook 文件
      'src/**/*.stories.ts',
      'src/**/*.stories.mdx',
      '.storybook/**', // 排除 .storybook 目录中的所有内容，除了 setupFiles
      'storybook-static',
    ],
    // browser: { // 浏览器模式在此配置中不需要
    //   enabled: false,
    // },
  },
  // optimizeDeps 和 projects 导出已移除
});
