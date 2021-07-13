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
    var sorter = new SelectionSort();
    sorter.sortIn(list);
  }
});


class SelectionSort{

  sortIn(array){
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++){ // j == 1
        if (array[i] > array[j]){  
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    console.log(array);
  }
}