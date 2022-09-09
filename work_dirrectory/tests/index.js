

    const arr = [];
    for (let i = 0; i <= 1000000; i++) {
      arr.push(i);
    }

    const shuffledArray = shuffle(arr);
    console.log(shuffledArray);
    
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

      return [...quickSort(left), pivot, ...quickSort(right)]
    }

    function quickSort2(arr) {
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
      return quickSort2(left).concat(pivot, quickSort2(right))
    }



    // const start1 = performance.now();

    // console.log(quickSort(shuffledArray));

    // const end1 = performance.now() - start1;

    const start = performance.now();

    console.log(sortedSquares(arr));

    const end = performance.now() - start;

    // const start3 = performance.now();

    // console.log(shuffledArray.sort((a, b) => a - b));

    // const end3 = performance.now() - start3;

    // function sortedSquares(nums) {
    //   const result = [];
    //   let p = nums.length - 1;
    //   for (let l = 0, r = nums.length - 1; l <= r;) {
    //     const leftSquared = Math.pow(nums[l], 2);
    //     const rightSquared = Math.pow(nums[r], 2);

    
    //     if(leftSquared < rightSquared) {
    //       result[--p] = rightSquared;
    //       r--;
    //     } else {
    //       result[--p] = leftSquared;
    //       l++;
    //     }
        
    //   }
    
    //   return result;
    // };

    function sortedSquares(A) {
      let result = [];
      let l = 0;
      let r = A.length - 1;
      let p = r;
  
      while (l <= r) {
          if (A[l] ** 2 > A[r] ** 2) {
              result[p--] = A[l++] ** 2;
          } else {
              result[p--] = A[r--] ** 2;
          }
      }
      
      return result;
  };
    

    // const start4 = performance.now();

    // console.log(quickSort(shuffledArray));

    // const end4 = performance.now() - start4;

    console.log(end)




    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    }