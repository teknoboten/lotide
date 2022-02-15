const assertEqual = require('../assertEqual');
const head = require('../head.js')

//testing head
console.log(`\ntesting head:\n`);
assertEqual(head([3, 4, 6]), 3);
assertEqual(head([3, 4, 6]), 7);
assertEqual(head(["pink", "green", "turquoise"]), "pink");
assertEqual(head(["pink", "green", "turquoise"]), "green");
assertEqual(head([]), undefined);
