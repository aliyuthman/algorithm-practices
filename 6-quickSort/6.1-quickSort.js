const log = data => console.log(data)



function quickSort(nums) {
    //base case, array of length 0 or 1
    if (nums.length == 0) return []
    // if(nums.length < 2) return nums

    // log(nums);
  
    // choose pivot
    // const pivot = nums[Math.floor(nums.length/2)];
    const pivot = nums[0]; 
    const leftPivot = [];
    const rightPivot = [];
   
    //seperate arrays around the pivot into left and right
    for(let i = 1; i < nums.length; i++){


            if(nums[i] < pivot){
  
                leftPivot.push(nums[i]);
            
        
              } else {
          
                rightPivot.push(nums[i]);
              }
    }
  
    // log(leftPivot);
    // log(rightPivot);

    //call quickSort on left and arrays
    const left = quickSort(leftPivot);
    const right = quickSort(rightPivot);

  
  
    return left.concat(pivot, right);
  }



  log(quickSort([9, 3, 93, 9, 65, 94, 50, 90, 12, 65]));