import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
import CustomReporter = jasmine.CustomReporter;

const reporter = new SpecReporter({
  // add jasmine-spec-reporter
  spec: {
    displayPending: true,
    displaySuccessful: true,
    displayFailed: true,
    displayStacktrace: StacktraceOption.PRETTY,
  },
}) as unknown as CustomReporter;

// remove default reporter logs
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(reporter);

class MockStorage {
  storage = new Map()

  setItem(key: string, value: string): void {
    this.storage.set(key, value);
  }

  getItem(key: string): unknown {
    return this.storage.get(key);
  }

  removeItem(key: string): void {
    this.storage.delete(key);
  }

  clear(): void {
    this.storage = new Map();
  }
}

// @ts-ignore
global.localStorage = new MockStorage();
