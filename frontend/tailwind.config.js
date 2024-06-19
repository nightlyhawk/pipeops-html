module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#3d3741",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
