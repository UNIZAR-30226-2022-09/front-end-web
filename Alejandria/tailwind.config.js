module.exports = {
  content: ["index.html","./src/**/*.jsx"],
  theme: {
    extend: {

      backgroundImage: (theme) =>({
        'bck-img': "url('/src/public/background.png')",
        'nobck-img': "url('/src/public/nobck-icon.png')"
      }),
    },
  },
  plugins: [],
}
