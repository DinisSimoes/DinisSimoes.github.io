/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}", // Inclui arquivos SCSS, HTML e TypeScript
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: "#F8F9FA", // Fundo claro
        darkBackground: "#1A1A1A", // Fundo escuro
        componentLightBackground: "#6C757D", // Fundo claro
        componentDarkBackground: "#2C2C2C", // Fundo escuro
        lightText: "#343A40", // Texto escuro
        darkText: "#EAEAEA", // Texto claro
        lightAccent: "#007BFF", // Azul claro
        darkAccent: "#39FF14", // Verde neon
        brown: {
          500: '#6b3f24',  // Escolha o tom de marrom que preferir
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
