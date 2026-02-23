# `@identity-js/identity`

Introducing Identity.js, the 10x identity function.

The identity function, $I(x)$, is a mathematical function that always returns the same value that was used as its argument, i.e., $I(x) = x$. This utility is often used in functional programming paradigms.

At 10x'ly made, we are always looking for new opportunities to make 10x libraries and then it struck us: what about an identity function? This package spreads **10x'ness** into the simple concept of an identity function. It's not just an identity function, it's a **10x identity function**.

## 💾 Installation

This project is a standard Node.js module.

```bash
npm install @identity-js/identity
```

## 🚀 Usage

The function accepts a single argument of any type and returns that argument unchanged.

```javascript
const identity = require("@identity-js/identity")
```

Identity.js also has an unstable version that uses deasyncing `Promise.resolve`. It is called unstable because this is a weird hack. You can use it instead if you want:

```javascript
const identity = require("@identity-js/identity/unstable")
```

Then you can just call it with a value and it will return that value:
```javascript
const identity = require("@identity-js/identity")

console.log(identity("hello world")) // "hello world"
```

## ✅ Testing

Tests are written using **Mocha**.

### Prerequisites
Clone this repository, cd into `packages/identity` and install dependencies and dev-dependencies.

### Running Tests

Execute the test suite:

```
npm test
```

This will execute the tests to ensure the function works correctly across various data types (numbers, strings, objects, booleans, `null`, and `undefined`).

## ✍️ License

This project is licensed under the Unlicense.