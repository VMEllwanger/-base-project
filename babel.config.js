module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["@emotion", { "ssr": true }],
    "inline-react-svg"
  ]
};
