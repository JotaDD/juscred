/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      mgs: '1060px',
      mg: '1176px',
      lg: '976px',
      xl: '1200px',
      xl2: '1536px',
    },
    extend: {
      boxShadow: {
        menu: '-10px 0 10px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'jc-dark-blue': '#182D51',
        'jc-light-purple': '#6F6C90',
        'jc-light-yellow': '#FAC882',
        'jc-black': '#303030',
        'jc-white': '#EAEAEA',
      },
    },
  },
  plugins: [],
}
