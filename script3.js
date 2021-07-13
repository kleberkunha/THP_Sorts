const fs = require('fs');


const fileName1 = process.argv[2];

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
    console.log(quickSort(list));
  }
});

var quickSort = function(arr, start, end){
  
  var randomRangeNumber = function(min, max){
    return Math.floor(Math.random() * ( max - min + 1)) + min;
  };

  var randomizedPartition = function(arr, start, end){
    

    var pIndex = randomRangeNumber(start, end);
    
    var temp = arr[end];
    arr[end] = arr[pIndex];
    arr[pIndex] = temp;
    
    return partition(arr, start, end);
    
  };
  
  var partition = function(arr, start, end){

    start = start || 0;
    end = end || arr.length -1;

    var pivot = arr[end];
    
    var pIndex = start;

    var temp;

    for(var i = start; i < end; i++){
      if( arr[i] <= pivot ){

        temp = arr[i];
        arr[i] = arr[pIndex];
        arr[pIndex] = temp;

        pIndex++;
      }
    }

    temp = arr[pIndex];
    arr[pIndex] =  pivot;
    arr[end] = temp;

    return pIndex;
  };
  
  var qSort = function(arr, start, end){
    var pIndex;

    start = start || 0;
    end = end || arr.length -1;

    if(start < end){
      pIndex = randomizedPartition( arr, start, end);
      
      qSort(arr, start, pIndex-1);
      qSort(arr, pIndex+1, end);
    }

    return arr;
  };
  
  return qSort(arr, start, end);
};