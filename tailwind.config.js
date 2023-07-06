/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'black': '#282C33',
      // 'main': '#aa41a4',
      'main': 'inear-gradielnt(to right, #d7a849, #fcf6ba, #dea833, #fbf5b7)',
      'gray': '#ABB2BF',
      'white': '#fff',
      'vani': '#FDFAF1',

      // 'orange': '#ff7849',
      // 'green': '#13ce66',
      // 'yellow': '#ffc82c',
      // 'gray-dark': '#273444',
      // 'gray': '#8492a6',
      // 'gray-light': '#d3dce6',
    },
    fontFamily: {
      fira: ['fira'],
    },
    extend: {
      spacing: {
        'sm': '576px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
      },

    }
  },
  plugins: [],
}
