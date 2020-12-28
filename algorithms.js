function bubbleSort() {
  for(let k = 0;k<8;k++){
    if(i<values.length){
      let temp = values[j];
      if(values[j] > values[j+1]){
        values[j] = values[j+1];
        values[j+1] = temp;
      }
      j++;
      
      if(j>=values.length-i-1){
        j = 0;
        i++;
      }
    }
  }
}



function quickSort(){
  NewSortedList = []
  for(let k=0;k<QuickSortList.length;k++){
    tempValues = QuickSortList[k]
    if(tempValues.length > 1){
      piviot = tempValues.length-1
      low = 0
      high = tempValues.length-2

      while(high > low){
        if(tempValues[piviot]<tempValues[low]  && tempValues[piviot]>tempValues[high]){
          temp = tempValues[low]
          tempValues[low] = tempValues[high]
          tempValues[high] = temp
        }

        while(tempValues[piviot] > tempValues[low]){
          low +=1
        }
        while(tempValues[piviot] < tempValues[high]){
          high -=1
        }
      }
      insertPoint = NewSortedList.length
      insertPoint = insertPoint > 0 ? insertPoint: 0
      NewSortedList.splice(insertPoint, 0, tempValues.slice(low, tempValues.length-1)) 
      NewSortedList.splice(insertPoint, 0, [tempValues[piviot]]) 
      NewSortedList.splice(insertPoint, 0, tempValues.slice(0, high+1)) 
    }
    else{
      NewSortedList.splice(NewSortedList.length, 0, tempValues) 
    }
  }

  QuickSortList = NewSortedList
  values = QuickSortList.reduce(function(a,b){ return a.concat(b) }, []);
}
