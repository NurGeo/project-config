const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
const conf = require('@rilata/project-configs/src/base-configs/frontend/protractor.conf');

/*
 * @type { import("protractor").Config }
 */
exports.config = {
  ...conf,
  specs: [
    './src/**/*.e2e-test.ts'
  ],
  directConnect: true,
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.spec.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
  }
}
