const log = (data) => console.log(data);

const getHighestPlaceValue = (array) => {
  let highestPlaceValue = 0;

  for (let i = 0; i < array.length; i++) {
    //Grab each number in the array
    const number = array[i];
    // log(number);

    // //covert it to string
    const numberString = number.toString();
    // log(numberString);

    // //find the length of numberString
    const numberStringLength = numberString.length;
    // log(numberStringLength);

    // //check if currentPlaceValue is the largest
    highestPlaceValue =
      numberStringLength > highestPlaceValue
        ? numberStringLength
        : highestPlaceValue;
  }

  return highestPlaceValue;
};

const getDigit = (number, index, largestPlaceValue) => {
  //100, 2, 3

  numberPlaceValue = number.toString().length; //3

  const mod = largestPlaceValue - numberPlaceValue;// 3 - 2 = 1

  return number.toString()[index - mod] || 0; //'100'.[2-1] = 2
};

const radixSort = (array) => {
  //base 10 radix-sort by least significant digit - 0 through to 9
  //create 10 buckets for radix 10
  const digitBuckets = new Array(10).fill().map(() => []);

  //the place value of the largest number determine the number of iteration or round for the sorting.
  //let determine the largest place value
  
  const highestPlaceValue = getHighestPlaceValue(array); //the iteration will go from highestPlaceValue - 1 back ward //for thousandth: 4 - 1 or 4 // for hundredth: 3 - 1 = 2 //for tenth: 2 - 1 = 1
 
  for (let i = highestPlaceValue - 1; i >= 0; i--) {

    log(array);
    log(`Round: ${i}`);
    while (array.length) {
        
       
      const currentValue = array.shift(); //grab the value

      //whats is the bucket number of the current value
      const bucketPlaceNumber = getDigit(currentValue, i, highestPlaceValue);
    //   log(placeValue);

      digitBuckets[bucketPlaceNumber].push(currentValue); //put the value into their corresponding buckets based on the return place value
       
      log(`${currentValue} goes to bucket ${bucketPlaceNumber}: ${digitBuckets[bucketPlaceNumber]}`);  
    }

   

    //for loop for each bucket
    for (let j = 0; j < 10; j++) {
      //dequeue all of the items out of the buckets
      while (digitBuckets[j].length) {
        array.push(digitBuckets[j].shift());
      }
    }
  }

  return array;
};

log(radixSort([12, 15, 3, 41, 100, 22, 4, 8, 502, 63, 7, 90, 83, 123, 1090]));