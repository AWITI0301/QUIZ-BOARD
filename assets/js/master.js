function yourScore(){
    // alert("Good work")

    var quiz1=document.myForm.question1.value;
    var quiz2=document.myForm.question2.value;
    var quiz3=document.myForm.question3.value;
    var quiz4=document.myForm.question4.value;
    var quiz5=document.myForm.question5.value;
    var result= 0;

  var displayForm=document.getElementById("displayForm")
  var display=document.getElementById("display")
  display.style.display="visible"


    if(quiz1=="C"){ result++ }
    if(quiz2=="B"){ result++ }
    if(quiz3=="A"){ result++ }
    if(quiz4=="C"){ result++ }
    if(quiz5=="D"){ result++ }


    if(quiz1=="" || quiz2=="" || quiz3=="" || quiz4=="" || quiz5=="" ){
        alert("Please Answer All the questions")
    }
    var finalScore= result*20;
    if( finalScore>=80){
        displayForm.innerHTML= "Your Score is " + finalScore + "%" + "   "  + "Excellent"

    }
    else if( finalScore>=60 && finalScore<80){
        displayForm.innerHTML= "Your Score is " + finalScore + "%" + "  "  + "Fairly Done"

    }
    else if ( finalScore>=40 && finalScore<60){
        displayForm.innerHTML="Your Score is " + finalScore + "%"  + "  " + "Not Bad"

    }
    else if ( finalScore>=0 && finalScore<40){
        displayForm.innerHTML="Your Score is " + finalScore + "%"   + "  " + "Try Again!"

    }
  

}
function newComments(){
    var displayComments=document.getElementById("viewComments")
    displayComments.innerHTML="Wonderful, thank you for taking your time to go through the questions."}