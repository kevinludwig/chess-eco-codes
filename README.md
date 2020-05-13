### chess-eco-codes

[![Build Status](https://travis-ci.org/kevinludwig/chess-eco-codes.svg?branch=master)](https://travis-ci.org/kevinludwig/chess-eco-codes)

I grabbed the eco.pgn for [pgn-extract](https://www.cs.kent.ac.uk/people/staff/djb/pgn-extract/) and ran it through [pgn-parser]() to generate
a lookup table of fen string => opening name, for fast lookup in PGN viewer programs.

### Usage

```
const eco = require('chess-eco-codes');

const data = eco('rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR b KQkq g3 0 1');
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
