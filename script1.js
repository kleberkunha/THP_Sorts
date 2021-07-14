const fs = require('fs');


const fileName1 = process.argv[2];

/*SORT*/

fs.readFile('list.txt', 'utf8', (error, data) => {
  let count = 0
  const list = (data.split(` `)).map(numb=>{
    count++;
    return parseInt(numb);
  });
  if (error) {
      console.error(error.message);
      return ;
  }
  else{
    var sorter = new InsertionSort();
    sorter.sortIn(list);
  }
});


class InsertionSort{

  sortIn(array){
    let count = 0;
    for (let i = 1; i < array.length; i++) {
     var current = array[i];
     var j = i - 1;
      while (j >= 0 && array[j] > current){
       array[j + 1] = array[j];
       j--;
       count++;
      }
     array[j + 1] = current;
    }
    console.log("Insertion: " + count + " Comparations: " + array);
  }
}