### chess-eco-codes

[![Build Status](https://travis-ci.org/kevinludwig/chess-eco-codes.svg?branch=master)](https://travis-ci.org/kevinludwig/chess-eco-codes)

Lookup ECO codes from FEN. This is a work in progress.

### Usage

```
const eco = require('chess-eco-codes');

const data = eco('rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR b KQkq - 0 1');
console.log(data);

```

### Output

The result from the console log above would be 

```
{
    "code": "A00",
    "name": "Grob's Attack",
    "moves": "1. g4"
}
```

### Run tests

```

npm install
npm test

```
