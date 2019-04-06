$(document).ready(function () {
    var seconds = 60;
    var timer = 0;
    var audioElement;
    var score = 0;
    var questAnswer = { name(""): ("(.value)") };
    //the list Q1: "wrong" Q2: "correct"
    //var display; is this need with 
    $(".start").click(function (start)) {
        $(".display1").style.display = "none";
        $(".display2").style.display = "initial";
    }
    //checked() inside submit button & when time runs out
    function countdown() {
        timer = setInterval(timerFun, 1000);
        function timerFun() {
            seconds--;
            $("#timer").html("<h2>" + seconds + "</h2>");
        } if (seconds === 0) {
            $("#timer").append("<h2>You have run out of time!</h2>");
            clearInterval(timer);
            audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/audio/championCrop.mp3");
            audioElement.play();
            setTimeout(10000, $(".display2").style.display = "none" $(".display3").style.display = "initial");
            //wait 10000 then change displays
        } else {
            $(".submit").click($(".display2").style.display = "none" $(".display3").style.display = "initial");
        }
        console.log(countdown);
        countdown()
        function checked() {
            $('input.name():checked' + 'input.value():checked').click(questAnswer{ name("") + ("value")});
} if value() === "correct" {
    $document("#results").html(questAnswer);
    score++
    $("#results").html("Your score is" + score / questAnswer.length + "%");
    $(".display2").style.display = "none";
    $(".display3").style.display = "initial";
    console.log(score);
}

});