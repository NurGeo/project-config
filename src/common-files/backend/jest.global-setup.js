
import 'reflect-metadata';

// Import fs utility
// import { fsUtility } from './src/utility/fs-utility';

export default async function () {
  fsUtility.removeSync(`${process.cwd()}/temp/tests`);
}
