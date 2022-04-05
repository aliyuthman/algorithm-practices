const log = (data) => console.log(data);


function bubbleSort(nums) {

    let swapped = false;
    
    do {
  
      swapped = false;
  
      for (let i = 0; i < nums.length; i++){
  
        if(nums[i] > nums[i + 1]){
  
          // [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  
          const temp = nums[i];
          nums[i] = nums[ i + 1];
          nums[i + 1] = temp;
  
          swapped = true;
        }
  
  
  
      }
    } while (swapped)
  
  
  
    return nums;
    
  
  }
  
  // unit tests
  // do not modify the below code
 
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    const sortedNums = bubbleSort(nums);


    log(sortedNums);
