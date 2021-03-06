# Engineering Problems
[![CircleCI](https://circleci.com/gh/wptechprodigy/laundry/tree/master.svg?style=svg)](https://circleci.com/gh/wptechprodigy/laundry/tree/master) [![Build Status](https://travis-ci.org/wptechprodigy/laundry.svg?branch=master)](https://travis-ci.org/wptechprodigy/laundry)

This repo contains questions you should be able to solve in a reasonable amount of time.
It tests your understanding of JavaScript fundamentals.

You can run the test cases by running

```bash
yarn
yarn jest --watch
```

Or if you use npm

```bash
npm install
npm test -- --watch
```

You can elide the `--watch` flag to just run tests

If all tests pass, you have successfully solved the questions.

The solution to question 1 should go in `src/classifier.js`
The solution to question 2 should go in `src/laundry.js`
The solution to question 3 should go in `src/analysis.js`
The solution to question 4 should go in `src/report.js`

Ensure to write tests as necessary for any utility functions that you may create.

---
Do not delete the `node_modules` folder in the `src` folder, it is a hack to get the `api` files to be absolute.

You need the `api` module for Question 3-4.
See documentation for the `api` module at [api.md](./api.md)
