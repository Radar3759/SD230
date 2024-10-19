
/**
 * Find the smallest and biggest numbers in an array
 * 
 * @param {number[]} arr - The array to search
 * 
 * @returns {number[]} - An array containing the smallest and biggest numbers in the array
 */

// I used Stack Overflow, considered freeCodeCamp's solution
function problemOne(arr)
{   
    let smallestArr = arr[0];
    let biggestArr = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if(arr[i] > biggestArr) {
            biggestArr = arr[i];
        } else if (arr[i] < smallestArr) {
            smallestArr = arr[i];
        }
    }

    return [smallestArr, biggestArr];
}

/**
  * Create a function that takes two numbers and returns the array of multiples of the first number until the array's last value reaches the second number.
  * If the second number is a multiple of the first number, it should be included in the array.
  * 
  * Example: problemTwo(7, 100) should return [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]
  * 
  * @param {number} num1 - The number to be multiplied
  * 
  * @param {number} num2 - The number to be reached
  * 
  * @returns {number[]} - The array of multiples
  * 
  */
function problemTwo(startingNumber, endingNumber)
{
    let multiplesArray = [];
    let x = 1;
    let i = startingNumber;

    while (i <= endingNumber) {
        multiplesArray.push(i);
        x++;
        i = startingNumber * x;
    } 

    return multiplesArray;
}

/**
  * Create a function that finds all common elements between two arrays.
  * 
  * Example: problemThree([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]) should return [2, 4]
  * 
  * @param {number[]} arr1 - The first array to be compared
  * 
  * @param {number[]} arr2 - The second array to be compared
  * 
  * @returns {number[]} - The array of common elements
  *
  */
function problemThree(arr1, arr2)
{
    let commonElements = [];

    for(const element1 of arr1) {
        for (const element2 of arr2) {
            if(element1 === element2) {
                commonElements.push(element1);
                break;
            }
        }
    }
    return commonElements;
    }




/**
  * Create a function that takes a nested array and counts the total number of items in all the arrays.
  * 
  * Example: problemFour([1, [2, 3], [4, [5, 6]], [7, 8, 9]]) should return 9
  * 
  * @param {number[]} arr - The array to be counted
  * 
  * @returns {number} - The total number of items in the array
*/

// I could make this pass tests 1,2 or 2,4, but not all four at the same time.
function problemFour(arr)
{
    let count = 0;

    for (i = 0; i < arr.length; i++) {
        count++;
    }


    return count;
}
