const core = require('@actions/core');
const github = require('@actions/github');
import * as core from '@actions/core' 

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);


  await core.summary
  .addHeading('Test Results')
  .addCodeBlock(generateTestResults(), "js")
  .addTable([
    [{data: 'File', header: true}, {data: 'Result', header: true}],
    ['foo.js', 'Pass '],
    ['bar.js', 'Fail '],
    ['test.js', 'Pass ']
  ])
  .addLink('View staging deployment!', 'https://github.com')
  .write()


} catch (error) {
  core.setFailed(error.message);
}