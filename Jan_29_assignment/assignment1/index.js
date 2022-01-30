var str = prompt("Enter the string");
var char = str.split("");
 console.log(char);
var count = 0;
for(var i=0; i<char.length; i++){

 if(char[i] == 'a' || char[i] == 'A' || char[i] == 'e'|| char[i] == 'E' || char[i] =='i' || char[i] =='I' || char[i] == 'o' || char[i]=='O' )
 {
   count++;
}
}
console.log("vovel is "+ count);
 
