
function check() {

    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;
    var number_correct=document.getElementById("number_correct");
    var quiz=document.getElementById(quiz);
     
    if (q1 =="Web") (c++)
    if (q2=="Object-based") (c++)
    if (q3=="It is a scripting language used to make the website interactive") (c++)
    if (q4=="JavaScript file and in HTML document directly") (c++)
    if (q5=="Semicolon (;)") (c++)
    if (q6=="All of the above") (c++)
    if (q7=="getElementById(id)") (c++)
    if (q8=="innerHTML") (c++)
    if (q9=="document.write()") (c++)
    if (q10=="console.log()") (c++)
    
    document.write(c)

    var messages=["Good perfomance", "Average perfomance, there is room for improvement","poor perfomance, you really need to do more on your class work"];

    var range;
         if(correct<4) {
             range=2;
         }
         if(correct>4 && correct<=7) {
             range=1;
         }
         if (correct>7) {
             range=0;
         }



   
    document.getElementById("message").innerHTML=messages(range);
   
    quiz.style.display="none"

    document.getElementById("after_submit").style.visibility="visible";
    
}