/**
 * Average the values of an grades documents. Return value with only 1 decimal place.
 *
 * Example: problemOne({CS230: 95, CS250: 89, CS133: 91}) should return 91.7
 *
 * Values can be numbers or strings. If a value is a string, ignore it.
 *
 * Numbers will be between 0 and 100. Handle situations where the number is not in this range.
 *
 * @param {object} obj - The object of class grades.
 *
 * @returns {number}
 */

function problemOne(obj) {
  let avg;

  //add your code here
  let grades = 0;
  let count = 0;
  for(let key in obj) {
    let total = obj[key];
    
    if (typeof total === 'number' && total >= 0 && total <= 100 ){
      grades += total;
      count++;
    } 
    else if (typeof total === 'string' && total.trim() === " ") {
      obj[key] = undefined; 
    }
  }
  avg = grades / count;
  //to one decimal place    
  return parseFloat(avg.toFixed(1));
}
// console.log(problemOne({SD123: "", SD122: 93}));

/**
 * Convert an object to an array, where the keys are the first element in each subarray, and the values are the second element.
 *
 * Example (input): {a: 1, b: 2, c: 3}
 *
 * Example (output): [['a', 1], ['b', 2], ['c', 3]]

 * @param {object} obj
 *
 * @returns {array}
 */
function problemTwo(obj) {
  let arr;

  //add your code here
  // My first two tests are showing expected === actual, but don't show as green. Console seemed to be showing correct results. 
  let arrList = [ ];
  for(let key in obj) {
    arrList.push([key, obj[key]])
  }
  arr = arrList;
  return arr;
}
// console.log(problemTwo({a:1, b:2}));


/**
 * 
 * 
 * You are given a hand of five playing cards.
 * Each card is represented as an object with a suit and a value.
 *
 * Example: [
 * {suit: 'clubs', value: 10},
 * {suit: 'hearts', value: 10},
 * {suit: 'spades', value: 1},
 * {suit: 'hearts', value: 'J'},
 * {suit: 'spades', value: 'A'}]
 *
 * Write a function that return whether you have a
 * straight flush, four of a kind, full house, flush, straight, three of a kind, two pair, one pair, or high card.
 *
 * A straight flush is a hand that contains five cards of sequential value, all of the same suit.
 * A four of a kind is a hand that contains four cards of the same value.
 * A full house is a hand that contains three cards of one value, and two cards of another value.
 * A flush is a hand that contains five cards of the same suit.
 * A straight is a hand that contains five cards of sequential value.
 * A three of a kind is a hand that contains three cards of the same value.
 * A two pair is a hand that contains two cards of one value, and two cards of another value.
 * A one pair is a hand that contains two cards of the same value.
 * A high card is any hand that does not fit any of the above categories.
 *
 * Think about how you would structure this logic to be easy to read and understand
 * especially when it comes to the definitions of these hands.
 */
function problemThree(hand) {
  let typeofHand;

  //add your code here
  
  
      return typeofHand;
  }


/**
 * Check if two objects are equal in keys and values.
 * This has to handle deeply nested objects.
 *
 * @param {object} objOne
 *
 * @param {object} objTwo
 *
 * @returns {boolean}
 *
 */
function problemFour(objOne, objTwo) {
  let isEqual;

  //add your code here
  
  isEqual = JSON.stringify(objOne) === JSON.stringify(objTwo);
  return isEqual;
}
