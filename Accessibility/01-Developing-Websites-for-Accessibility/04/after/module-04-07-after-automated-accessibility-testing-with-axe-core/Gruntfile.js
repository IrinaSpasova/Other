// From the command line, run: grunt axe-webdriver

module.exports = (grunt) => {
    const axeRootPath = ``; // Add full path to this directory here
    const axePaths = [
        `${axeRootPath}index.html`,
        `${axeRootPath}account.html`
    ];

    grunt.initConfig({
        "axe-webdriver": {
            firefox: {
                options: {
                    browser: 'firefox',
                    browserArguments: ['--headless']
                },
                urls: axePaths,
                htmlDest: "axe-output.html"
            }
          },
    });

    grunt.loadNpmTasks('grunt-axe-webdriver');

};