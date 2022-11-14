
$("#butt").click(function(){

    $("#span1").css("visibility", "visible");
    $("#span1").animate({"left":"+=700px"},"fast")

    .delay(500)
    .queue(function(next){

        $("#span4").css("visibility", "visible");
        
        $("#span4").animate({"right":"+=750px"},"fast")
        next();
    })

    .delay(500)
    .queue(function(next){
        $("#span2").css("visibility", "visible");
        $("#span2").animate({"left":"+=660px"},"fast")
        next();
    })

    .delay(500)
    .queue(function(next){

        $("#span5").css("visibility", "visible");
        $("#span5").animate({"right":"+=710px"},"fast")
        next();
    })

    .delay(500)
    .queue(function(next){

        $("#span3").css("visibility", "visible");
        $("#span3").animate({"left":"+=620px"},"fast")
        next();
    })

    .delay(500)
    .queue(function(next){

        $("#span6").css("visibility", "visible");
        $("#span6").animate({"right":"+=670px"},"fast")
        next();
    })
    .delay(500)
    .queue(function(next){

        $('#span1, #span4').css({"color":"blue"})

        next();
    })
    
    .delay(500)
    .queue(function(next){

        $('#span2, #span5').css({"color":"purple"})

        next();
    })

    .delay(500)
    .queue(function(next){

        $('#span3, #span6').css({"color":"green"})

        next();
    })
    .delay(500)
    .queue(function(next){
        $(".left, .right").delay(500).css({"transform": "rotate(360deg)"});
        next();
    })

    .delay(1000)
    .queue(function(next){

        $('#span4').css({"right":"80px"})
        $('#span5').css({"right":"40px"})
        $('#span6').css({"right":"0"})

        $('#span1').css({"left":"80px"})
        $('#span2').css({"left":"40px"})
        $('#span3').css({"left":"0"})
        
        next();
    })
    .delay(1000)
    .queue(function(next){

      $("span").css("visibility", "hidden")
        
        next();
    })
})
