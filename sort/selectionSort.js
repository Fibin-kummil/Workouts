

function selectionSort(arr) {
  for(let i=0;i<arr.length-1;i++){
      let min = i
      for(let j=i+1;j<arr.length;j++){
          if(arr[min]>arr[j]){
               min = j
          }
      }
          temp = arr[i]
          arr[i] = arr[min]
          arr[min] = temp
  }
  return arr
}
console.log(selectionSort([3,-6,5,0,7,8,]));

