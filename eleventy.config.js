module.exports = async function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/static/scss");
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};