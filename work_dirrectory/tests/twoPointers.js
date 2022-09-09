var sortedSquares = function(nums) {
  const result = [];
  for (let l = 0, r = nums.length - 1; l <= r;) {
    const leftSquared = Math.pow(nums[l], 2);
    const rightSquared = Math.pow(nums[r], 2);

    console.log(l, 'l');
    console.log(r, 'r');

    if(leftSquared < rightSquared) {
      result.unshift(rightSquared);
      r--;
    } else {
      result.unshift(leftSquared);
      l++;
    }
    
  }

  return result;
};

console.log(sortedSquares([-4,-1,0,3,10]));