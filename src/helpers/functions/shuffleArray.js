/**
 * Randomly shuffle an array
 *
 * @param {Array} array
 * @returns {Array}
 */
const shuffleArray = array => {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

export default shuffleArray;