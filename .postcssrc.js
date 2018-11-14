module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 100,
      propList: ["*"]
    },
    autoprefixer: {
      browsers: ["last 2 versions", "> 4%", "iOS 7"]
    }
  }
};
