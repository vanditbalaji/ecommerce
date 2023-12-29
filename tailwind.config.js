// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         black: "#000000",
//       },
//     },
//   },
//   // Temporarily disable or adjust purge settings
//   purge: {
//     enabled: false,
//     content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "[auto,auto,1fr]": "auto auto 1fr",
    },
  },
  plugins: [],
};
