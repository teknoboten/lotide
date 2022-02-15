const tail = require('../tail');
const assertEqual = require('../assertEqual');


//testing tail
console.log(`\ntesting tail:\n`);

const roseFam = ["david", "moira", "alexis", "johnny"];
const result = tail(roseFam);
const expected = ["moira", "alexis", "johnny"];

const checkResult = (res, ex) => {
  for (let i = 0; i < res.length; i++) {
    assertEqual(res[i], ex[i]);
  }
};

checkResult(result, expected);