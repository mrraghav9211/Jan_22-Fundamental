
var firstNum = prompt("Enter the any number"); //user input 
var totalMark = parseInt(firstNum);            //convert string to integer

if (isNaN(totalMark)) {                        //check not a number
    alert(`please enter valid number < ${firstNum
    } > not a number`);
}else{

    var obj = {  //declare object

        "student":[   
        {
            "name": "GabbarRaghav",
            "marks": 80
        },
         {
            "name": "KumodSnake",
            "marks": 70
        },
         {
            "name": "RohitRaghav",
            "marks": 40
        },
         {
            "name": "MintuRaghav",
            "marks": 55
        },
         {
            "name": "GaganRaghav",
            "marks": 35
        },
         {
            "name": "KanhaiyaRaghav",
            "marks": 45
        },
         {
            "name": "ShashikantRaghav",
            "marks": 75
        },
         {
            "name": "NishuBwfa",
            "marks": 60
        },
         {
            "name": "SkekharRaghav",
            "marks": 45
        }

        ]
    };

    var counter = 0;
    var objLength = obj.student.length; //total length of object
    var num = obj.student; //total number of student in this object
    var i =0;            
    while(i<objLength){      //condition check
        var score =(num[i].marks)
        if(score >=totalMark){
            console.log(num[i].name); //counte the => marks student
           
            counter = counter+1;
        }
        i++;
    }
    console.log(`There are ${counter} student who have => ${totalMark} marks `);
    alert(`There are ${counter} student who have => ${totalMark} marks `);
}