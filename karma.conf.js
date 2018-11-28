module.exports = function(config) {
  'use strict';

  config.set({
    frameworks: ['openui5', 'qunit'],
    openui5: {
      path: 'http://localhost:8080/resources/sap-ui-core.js',
      useMockServer: false
    },
    client: {
      openui5: {
        config: {
          language: 'EN',
          compatVersion: 'edge',
          preload: 'async',
          libs: 'openui5.ratingshroom',
          resourceroots: {
            'openui5.ratingshroom': 'base/src/openui5/ratingshroom',
            'test.unit': 'base/test/openui5/ratingshroom/unit'
          }
        },
        tests: ['test/unit/allTests']
      },
      clearContext: false,
      qunit: {
        showUI: true,
        testTimeout: 20000, //20 secs
        autostart: false,
        noglobals: true
      }
    },
    files: [
      {
        pattern: 'src/**',
        included: false,
        served: true,
        watched: true
      },
      {
        pattern: 'test/openui5/ratingshroom/unit/**',
        included: false,
        served: true,
        watched: true
      }
    ],
    preprocessors: {
      'src/**/!(thirdparty)/*.js': ['coverage']
    },
    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/',
      check: {
        global: {
          statements: 30,
          branches: 30,
          functions: 30,
          lines: 30
        }
      }
    },
    autoWatch: true,
    useIframe: false,
    browsers: ['ChromeHeadless'],
    reporters: ['progress', 'coverage'],
    reportSlowerThan: 200,
    singleRun: false
  });
};
