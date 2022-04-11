const log = (data) => console.log(data);

// const swap = (i, j, k) => {
//     i = j;
//     j = k;
//     i;
// }

const iterativeFibbonaci = (n) => {
  if (n == 0) return 0;
  if (n == 1) return 1;

//   if (n <= 1) return n;
  let firstFibbonaci = 0;
  let secondFibbonaci = 1;
 


  for (let i = 1; i < n; i++) {

    let fibbonaciSum = firstFibbonaci + secondFibbonaci;  // 0 + 1 = 1
  
    firstFibbonaci = secondFibbonaci;  
    secondFibbonaci= fibbonaciSum; //1

    // swap(firstFibbonaci, secondFibbonaci, fibbonaciSum);
     
   
  }

  return secondFibbonaci;
};

log(iterativeFibbonaci(10));





// const iterativeFibbonaci = (n) => {
//     // if (n == 0) return 0;
//     // if (n == 1) return 1;
  
//     if (n <= 1) return n;
  
//     let sum = 0;
//     let lastlast = 0;
//     let last= 1;
   
  
  
//     for (let i = 1; i < n; i++) {
  
//       sum = lastlast + last;  // 0 + 1 = 1
//       lastlast = last; //1
//       last = sum;
      
//       // swap(firstFibbonaci, secondFibbonaci);
//       // swap(secondFibbonaci, fibbonaciSum);
//     }
  
//     return sum;
//   };
  
//   log(iterativeFibbonaci(6));
  
