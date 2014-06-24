module.exports = function(config) {
  config.set({
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    
    files: [
      'src/core/**/*.js',
      'test/helpers/**/*.js',
      'test/**/*.js'
    ],

    reporters: ['dots']
  });
};
