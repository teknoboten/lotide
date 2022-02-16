const map = (array, callback) => {
  const results = [];
  for (let i of array) {
    console.log;
    results.push(callback(i));
  }
  return results;
};

module.exports = map;





//how it works:

//map calls whatever callback function we pass it when we call it
//map is a *higher order* function because it uses a callback
//it's an inline anonymous arrow function word => word[0]
//which is a short form of:
/*
const wordFunc = (word) => {
  return word[0];
}
*/

