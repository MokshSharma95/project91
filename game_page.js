number1 = localStorage.getItem("number1");
number2 = localStorage.getItem("number2");

number1_score = 0;
number2_score = 0;

document.getElementById("number1").innerHTML = number1 + " : ";
document.getElementById("number2").innerHTML = number2 + " : ";

document.getElementById("number1_score").innerHTML = number1_score;
document.getElementById("number2_score").innerHTML = number2_score;

document.getElementById("number_question").innerHTML = "Question Turn - " + number1;
document.getElementById("number_answer").innerHTML = "Answer Turn - " + number2;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    number_question ="<h3>" + number1 + " X "+ number2 +"</h3>";
    input_box = "<br>Answer : <input type='text id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = number_question + input_box + check_button ;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    
}
