const log = data => console.log(data);

/*

Linear search can be done on any array, sorted or not. 


*/

/*
---------------------------------
Linear Search
---------------------------------
Linear search scan the array, from start to end, comparing each array item against the value being sought until found. 

*/

const objArray = [ { id: 1, name: "Sam" }, { id: 11, name: "Sarah" }, { id: 21, name: "John" }, { id: 10, name: "Burke" }, { id: 13, name: "Simona" }, { id: 31, name: "Asim" }, { id: 6, name: "Niki" }, { id: 19, name: "Aysegul" }, { id: 25, name: "Kyle" }, { id: 18, name: "Jem" }, { id: 2, name: "Marc" }, { id: 51, name: "Chris" }, { id: 14, name: "Ben" } ]





const linearSearch = (id, array) => {

    for(let i = 0; i < array.length; i++){

        if(id == array[i].id){

            return array[i]
        }

    }





return void 0;

}



log(linearSearch(2, objArray));
