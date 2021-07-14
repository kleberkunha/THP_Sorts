const fs = require('fs');


const fileName = process.argv[2];


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
    var sorter = new BubbleSort();
    sorter.sort(list);
  }
});


class BubbleSort{

  sort(array){
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
      count++;
    }
    console.log("Bubble: " + count + " Comparations: " + array);
  }
}