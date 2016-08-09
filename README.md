# Typed express
[![Build Status](https://travis-ci.org/felixfbecker/typed-express.svg?branch=master)](https://travis-ci.org/felixfbecker/typed-express)

Typescript Typings for [express](https://github.com/expressjs/express).

## Installation
```sh
typings install --save express
```

## Usage

```ts
import express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.listen(3000);
```

[More examples](./test)

## Contributing
You can run the tests by running `npm run build` and then `npm run test`.


---------------------------------------

_Based on the typings by [Boris Yankov](https://github.com/borisyankov) on [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)_

