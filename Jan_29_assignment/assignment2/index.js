
var num = prompt("enter any number");
var num = parseInt(num);
console.log(num);
if (isNaN(num)) {
	alert("please enter valid number")
}
if(num%2==0){
	console.log("number is even");
}else{
	console.log("number is odd");
}