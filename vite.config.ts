import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { nodePolyfills } from '@bangjelkoski/vite-plugin-node-polyfills'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), react(), nodePolyfills({ protocolImports: true })]
})
