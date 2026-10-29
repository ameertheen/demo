# Contributing to Demo

Thanks for helping improve this project. This guide is written for beginners and will walk you through the basic steps for contributing safely and clearly.

## 1. Create a feature branch

Before making changes, create a new branch so your work stays separate from the main codebase.

```bash
git checkout -b my-feature-branch
```

If you prefer a more explicit command:

```bash
git switch -c my-feature-branch
```

Use a branch name that describes your work, for example:

- `fix-login-button`
- `add-contact-form`
- `update-readme`

This keeps changes organized and makes code review easier.

## 2. Review your changes with git diff

After editing files, review what changed before you commit.

```bash
git diff
```

This shows the exact lines added or removed. It helps you check for mistakes before saving your work.

If you want to see a specific file only:

```bash
git diff -- path/to/file
```

You can also check the status of your files:

```bash
git status
```

This helps confirm which files are modified and ready to be committed.

## 3. Run tests before committing

Before committing, run the project’s test command to catch problems early.

Common examples:

```bash
npm test
```

Or for a Node.js project with scripts:

```bash
npm run test
```

If the project has a different test command, check the README or package scripts. You can also inspect the available scripts:

```bash
npm run
```

If tests fail, fix the issues before moving on. It is much easier to correct mistakes before the code is committed or shared.

## 4. Create a pull request

Once your changes are complete and tests pass:

1. Stage your files:

```bash
git add .
```

2. Commit your work with a clear message:

```bash
git commit -m "Add beginner-friendly contribution guide"
```

3. Push your branch to GitHub:

```bash
git push origin my-feature-branch
```

4. Open the repository on GitHub.
5. Click the button to create a pull request.
6. Add a short title and clear description explaining what changed and why.
7. Submit the pull request for review.

## Recommended workflow

A simple beginner-friendly workflow looks like this:

```bash
git checkout -b my-feature-branch
# make your changes
git status
git diff
npm test
git add .
git commit -m "Describe your change"
git push origin my-feature-branch
```

Then open a pull request on GitHub.

## Tips for good contributions

- Keep your changes focused on one idea at a time.
- Write clear commit messages.
- Check your diff before committing.
- Run tests before submitting a pull request.
- Ask for help if you are unsure about a step.

Thank you for contributing and helping make this project better.
