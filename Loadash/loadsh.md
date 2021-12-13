<script src="lodash.js></script>
npm i lodash 
_.functionName(argument, iteratee); 


var arr=[1,2,3];
arr.reduce(function(prev,curr){
  return prev + curr;
})


_.sum(arr);//6

var obj={'a':1, 'b':2, 'c':3};
_.sum(obj);//6

