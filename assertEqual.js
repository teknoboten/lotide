const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`🌟 ${actual} === ${expected} 🌟 `);
  } else {
    console.log(`💀 ${actual} !== ${expected} 💀 `);
  }
  
};

module.exports = assertEqual;

//recieves two primitive variables and checks for equality
//logs result to console