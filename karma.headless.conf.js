module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: [require('karma-jasmine'), require('karma-chrome-launcher')],
        client: {
            clearContext: false, // leave Jasmine Spec Runner output visible in browser
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome', 'ChromeHeadless'],
        customLaunchers: {
            ChromeHeadless: {
                base: 'Chrome',
                flags: [
                    '--no-sandbox',
                    '--headless',
                    '--disable-gpu',
                    '--remote-debugging-port=9222',
                ],
            },
        },
        // singleRun: false, // Karma captures browsers, runs the tests and exits
        concurrency: Infinity,
    });
};
