module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: '#1E3A8A', // Azul escuro
        secondary: '#F3F4F6', // Cinza claro
        dark: '#121212', // Preto
      },
    },
  },
  plugins: [],
};
