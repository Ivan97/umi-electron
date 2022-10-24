module.exports = {
  // mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{ts,tsx,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-ease-in-out': 'spin 2s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
  plugins: [require('daisyui')],
  corePlugins: {
    preflight: false,
  },
};
