module.exports = async function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/static/scss");
  
  eleventyConfig.addCollection("posts", function (collectionsApi) {
	return collectionsApi.getFilteredByGlob("./src/posts/*.md");cfdxxxccccfdx
  });
  
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};