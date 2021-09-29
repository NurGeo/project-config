import { SpecReporter } from 'jasmine-spec-reporter';
import CustomReporter = jasmine.CustomReporter;

const reporter = new SpecReporter({
  // add jasmine-spec-reporter
  spec: {
    displayPending: true,
    displaySuccessful: true,
    displayFailed: true,
  },
}) as unknown as CustomReporter;

// remove default reporter logs
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(reporter);

class MockStorage {
  storage = new Map()

  setItem(key: string, value: string) {
    this.storage.set(key, value);
  }

  getItem(key: string) {
    return this.storage.get(key);
  }

  removeItem(key: string) {
    this.storage.delete(key);
  }

  clear() {
    this.storage = new Map();
  }
}

// @ts-ignore
global.localStorage = new MockStorage();
