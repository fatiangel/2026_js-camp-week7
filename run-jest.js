const jest = require('jest');
const path = require('path');

// Fix dotenv path for homework.js to work properly even when cwd is wrong
require('dotenv').config({ path: path.join(__dirname, '.env') });

const options = {
  projects: [__dirname],
  silent: false,
  runInBand: true
};

jest.runCLI(options, options.projects).then((success) => {
  console.log('Jest finished');
}).catch((failure) => {
  console.error('Jest failed', failure);
});
