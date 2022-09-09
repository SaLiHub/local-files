function rotateRight(arr, k, n = arr.length) {
  k %= n;

  rotate(arr, 0, n-1);
  rotate(arr, 0, k-1);
  rotate(arr, k, n-1);
    function rotate(arr, left, right) {
        while(left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
  return arr;
}

console.log(rotateRight([1,2,3,4,5 ], 2));