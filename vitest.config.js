import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    environment: 'jsdom' // Use jsdom environment for testing
  }
})
