
var totalVal = prompt("enter toatal value");
var arr = [];
var i = 0;
while(i<totalVal){
    var value= prompt("enter number");
    arr.push(value);
    i++;
 }
  console.log(arr);
 var max = arr[0];
 var i = 0;
 while(i<totalVal){
    if (arr[i]>max) {
        max = arr[i];
    }
    i++;
 }
 alert("the maximum number is "+ max);
 console.log(max);


