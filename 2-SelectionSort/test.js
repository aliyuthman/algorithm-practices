const log = data => console.log(data);

const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  
    //   const temp = array[index1];
    //   array[index1] = array[index2];
    //   array[index2] = temp;
  };

const selectionSort = array => {

    let min;
    let len = array.length;

    for(let i = 0; i < len; i++){
        min = i;
        const nextIndex = i + 1;
    
        for(let j = nextIndex; j < len; j++){

            if(array[j] < array[min]){
               
                min = j

            }   

        }
        
       
        swap(array, i, min);
        log(array.toString());
       
       
    }

    
  


    return array;

   


}

const arrayNums = [7, 2, 1, 10, 9, 4, 6, 3, 5, 8];


log(selectionSort(arrayNums))



