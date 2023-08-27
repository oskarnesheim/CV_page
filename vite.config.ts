import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://oskarnesheim.github.io/CV_page/",
  server: {
    watch: {
      usePolling: true,
    },
  },
})
