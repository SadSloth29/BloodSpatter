/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./_App.tsx", "./app/index.tsx","./app/menu.tsx","./app/importpage.tsx","./app/Camerapage.tsx","./components/**/*,.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
       colors: {
      darkred: '#8B0000',
    },
    },
  },
  plugins: [],
}