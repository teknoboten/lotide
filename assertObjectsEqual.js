const eqObjects = require('./eqObjects');

const assertObjectsEqual = (a, b) => {
  const inspect = require('util').inspect;
  let actual = eqObjects(a, b);
  if (!actual) {
    console.log(`💀 ${inspect(a)} !== ${inspect(b)} 💀`);
  } else {
    console.log(`🌟 ${inspect(a)} === ${inspect(b)} 🌟`);
  }
};

module.exports = assertObjectsEqual;
