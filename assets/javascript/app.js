$(document).ready(function () {
    var timer = setInterval(countdown, 1000);
    var seconds = 60;
    var audioElement;
    var score = 0;
    question
    var questAnswer = { name:".value"};
    //the list Q1: "wrong" Q2: "correct"
    //var display; is this need with 
    $(".start").on("click", function () {
        $(".display1").hide();
        $(".display2").show();
        
    });

    $(".submit").on("click", function(){
        clearInterval(timer);
        $(".display2").hide(); 
        $(".display3").show();
        checked();
    });
    //checked() inside submit button & when time runs out
    function countdown() {
     
            seconds--;
            $("#timer").html("<h2>" + seconds +"</h2>");
         if (seconds === 0) {
            $("#timer").append("<h2>You have run out of time!</h2>");        
            clearInterval(timer);
            audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/audio/championCrop.mp3");
            audioElement.play();
            $(".display2").hide(); 
            $(".display3").show();
            checked();
           } 
    
    }

    //countdown();
    function checked() {
        $('input.name():checked' + 'input.value():checked').click(questAnswer ={ name : ("value")});
        if (value === "correct") {
            $document("#results").html(questAnswer);
            score++;
            $("#results").html("Your score is" + score / questAnswer.length + "%");                                //not questAnswer but total questions
            $(".display2").hide();
            $(".display3").show();
            console.log(score);
        }
    };

});