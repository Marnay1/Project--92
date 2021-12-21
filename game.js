player1Name= localStorage.getItem("player1_name");
player2Name= localStorage.getItem("player2_name");
update_player1_score= 0;
update_player2_score= 0;

document.getElementById("player1_name").innerHTML= player1Name + ":";
document.getElementById("player2_name").innerHTML= player2Name + ":";

document.getElementById("player1_score").innerHTML= update_player1_score;
document.getElementById("player2_score").innerHTML= update_player2_score;

document.getElementById("question_player_turn").innerHTML= player1Name;
document.getElementById("answer_player_turn").innerHTML= player2Name;
function send(){
    number1= document.getElementById("Number1").value;
    number2= document.getElementById("Number2").value;
    actual_answer= parseInt(number1) * parseInt(number2);
    question_number= "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box= "<br> Answer: <input type='text' id='input_check_box'>"
    check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_number+ input_box + check_button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("Number1").value= "";
    document.getElementById("Number2").value= "";
}
question_turn= "player1";
answer_turn= "player2";
function check(){
    get_answer= document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(answer_turn == "player1"){
            update_player1_score= update_player1_score+ 1;
            document.getElementById("player1_score").innerHTML= update_player1_score;
        }
        else{
            update_player2_score= update_player2_score+ 1;
            document.getElementById("player2_score").innerHTML= update_player2_score;
        }        
    }
    if(question_turn == "player1"){
        question_turn= "player2";
        document.getElementById("question_player_turn").innerHTML= "Question Turn -" + player2Name;
    }
    else{
        question_turn= "player1";
        document.getElementById("question_player_turn").innerHTML= "Question Turn -" + player1Name;
    }
    if(answer_turn == "player1"){
        answer_turn= "player2";
        document.getElementById("answer_player_turn").innerHTML= "Answer Turn -" + player2Name;
    }
    else{
        answer_turn= "player1";
        document.getElementById("answer_player_turn").innerHTML= "Answer Turn -" + player1Name;
    }
    document.getElementById("output").innerHTML = " ";
}