import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "hero.png", 
        "icons.svg",
        "Logo1.0.ico", 
        "react.svg", 
        "penguin.png", 
        "world.png",
        "vite.svg",
        "robots.txt"
      ],
      workbox: {
        navigateFallback: "/index.html",
        // Agregamos las extensiones necesarias para que Workbox las cachee
        globPatterns: ["**/*.{js,jsx,css,html,ico,png,svg,xml,webmanifest}"],
      },
      manifest: {
        name: "Mi PWA",
        short_name: "PWA",
        description: "Aplicación web progresiva creada para buscar un mejor control para tus gastos de tu vida pesada",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        screenshots: [
          {
            src: "/img/auww.png",
            // Subimos el tamaño declarado a 512x512 para cumplir con el mínimo de 320px
            sizes: '360x360', 
            type: 'image/png',
            form_factor: 'narrow',
            label: "Vista Móvil"
          },
          {
            src: '/img/auww.png',
            sizes: '360x360',
            type: 'image/png',
            form_factor: 'wide',
            label: "Vista Escritorio"
          } 
        ],
        icons: [
          {
            src: "/img/penguin.png",
            // Cambiado a 512x512 porque el navegador detectó que ese es su tamaño real
            sizes: "512x512", 
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/img/penguin.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable" // Recomendado para Android
          },
        ],
      },
    }),
  ],
});
