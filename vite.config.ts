import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  alias: {
    '@components': resolve(__dirname, './src/components'),
    '@apis': resolve(__dirname, './src/apis'),
    '@hooks': resolve(__dirname, './src/hooks'),
    '@contexts': resolve(__dirname, './src/contexts'),
  }
})
