
import 'reflect-metadata';

// Import fs utility
// import { fsUtility } from './src/utility/fs-utility';

export default async function () {
  fsUtility.removeDirSync(`${process.cwd()}/temp/tests`);
}
