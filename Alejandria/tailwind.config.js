module.exports = {
  content: ["index.html","./src/**/*.jsx"],
  theme: {
    extend: {

      fontFamily: {
        roboto: "'Roboto', sans-serif",
        noto: "'Noto Serif', serif",
      },

      colors: {
        verde: '#447258',
        carne: '#F4F1EA',
        verdeClaro: '#98bda8'
      },

      backgroundImage: (theme) =>({
        'bck-img': "url('/src/public/background.png')",
        'nobck-img': "url('/src/public/nobck-icon.png')"
      }),
    },
  },
  plugins: [],
}
