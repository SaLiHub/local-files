var moveZeroes = function(nums) {
    let i = 0;
    let snowball = 0;
    while(i < nums.length) {
        if(nums[i] === 0 ) {
            snowball++;
        } else if(snowball > 0) {
            let t = nums[i];
            nums[i] = 0;
            nums[i - snowball] = t;
        }
        i++;
    }
}

// var moveZeroes = function(nums) {
//     let j = 1, i = 0;
//     while(nums[j] !== undefined) {
//         const left = nums[i];
//         const right = nums[j];
//
//         if(left === 0) {
//             if(right !== 0) { // left 0 right >0
//                 nums[i] = right;
//                 nums[j] = left;
//                 i++;
//                 j++;
//             } else { // left 0 right 0
//                 j++;
//             }
//         } else { // left >0 right >0
//             i++;
//             j++;
//         }
//
//     }
// }

const arr = [0,1,0,3,12];
moveZeroes(arr)
console.log(arr);