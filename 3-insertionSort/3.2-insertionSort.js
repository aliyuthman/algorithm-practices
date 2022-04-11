function insertionSort(nums) {

    let selectedNumber, outerIndex, innerIndex;
    let arrayLength = nums.length;
  
    for(outerIndex = 0; outerIndex < arrayLength; outerIndex++){
  
      selectedNumber = nums[outerIndex];
  
      for(innerIndex = outerIndex - 1; innerIndex >= 0 && nums[innerIndex] > selectedNumber; innerIndex--){
  
        nums[innerIndex + 1] = nums[innerIndex]
  
  
  
      }
  
      nums[innerIndex + 1] = selectedNumber;
  
  
  
    }
  
    return nums;
  }