module.exports = {
  content: [
    "./index.html", // Add your HTML files here
    "./src/**/*.{js,jsx,ts,tsx}", // Add your JS/TS files (for React or Vue)
  ],
  theme: {
    extend: {
      colors : {
        primary: "#4640DE"
      },
      fontFamily: {
        ClashDisplay: ['ClashDisplay','sans-serif']
      }
    },
  },
  plugins: [],
}
