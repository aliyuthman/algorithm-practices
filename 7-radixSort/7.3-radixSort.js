const log = (data) => console.log(data);

const getDigit = (number, place, longestNumber) => {
  const numberStringify = number.toString();
  const numberStringSize = numberStringify.length;

  const mod = longestNumber - numberStringSize;

  return numberStringify[place - mod] || 0;
};

const getLongestNumber = (array) => {
  let longest = 0;

  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i].toString().length;

    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
};

/************************************************************************/

function radixSort(array) {
  const longestNumber = getLongestNumber(array); //Step 1 - find longest number, this is to determine the highest place value

  //   //create how many buckets you need
  //   // an array of 10 arrays

  const digitBuckets = new Array(10).fill().map(() => []);

  //   //for loop for how many iterations you need to do
  for (let i = longestNumber - 1; i >= 0; i--) {
    //while loop
    while (array.length) {
      const current = array.shift();
      //enqueue the numbers into their buckets
      digitBuckets[getDigit(current, i, longestNumber)].push(current);
    }

    //for loop for each bucket
    for (let j = 0; j < 10; j++) {
      //dequeue all of the items out of the bucket
      while (digitBuckets[j].length) {
        array.push(digitBuckets[j].shift());
      }
    }
  }

  return array;
}

log(radixSort([1, 3, 2, 4, 100, 10, 9, 10, 20, 30]));
