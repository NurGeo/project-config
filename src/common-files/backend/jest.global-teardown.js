import { fsUtility } from './src/utility/fs-utility';

export default function () {
  fsUtility.removeDirSync(`${process.cwd()}/temp/tests`);
}
