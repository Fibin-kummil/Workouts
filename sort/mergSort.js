// function mergSort(arr) {
//   if (arr.length<2) {
//     return arr
//   }
//   const mid = Math.floor(arr.length/2)
//   const leftArr = arr.slice(0,mid)
//   const rightArr = arr.slice(mid)
//   return merg(mergSort(leftArr),mergSort(rightArr)) 
// }

// function merg(leftArr,rightArr){
//   const sortArr=[]
//   while (leftArr.length&&rightArr.length) {
//     if (leftArr[0]<=rightArr[0]) {
//       sortArr.push(leftArr.shift())
//     }else{
//       sortArr.push(rightArr.shift())
//     }
//   }
//   return [...sortArr,...leftArr,...rightArr]
// }

// console.log(mergSort([-6,-8,1,10,8,0]));



