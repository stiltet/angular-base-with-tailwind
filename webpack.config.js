module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            syntax: "postcss-scss",
            plugins: [require("tailwindcss/nesting"), "tailwindcss", "autoprefixer"],
          },
        },
      },
    ],
  },
};
