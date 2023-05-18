// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = (n) => {

  //base; if n === 0 is true return 1 && if n < 0 return null
  //when false the function recusively calls itself 
  if(n === 0){ return  1} else if(n < 0){return null}
 
    
  //recursion: a number * the result of invoking the func - 1 
    return n * factorial(n - 1)

    // factorial(3) => 3 *(3 - 1) => 3 * 2

};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = (array) => {

  //base: if the lenght of the array strick= 0, return 0
  if(array.length === 0){ return 0;} 


  //recursion: return the array at the 0th index + the result of invoking sum on a copy of the array after the 0th index 
  return array[0] + sum(array.slice(1))

};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = (array) => {
};

// 4. Check if a number is even.
var isEven = (n) => {
  //base:
  //if input is || when it resolves to 0, return true: any even number recursively - 2 will = 0  
  if(n === 0){return true} 
  // the inverse is happening here, where any odd number recursively - 2 will = 1 
  else if(n === 1){return false} 

  //recusrion: if n is a negative number, return a recusive call 
  //if n is < 0 || a -n, recusively - -n || isEven(n); which hits the return statment of isEven(n -2) until it resolves to 0 || 1 
  else if(n < 0){return isEven(- n)} 
  //recursive call that continues to decrement input number until even(0) or odd(1) 
  return isEven(n - 2)

  /*
    ** isEven functinoality for negative numbers **
      isEven(-4) returns true, which invokes isEven(--4) || isEven(4)
         this then invokes isEven(n - 2) || isEven(4 -2) || isEven(2) which resolves to true ...repeats until 0 which will return true 


    ** isEven for positive numbers **
      isEven(10) returns false for less than 0; then isEven(n-2) || isEven(10 - 2) || isEven(8).....recurively until 0, which is truthy and returns true
        
    ** isEven for odd numbers **
      isEven(9) returns false for less than 0, isEven(n-2) || isEven(9 -2) || isEven(7)...recursively repeats until 1, which is falsey, and returns false

   * 
   * 
   * 
   */

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = (n) => {
  //base if n strick= 0; return 0
if(n === 0){ return 0}

//if n is less than 0, return that negative number plus 1, because its towards 0 plus sum below that negative number
else if(n < 0){ return n + 1 + sumBelow(n + 1)}

// else the number is postive so return towards 0, which is -1, plus the recurr call of n - 1
else {return  n - 1 + sumBelow(n - 1)}

/*
  ** Functionality for postive input 
    isBelow(5): 
     the function returns 5 - 1 + sumBelow(5 - 1) || 4 + sumBelow(4)... + 3 + 2 + 1 + 0 => 10
 * 
  ** Functionality for negative input
    isBelow(-5):
      the function returns -5 + 1 + sumBelow(-5 + 1) || -4 + sumBelow(-4)... + -3 + -2 + -1 + 0 => -10
 */
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range =  (x, y, out = []) => {

  const compass = x < y ? 1 : -1; 
  //if x and y are even, return an empty array
  if(x === y) return out;
  //if x and y are only one number apart, return an empty array
  if(x === y - compass) return out;
  // return a new array of <x> + the factor of x <||> y + the recusive invokation of range(x + compass, y)
  return out.concat(x + compass, range(x + compass, y));
}
//};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

    if (exp === 0){return 1}
    
    else if(exp === 1){return base}
    
    else if(exp < 0){return 1/exponent(base, -exp)}


    return base * exponent(base , exp -1)

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = (n) => {
//base 
  //case: when 2^0 = 1, return true/ stop
if(n === 1){return true}
//base
  //case: if a number isnt even or if a number is 0
else if(n % 2 !== 0 || n === 0){return false}
//recursion
  //case invoke function of input number divided by 2 recursively until true or false 
return powerOfTwo(n / 2)

};

// 9. Write a function that accepts a string a reverses it.
var reverse = (string) => {
//base
  //case: if a string length is less than one, return string
    if(string === ''){ return string}

//base
  //case: 

//recursion 
  // recusively call input string beginning at it's 1st index, plus the value of the 0th index 
    // 'hello' => ello + h
      //'ello' => llo + e
        //'llo' => lo + l
  return reverse(string.substr(1)) + string.charAt(0)

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = (str) => {
  //regex to remove spaces and characters
  // redeclre str to lowwer case and replace with regex 
  let  strr = str.toLowerCase().replace(' ', '');

  // base case
    // if the length of <str> is 1, or an empty string, then <str> is a palindrome
  if(strr.length === 1 || strr.length === 0){return true;}

    // if the first letter and the last letter isnt equal, then <str> isnt a palindrome
  if(strr.slice(0, 1) !== strr.slice(-1)){return false;}  
  
  //recursion
    // return <str> modified at the first and last index 
    return palindrome(strr.slice(1, -1) );


   // invoke Palindrome('eye')
   // BASE // 
}
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
};

// 12. Write a function that multiplies two numbers without using the * operator or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').

/*
  //BASE:
    // if x or y = 0, return 0
      //if y is less than 0
        //recursion
          //mulitply(2, -3)
            // returns -2 + multiply(2, -3 + 1 ) || -2 + multiply(2, -2)
              base // fail
                //recursion
                    -2 + -2 + multiply(2, - 1)
                      base //fail 
                        recursion 
                          -2 + -2 + -2 + multply(2, -1)
                            base // fail 
                            //recursion 
                              //-2 + -2 + -2 multiply(2, 0)
                                     => -2 + -2 + -2 + 0 = 6


*/
var multiply = function(x, y) {

      
  if (x === 0 || y === 0){return 0}

   
  if(y < 0){return -x + multiply(x, y+1)}
   
      
      return x + multiply(x, y-1)

};








// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {

 
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base:
    //if the length of both strings are empty return true
    if(str1.length === 0 && str2.length === 0){return true}
  //base:
  //if the 0th index of string1 doesnt = the oth index of str2, return false
  if(str1.charAt(0) !== str2.charAt(0)){return false}
  //recursion 
    // recursively return str1 & str2 and the 1st index untl it reaches base case of having a length of 0
  return compareStr(str1.slice(1), str2.slice(1))

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = (str) => {
  //if the lenght of a string is 0, return an empty array
  if(str.length === 0){return []}
  //else
    //return an array with the first index of a string,
      //use the spread op to include the return  values of the the recur call str.splice(1)
  return [str[0], ...createArray(str.slice(1))]
};

// 17. Reverse the order of an array
var reverseArr =  (array) => {
  
  //let arrayy = array.reverse()
if(array.length === 0){return []}

  let last = array.length - 1

  return [array[last], ...reverseArr(array.slice(0, last))]


};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = (value, length) =>{

  if(length === 0){return []}


  return [value, ...buildList(value, length -1)]
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = (array, value)  => {

if(array.length === 0){return 0}

return (array[0] === value ? 1 : 0 ) + countOccurrence(array.slice(1), value)

};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = (array, callback, output=[]) => {

  if(array.length === 0){return output}

  return [callback(array[0]), ...rMap(array.slice(1), callback, output)]
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------