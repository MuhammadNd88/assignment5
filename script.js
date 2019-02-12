var textInput = document.getElementById("text");
var textMessage = document.getElementById("textMsg");
var textMessage1 = document.getElementById("textMsg1");

var radioCity1 = document.getElementsByName("radio1");
var radioCity2 = document.getElementsByName("radio2");

var submitBtn = document.quizForm.button;
// radioMessage.style.display = "block";
var counter = 0;
var textInput = document.quizForm.text.value;
  textMessage.style.display = "none";
  textMessage1.style.display='none';

 
submitBtn.addEventListener("click", function(event) {
  if (textInput == 'k2') {
    event.preventDefault();
    console.log('correct');
    textMessage.style.display = "block";

    counter++;
   } else {
    event.preventDefault();
    console.log('False');
    textMessage1.style.display = "block";
   
  
  }
  
  if(radioCity1[0].checked == true){

    document.getElementById('radioMsg').innerHTML = 'Toronto';

  }
  else if(radioCity2[0].checked == true){

    document.getElementById('radioMsg').innerHTML = 'Ottawa';


  }
  else{


    document.getElementById('radioMsg').innerHTML = 'No input selected';
  }

});

