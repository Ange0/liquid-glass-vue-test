import { createApp } from 'vue'
import App from './App.vue'
import './../index.css'
// Import du plugin (si vous utilisez l'installation globale)
// import LiquidGlassPlugin from 'liquid-glass-vue3'

const app = createApp(App)

// Installation globale du plugin (optionnel)
// app.use(LiquidGlassPlugin)

app.mount('#app')