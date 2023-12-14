import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'
import AutoImport from 'unplugin-auto-import/vite'

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      AutoImport({
        imports: ['vitest'],
        dts: 'src/@types/vitest.d.ts',
      }),
    ],
    test: {
      globals: true,
      exclude: ['**/node_modules/**', '**/dist/**'],
      setupFiles: ['src/__tests__/setupTests.ts'],
      environment: 'jsdom',
      coverage: {
        exclude: ['**/node_modules/**', '**/dist/**', 'src/components/ui/**'],
        include: ['src/components/**/*.tsx'],
        reporter: ['text', 'text-summary', 'html'],
      },
    },
  }),
)
