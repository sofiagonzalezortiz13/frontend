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
        "robots.txt",
        "pajaro.png"
      ],
      workbox: {
        navigateFallback: "/index.html",
        // Agregamos las extensiones necesarias para que Workbox las cachee
        globPatterns: ["**/*.{js,jsx,css,html,ico,png,svg,xml,webmanifest}"],
      },
      manifest: {
        name: "Mi PWA",
        short_name: "PWA",
        description: "De la carga al control: Tu aliado digital para equilibrar tus gastos y potenciar tus ahorros.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        screenshots: [
          {
            src: "/img/pajaro.png",
            // Subimos el tamaño declarado a 512x512 para cumplir con el mínimo de 320px
            sizes: '1024x1024', 
            type: 'image/png',
            form_factor: 'narrow',
            label: "Vista Móvil"
          },
          {
            src: '/img/pajaro.png',
            sizes: '1024x1024',
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
