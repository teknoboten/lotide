const eqObjects = require('./eqObjects');
const inspect = require('util').inspect; // <- module provided by node that allows us to print objects to console 


const assertObjectsEqual = (a, b) => {  //takes in two objects and passes them to eqObjects
  
  let actual = eqObjects(a, b);  //save result of eqObject

  if (!actual) {  //print results to console
    console.log(`💀 ${inspect(a)} !== ${inspect(b)} 💀`);
  } else {
    console.log(`🌟 ${inspect(a)} === ${inspect(b)} 🌟`);
  }
};

module.exports = assertObjectsEqual;



//equalArrays checks for equality
//logs result to console