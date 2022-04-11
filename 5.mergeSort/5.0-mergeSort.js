const log = (data) => console.log(data);


const myArray = [1, 7, 3, 5, 10, 9 , 4, 2, 11, 6]

// const middle = Math.floor(myArray.length/2);


// log(myArray.slice(0, middle));

const merge = (left, right) => {

    const results = [];
  
    while(left.length && right.length){
  
      if(left[0] <= right[0]){
        results.push(left.shift());
      } else {
        results.push(right.shift());
      }
    }
  
    //return one sorted array
    return results.concat(left, right);
  }
  
  const mergeSort = (nums) => {
    // base case, return if length 1 or 0
    if(nums.length < 2) { //if this is true, then everything has been sorted
      return nums; 
  
    }
  
  
    //break into two smaller arrays
    const length = nums.length;
    const middle = Math.floor(length/2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);
  
  //call mergeSort on left and right
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    
  // return the merge of left and right
    return merge(sortedLeft, sortedRight);
    
    
  
  };


  log(mergeSort(myArray));
  