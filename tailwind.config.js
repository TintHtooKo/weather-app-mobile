/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors : {
        orange : '#ff5442',
        skyBlue : '#45bbfc',
        purpleDark : '#182233',
        secondaryDark : '#93a1b9',
    }
    },
  },
  plugins: [],
}