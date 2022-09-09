function quickSort(arr) {
  if (arr.length < 2) return arr;
  const pivot  = arr[0];
  const left = [];
  const right = [];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
}