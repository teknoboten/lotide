const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["everything", "is", "fine", "got", "my", "shinigami", "eyes"];
const numbers = [3, 5, 10, 80, 452, 6000];
const objects = [ { album: "geidi primes", year: 2010 }, { album: "visions", year: 2012 }, { album: "art angels", year: 2015 }, { album: "miss anthropocene", year: 2020 }];

const results1 = map(words, word => word[0]);
const results2 = map(numbers, n => n * 10);
const results3 = map(objects, a => a.year);

//testing
console.log(`testing an array of strings:`);
assertArraysEqual(results1, [ 'e', 'i', 'f', 'g', 'm', 's', 'e' ]);

console.log(`\ntesting an array of numbers:`);
assertArraysEqual(results2, [ 30, 50, 100, 800, 4520, 60000 ]);

console.log(`\ntesting an array of objects:`);
assertArraysEqual(results3, [ 2010, 2012, 2015, 2020 ]);