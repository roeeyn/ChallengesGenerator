module.exports.generalReadmeTemplate = generationNumber => `
# Challenges Repository for Gen ${generationNumber}

## Folder Structure
There are at least 6 folders, with one challenge inside each one.
You should work on one challenge at a time, and after solving them, make one commit to the repo.
The challenges increase gradually the difficulty, so start with the first one.

## Quickstart
To solve the zero challenge, first clone this repo by executing:

\`\`\`
# Substitute YOUR_REPO_URL with this repo's git url
git clone YOUR_REPO_URL
\`\`\`

Then, install the dependencies by executing

\`\`\`
# Be sure to be inside the repo folder
npm install
\`\`\`

After installing the dependencies, you may try to give a look at the \`Challenge0\` folder, specifically the
\`README\` file inside it.

Run the tests for the challenge 0 by executing:

\`\`\`
npm run test-0
\`\`\`

If you haven't modify the \`challenge0.js\` file the test will fail, because it's receiving a different string than the
expected one. Modify the \`challenge0.js\` to return the expected string, and run the tests again.

If you modify correctly the file, the tests should pass, and you would be ready to go for the next challenges. :smile:

## Workflow
To work on each challenge, you should do the following for each one of the challenges:

### 1. Read the README
Inside each challenge folder, there's a README file, which includes the specific instructions for that challenge.
Read them carefully, and proceed to the \`challenge#.js\` where the \`#\` is the challenge number you're working on.

### 2. Read the tests
Inside the same folder, you should find a \`challenge#.test.js\` where contains all the AUTOMATED tests.
This tests will be run in a remote machine, so please **\`DO NOT MODIFY THIS FILE\`** as it may lead to unexpected behaviour.
You should use this file only to see what outputs are expected for certain inputs.

### 3. Write your code :rocket:
Inside the \`challenge#.js\` you should write the code that solves the challenge.
We put a little comment inside the function, so you can see where to write the code explicitly, but we strongly recommend
to take a look at the function, name and parameters.

### 4. Run the tests
Whenever you feel you solved the challenge, run the tests by executing:
\`\`\`
# Replace CHALLENGE_NUMBER for the number of the challenge you're solving
# e.g. for the challenge 5 you should execute "npm run test-5" without quotes.
npm run test-CHALLENGE_NUMBER
\`\`\`
Pay special attention to the test files that are executed, you may see that a lot of tests broke if you're just starting, but
if the file you worked on pass, you're good to go to the next step :smile:.

### 5. Commit and push your changes
Whenever you complete a challenge (congratulations! :tada:) you should commit the file you worked on, and push them to your
GitHub repository.
Remember, there may be tests that keep failing (you will get back and fix them later), but you must assure that the challenge you worked on, is passing.

### 6. Loop, and solve all the challenges
After you solve the challenge, you should get back and solve the next one.
**The objective is to make all the test pass**,
To run all the tests and verify you've finished, execute:

\`\`\`
# This will run all the tests
npm run test
\`\`\`

so if you see nothing but green letters in the console after running the tests, congratulations! You finished all the challenges! :tada: :tada:


`;
