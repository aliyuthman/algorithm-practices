const log = (data) => console.log(data);


//create empty array and fill with empty arrays and fill with index value
const digitBuckets = new Array(10).fill().map(() => []);
// const digitBuckets = new Array(10).fill([]); //this might look to work thesame but there is drawback

for(let i =  0; i < digitBuckets.length; i++){

    log(digitBuckets[i].push(i));
}



console.log(digitBuckets);