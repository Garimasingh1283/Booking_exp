module.exports = {
  content: ['./index.html','./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#f6c90e', // yellow used in design
        accent: '#2b2b2b'
      },
      borderRadius: {
        xl: '12px'
      }
    },
  },
  plugins: [],
}
