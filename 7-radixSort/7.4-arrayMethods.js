const log = data => console.log(data);

// log(`[1,2,3,4].shift() = ${[1,2,3,4].shift()}`);


const array1 = [];
const array2 = [1, 3, 5, 7];


// log(`${array1.push(array2.shift())}`.toString());

array1.push(array2.unshift(5));


log(array2);
log(array1)



