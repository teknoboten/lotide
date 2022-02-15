const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
// const { assertEqual, head } = require('..') <- how do i make that work?

// test assert equal
console.log(`\ntesting assert equal:\n`)
assertEqual("stevie", "stevie");
assertEqual(1,2);



//testing head
console.log(`\ntesting head:\n`);
assertEqual(head([3, 4, 6]), 3);
assertEqual(head([3, 4, 6]), 7);
assertEqual(head(["pink", "green", "turquoise"]), "pink");
assertEqual(head(["pink", "green", "turquoise"]), "green");
assertEqual(head([]), undefined);




//testing tail
console.log(`\ntesting tail:\n`);

const roseFam = ["david", "moira", "alexis", "johnny"];
// const emptyArr = [];
// const lonelyElement = ["stevie"];

let result = tail(roseFam);
let expected = ["moira", "alexis", "johnny"];

const checkResult = (res, ex) => {
  for (let i = 0; i < res.length; i++) {
    assertEqual(res[i], ex[i]);
  }
};

checkResult(result, expected);





//test for empty array
// console.log(`empty array:`);
// console.log(tail(emptyArr));

//test for one element
// console.log(`array with a single element:`);
// console.log(tail(lonelyElement));

// const result = tail(["david", "moira", "alexis", "johnny"]);

//test to make sure original array is not modified after tail is run
// console.log(`check the orignal array is not modified:`);
// assertEqual(roseFam.length, 4);