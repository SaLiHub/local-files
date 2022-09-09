


const arr = [];
for (let i = 0; i <= 100000000; i++) {
  arr.push(i);
}

const start = performance.now();

// var twoSum = function(nums, target) {
//   return nums.sort((a,b) => a - b);
  // let result = [];
  // for( let i = 0; i < nums.length; i++) {
      
  //     const index = hasRightNumber(nums, target - nums[i]);
  //     if(index) {
  //         result.push(i);
  //         result.push(index);
  //         return result;
  //     }
  // }
     
  
  // function hasRightNumber(arr, target, left = 0, right = arr.length - 1) {
  //     let mid = left + Math.floor((right - left) / 2);
  //     if(arr[mid] === target) return mid;
  //     if(left > right) return false;
  //     if(arr[mid] > target) {
  //        return hasRightNumber(arr, target, left, mid - 1)
  //     } else {
  //        return hasRightNumber(arr, target, mid + 1, right)
  //     }
  // }
    
// };
// twoSum(arr, 100000000);


//   function findIndex(arr, target, left = 0, right = arr.length - 1) {
//       let mid = left + Math.floor((right - left) / 2);
//       if(arr[mid] === target) return true;
//       if(left > right) return false;
//       if(arr[mid] > target) {
//          return findIndex(arr, target, left, mid - 1)
//       } else {
//          return findIndex(arr, target, mid + 1, right)
//       }
//   }
    
// const result = findIndex(arr, 100000000);

// var twosum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//      if(nums[i] === target) return;
//   }
    
// };


// twosum (arr, 100000000);




  var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        const another = target - nums[i]
        if(map[another] !== undefined) {
            return [map[another], i];
        }
        map[nums[i]] = i;
    }
};

// var twoSum = function(nums, target) {
//   let map = new Map();
//   for(let i = 0; i < nums.length; i++) {
//     const another = target - nums[i];
//     if(map.has(another)) {
//       return [i, map.get(another)]
//     } 
//     map.set(nums[i], i)
//   }
//   return null;
// }

// let twoSum = (nums, target) => {
//   let diffMap = new Map();
//   for(let i=0;i<nums.length; i++){
//       if(diffMap.has(target-nums[i])){
//           return [diffMap.get(target-nums[i]), i];
//       } 
//       diffMap.set(nums[i], i);
//   }
//   return [];
// };

// console.log(twoSum(arr, 9999900));




// var twoSum = function(nums, target) {
//   for(let i = 0; i < nums.length; i++) {
//      for(let j = i+1; j < nums.length; j++) {
//         if(nums[i] + nums[j] === target) {
//           return [i,j]
//         }
//   } 
//   }
// };

console.log(twoSum(arr, 9999999));

  const end = performance.now() - start;
  console.log(end)

