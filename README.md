# Cat-egory App

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

This site was developed with [create-react-app](https://github.com/facebook/create-react-app) and serves as the home page for [Cat-egory App](https://www.google.com).

### Getting Started

1. Fork the project
2. Clone your fork
3. Make sure you are in the right directory: `cd cat-egory`
4. Run `npm install` to install the project dependencies.
5. Run `npm start` to start your dev environment.

### Creating a new PR

1. Make sure you are on the `master` branch, and you have pulled the latest changes.

   > `git checkout master && git pull upstream master`

2. Install any new dependencies: `npm install`

3. Create a new branch off of the `master` branch.

   > `git checkout -b [NEW BRANCH NAME]`

   > **Branch naming conventions:** `fix/[BRANCH]` for bug fixes, `feature/[BRANCH]` for new features, `dev/[BRANCH]` for non-user-facing changes. The `[BRANCH]` portion should be kebab case. For example, if you want to update the README.md file, your branch could be called `dev/update-readme`

4. Make changes and commit them. `git add . && git commit -m "[YOUR COMMIT MESSAGE]"`.

   > The subject of a commit message (the first line) should be 72 characters or less. If you need more room for a longer explanation of your changes, you can add a blank line below the subject and write a commit body. The commit message should be in present-imperative tense ("Update README.md" rather than "Updates" or "Updated").

5. Push your branch to your fork: `git push -u origin [BRANCH NAME]`

6. Open a new PR against the `master` branch from your fork using the GitHub user interface.
