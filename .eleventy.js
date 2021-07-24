module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("styles/main.css");
    eleventyConfig.addPassthroughCopy("styles/flexbox.css");
    eleventyConfig.addPassthroughCopy("styles/grid.css");
};
