$(document).ready(function () {
    var timer = setInterval(countdown, 1000);
    var seconds = 60;
    var score = 0;
    
    $(".start").on("click", function () {
        $(".display1").hide();
        $(".display2").show();
        countdown()
    });

    $(".submit").on("click", function () {
        clearInterval(timer);
        $(".display2").hide();
        $(".display3").show();
        handleClick();
    });

    function countdown() {
        seconds--;
        $("#timer").html("<h2>" + seconds + "</h2>");
        if (seconds === 0) {
            $("#timer").append("<h2>You have run out of time!</h2>");
            clearInterval(timer);
            $(".display2").hide();
            $(".display3").show();
            handleClick();
        };
    };

    function handleClick() {
        for (let index = 1; index < 6; index++) {
            let answer = $("input[name='Q" + index + "']:checked").val();
            if (answer === "correct") {
                score++
            }
        }

        console.log("correct answers: " + score)
        console.log("wrong answers" + (5 - score))
    };
    $(".restart").on("click", function(){
        location.reload;
    });
});