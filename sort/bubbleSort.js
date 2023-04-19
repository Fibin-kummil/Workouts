
// // ascending order

// function bubbleSort(arr){
// for (let i = 0; i < arr.length-1; i++) {
//   for (let j = 0; j < arr.length-1; j++) {
//     if (arr[j]>arr[j+1]) {
//       temp = arr[j]
//       arr[j] = arr[j+1]
//       arr[j+1] = temp
//     }
//   }
// }
// return arr
// }
// console.log(bubbleSort([11,6,-22,-1,10,2,3,1]));

// // Big-O = O(n^2)






// // ascending order--using do while loop

// function bubbleSort(arr) {
//   let swapped
//   do {
//     swapped = false
//     for (let i = 0; i < arr.length-1; i++) {
//         if (arr[i]>arr[i+1]) {
//           let temp = arr[i]
//           arr[i] = arr[i+1]
//           arr[i+1] = temp
//           swapped =true 
//         }
//     }
//   } while (swapped);
// }
// arr=[41,-4,4,-78,14,0]
// bubbleSort(arr)
// console.log(arr);

// // Big-O = O(n^2)






// // decending order 

// function bubbleSort(arr){
// for (let i = 0; i < arr.length-1; i++) {
//   for (let j = 0; j < arr.length-1; j++) {
//     if (arr[j]<arr[j+1]) {
//       temp = arr[j]
//       arr[j] = arr[j+1]
//       arr[j+1] = temp
//     }
//   }
// }
// return arr
// }
// console.log(bubbleSort([11,6,0,-22,-1,10,2,3,1]));

// // Big-O = O(n^2)






