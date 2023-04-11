module.exports = function (api) {
    api.cache(true);
  
    const presets = [
      [
        "@babel/preset-env",{
        "corejs":3.6,
        "useBuiltIns":"usage",
        "debug":true
        }
      ]
    ];
    const plugins = ['@babel/plugin-proposal-destructuring-private'];
  
    return {
      presets,
      plugins
    };
  }