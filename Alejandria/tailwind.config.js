module.exports = {
  content: ["index.html","./src/**/*.jsx",'./src/**/*.{html,js,ts,tsx}',
            './node_modules/tw-elements/dist/js/**/*.js',
            "./node_modules/flowbite/**/*.js"
          ],
  theme: {
    extend: {

      fontFamily: {
        roboto: "'Roboto', sans-serif",
        noto: "'Noto Serif', serif",
      },

      colors: {
        verde: '#447258',
        carne: '#F4F1EA',
        verdeClaro: '#98bda8',
        dorado: '#d69b41',
        doradoClaro: '#f3ca4c',
      },

      backgroundImage: (theme) =>({
        'bck-img': "url('/src/public/background.png')",
        'nobck-img': "url('/src/public/nobck-icon.png')",
        'bck-dark': "url('/src/public/bakgroundDark.png')",
        'bck-icon': "url('/src/public/icon.png')",
        'bck-notif': "url('/src/public/bck-notif.png)"
      }),
    },
  },
  plugins: [require('tw-elements/dist/plugin'),
            require('tailwind-scrollbar-hide'),
            require('flowbite/plugin')  
           ],
  darkMode: 'class',
}
