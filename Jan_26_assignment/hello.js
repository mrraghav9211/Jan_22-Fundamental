
var n1= prompt("enter n1");
var n2= prompt("enter n2");
var n3= prompt("enter n3");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

 console.log(typeof n1 );

if (n1<n2 && n1<n3) {
	alert("n1 is minimun");
}
else if (n2<n1 && n2<n3) {
	alert("n2 is minimun");
} else
{
alert("n3 is minimun");
}
