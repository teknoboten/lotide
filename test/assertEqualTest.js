const assertEqual = require('../assertEqual');
const head = require('../head');
// const { assertEqual, head } = require('..') <- how do i make that work?

// test assert equal
console.log(`\ntesting assert equal:\n`)
assertEqual("tekno", "tekno");
// assertEqual("serra", "boten");
// assertEqual(2,2);
// assertEqual(1,2);



//testing head
console.log(`\ntesting head:\n`);
assertEqual(head([3, 4, 6]), 3);
assertEqual(head([3, 4, 6]), 7);
assertEqual(head(["pink", "green", "turquoise"]), "pink");
assertEqual(head(["pink", "green", "turquoise"]), "green");
assertEqual(head([]), undefined);