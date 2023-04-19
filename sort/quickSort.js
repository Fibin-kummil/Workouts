// function quickSort(arr) {
//   if (arr.length<2) {
//     return arr
//   }
//   let pivot = arr[arr.length-1]
//   let right = []
//   let left = []
//   for (let i = 0; i < arr.length-1; i++) {
//     if (pivot>arr[i]) {
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }    
//   }
//   return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort([2,-8,4,11,0,10]));

// // Big-O = O(n^2)
// // avg cause = O(nlogn)


