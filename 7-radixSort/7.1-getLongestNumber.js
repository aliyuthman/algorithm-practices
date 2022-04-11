const log = (data) => console.log(data);

const getLongestNumber = (array) => {
  let longest = 0;

  for (let i = 0; i < array.length; i++) {

    const stringifyCurrentValue = array[i].toString();// making the current value to a string to enable obtaining the length;


    const currentLength = stringifyCurrentValue.length;// obtaining the length

    longest = currentLength > longest ? currentLength : longest;

    
  }

  return longest;

};

const myArray = [30, 3000, 40000, 100000];

log(getLongestNumber(myArray));
