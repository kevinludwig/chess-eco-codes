#!/usr/local/bin/node
const fs = require('fs'),
      path = require('path'),
      pgnParser = require('pgn-parser'),
      Chess = require('chess.js').Chess,
      chess = new Chess();


const data = fs.readFileSync('./eco.pgn', 'utf-8');
const ecos = pgnParser.parse(data);

const withFen = {};
for (const eco of ecos) {
    chess.reset();
    for (const {move} of eco.moves) {
        chess.move(move);
    }
    const code = eco.headers.ECO;
    const opening = eco.headers.Opening;
    const variation = eco.headers.Variation;
    withFen[chess.fen()] = {
        eco: code,
        name: opening + (variation ? ': ' + variation : ''),
        moves: chess.pgn()
    };
};

fs.writeFileSync(path.join(__dirname, 'codes.json'), JSON.stringify(withFen, null, 2));
