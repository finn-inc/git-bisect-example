import { helper, calculateEditDistance } from './utils/helper';

console.log(helper('Hello World'));
console.log(`Result of buggyFunction: ${calculateEditDistance('as', 'df')}`);

