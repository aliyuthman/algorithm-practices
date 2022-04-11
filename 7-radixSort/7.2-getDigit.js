const log = (data) => console.log(data);

const getDigit = (number, place, longestNumber) => {

    const numberStringify = number.toString();
    const numberStringSize = numberStringify.length;
  
  
    const mod = longestNumber - numberStringSize;
  
    return numberStringify[place - mod] || 0;
  
  }


 log( getDigit(20302, 2, 10700));