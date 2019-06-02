var score = 0;
$(document).ready(function () {
    var timer = setInterval(countdown, 1000);
    var seconds = 60; 
    $(".start").on("click", function () {
        $(".display1").hide();
        $(".display2").show();
    });

    $(".submit").on("click", function () {
        
        clearInterval(timer);
        $(".display2").hide();
        $(".display3").show();
        handleClick();
        countdown();
    });
    //checked() inside submit button & when time runs out
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
});
function handleClick() {
    console.log("handling click")
        for (let index = 1; index < 6; index++) {
            let answer =$("input[name='Q"+index+"']:checked").val();
            if (answer === "correct"){
                score++
            }
        }
        $('.correct').html("<div class id='stylethis'>correct answers: "+score+"</div>")
        $('.wrong').html("wrong answers: "+ (5-score))
};
$(".restart").on("click",function(){
    location.reload();
});