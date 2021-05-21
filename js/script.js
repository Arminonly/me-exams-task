
// 1я задача

function getMaxSubSum(arr) {
   let maxSum = 0;
   let partialSum = 0;
 
   for (let item of arr) {
     partialSum += item;
     maxSum = Math.max(maxSum, partialSum);
     if (partialSum < 0) partialSum = 0;
   }
   return maxSum;
 }


alert( getMaxSubSum([-1, 2, 3, -9]) ); 



// 2я задача

   let s = prompt('цифры будут заменены дефисом')

let regexp = /\d/g;

console.log(regexp.test(s)); 

alert(s.replace(/\d/g, "-"));