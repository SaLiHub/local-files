function bubbleSort(arr, length = arr.length) {
  for (; length > 2; --length) {
    for (let j = 0; j < length; j++) {
      let current = arr[j];
      let next = arr[j+1];
      if(current > next) {
        arr[j] = next;
        arr[j+1] = current;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([12, 3, 4, 5, 46]));


