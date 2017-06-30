#!/usr/local/bin/node
const fs = require('fs'),
      path = require('path'),
      Chess = require('chess.js').Chess,
      A = require('./A'),
      B = require('./B'),
      C = require('./C'),
      D = require('./D'),
      E = require('./E'),
      chess = new Chess()
      codes = A.concat(B, C, D, E);

const withFen = codes.map(code => {
    chess.load_pgn(code.moves);
    return Object.assign({}, code, {fen: chess.fen()});
}).reduce((acc, code) => {
    acc[code.fen] = code;
    return acc;
}, {});

fs.writeFileSync(path.join(__dirname, 'codes.json'), JSON.stringify(withFen, null, 2));
