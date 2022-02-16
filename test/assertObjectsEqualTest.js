const assertObjectsEqual = require('../assertObjectsEqual');

//test objects
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

//test
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
