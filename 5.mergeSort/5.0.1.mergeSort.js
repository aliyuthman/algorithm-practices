const log = data => console.log(data);

/*

Merge sort - approaches sorting in an entirely different manner. It uses a recursive tecniques, divide-and-conquer approach. 

Procedures: 

1. Splitting - it begins by splitting unsorted array into subarrays, repeatedly doing this until all subarrays have a length 1. Merge sort split the array into sub-arrays of a single item.


2. Compare - compare the individual items. Merge sort  then begins comparing all of the subarrays items against their neighboring subarrays. 


3. Merge - merge the items into a sorted array. Merge sort merge items back together in sort order. 


*/

const length = array => array.length;
const midpoint = length => Math.floor(length/2);
const compare = (leftArray, rightArray, i) =>  leftArray[i] <= rightArray[i];


const merge = (left, right) => {

    const results = [];
  
    while(length(left) && length(right)){
  
      if(compare(left, right, 0)){
        results.push(left.shift());
      } else {
        results.push(right.shift());
      }
      
    }
  
    //return one sorted array
    return results.concat(left, right);
  }


const mergeSort = array => {//array = [7, 3, 9, 2, 4, 1, 5, 6]

    log(array);

    if(length(array) < 2) return array;

    //check the base case here - (is array.length < 2) if yes, do nothing just return the array else split the arrays into two


    //split the array into two - you might want to use split helper function, if so wish

    const leftHalf = array.slice(0, midpoint(length(array)));
    const rightHalf = array.slice(midpoint(length(array)));

    //call mergeSort on the two halves and save for merging later above
    const leftArray = mergeSort(leftHalf);
    // log(mergeSort(leftHalf));

    const rightArray = mergeSort(rightHalf);
    // log(mergeSort(rightHalf));


    //merge the arrays from the two halves into one sorted arrays - you might want to use a merge and sort helper function if you so wish.

    const sortedMerged = merge(leftArray, rightArray);



    // return one sortedArray from merging result above;

    return sortedMerged;
}



log(mergeSort([7, 3, 9, 2, 4, 1, 5, 6, 8]));