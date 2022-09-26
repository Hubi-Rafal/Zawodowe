
$(function(){
    
    $('input').on('keydown keypress', function(){
        $('span').eq(1).text(event.which)
    })
    
    $('input').on('keydown keyup keypress', function(){
        $('span').eq(0).text(' '+event.type)
    })

    $('h2').on('click dblclick mouseover mouseout', function(){
        $('span').eq(0).text(' '+event.type);
        const target = $(event.target)
        if(target.is('h2')) $('span').eq(1).text("Nie dotyczy")
    })

    $('input, h2').on('click', function(){
        $('span').eq(2).text(event.target.nodeName)
    })

});

$(function(){
    $('#wysun1').on('click', function() {
        $('#pierwszy').toggle().slideDown(1000);
    })

    $('#wysun2').on('click', function() {
        $('#drugi').toggle().slideUp(2000);
    })


    $('#wysun3').on('click', function() {
        $('#trzeci').slideToggle('slow');
    })

});

$(function(){
    $('#start1').click(function(){
        const div = $('#pierwsza');
        div.animate({'left':'+=300px'},'slow')
        div.animate({'top':'+=50px'},'slow')
        div.animate({'left':'+=700px'},600)
    })

    $('#start2').click(function(){
        const div = $('#druga');
        div.animate({'left':'+=300px'},'slow')
        div.animate({'top':'+=50px'},'slow')
        div.animate({'left':'+=700px'},800)
    });

    $('#start3').click(function(){
        $('#start1, #start2').click();
    })

    $('#reset').click(function(){
        $('#log').text('')
        $('#pierwsza,#druga').css({left:'',top:''})
    })

    $('#stop').click(function(){
        const kulka = $('.kulka');
        kulka.clearQueue();
        kulka.stop();
    })
});

