module.exports = {
  // mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{ts,tsx,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
