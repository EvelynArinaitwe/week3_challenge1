function arraySort(my_array=[]) {
    // Your code here
    if(typeof my_array==='number'){
        return 'invalid input';
    }
    else if(typeof my_array==='string'){
        return 'invalid input';
    }
    else{
    obj={
        evens: [],
        odds : [],
        chars : []
    };
    function sort_this(a, b) {
        return a > b ? 1 : b > a ? -1 : 0;
      }


    for(let i=0;i<my_array.length;i++){
        if (my_array[i]  % 2 === 0){//begin if then else
    
            //add the even index value to the evens array
            
            obj.evens.push(my_array[i]);
        
          }
          else if(my_array[i]  % 2 === 1){
            
            //add the odd index value to the odds array
            obj.odds.push(my_array[i]);
              
          }
          else{
              obj.chars.push(my_array[i]);
          }


    }
    obj.evens.sort(sort_this);
    obj.odds.sort(sort_this);
    obj.chars.sort();
   //console.log(obj);
   return obj;
}
}

//arraySort(['z',1000,120,8,61,60,4,'c',9,'b',3,100,'a']);

module.exports = arraySort;