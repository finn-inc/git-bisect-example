# Git Bisect Sample Project

This repository is for a practice of `git bisect` with Node.js、TypeScript、Jest.

## Setup

```bash
npm install
```

## Test
```
npm run test
```

## bisect

```
# start bisect
git bisect start

# mark current commit as bad
git bisect bad

# specify the past good commit which does not have any bugs
git bisect good <commit hash>

# run the test on each step
npm run test
```
