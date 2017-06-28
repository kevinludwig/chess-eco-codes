#!/usr/local/bin/node
const fs = require('fs'),
      path = require('path'),
      Chess = require('chess.js').Chess,
      codes = require('./codes'),
      chess = new Chess();

const withFen = codes.map(code => {
    chess.load_pgn(code.moves);
    return Object.assign({}, code, {fen: chess.fen()});
}).reduce((acc, code) => {
    acc[code.fen] = code;
    return acc;
}, {});

fs.writeFileSync(path.join(__dirname, 'codes.json'), JSON.stringify(withFen, null, 2));
