
$("button").click(function(){
   let answerOne=$(".a1").val();
   		let answerTwo=$(".a2").val();
    		let answerThree=$(".a3").val();
    let bigResult=48*answerThree;
        let bigResultTwo=1482*answerTwo;
		    let bigResultOne=1482*answerOne;

    
    let resultOne=1482;
    let resultTwo=1482;
    let resultThree=48;
    
    
    $(".bigAnswer").append("<h1>" + "By the year 2025 you will have liked" + " " + bigResultOne + " "+  "posts and have played" + " " + bigResultTwo + " " + "matches you will also have spent" + " " + bigResult + " " +"hours on your phone");
});

