# [fccDailyCodingChallenge](https://www.freecodecamp.org/learn/daily-coding-challenge/)

## How to tune up your performance or bedug your code

1. install [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner). It is easy to run your code.
2. And then add some different implementations.
3. Finally try this lines:

```js
const start = performance.now();
sequenceRecursive(100000);
const end = performance.now();
console.log(`Duration: \n${end - start} ms`);
```
