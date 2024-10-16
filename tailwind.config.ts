import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados
        primary: {
          DEFAULT: '#01080E',
          100: '#011221',
          200: '#011627',
        },
        secondary: {
          100: '#607B96',
          200: '#3C9D93',
          300: '#4D5BCE',
          white: '#FFFFFF',
        },
        accent: {
          100: '#FEA55F',
          200: '#43D9AD',
          300: '#E99287',
          400: '#C98BDF',
        },
        lines: '#1E2D3D',
        gradients: {
          start: '#4D5BCE',
          end: '#43D9AD',
        },
        // Si tienes variables CSS globales, también puedes mantenerlas
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
