$(function()
{
    $('#page').css('background-color', '#b06023');

    $('.link').css({
        'color': 'black',
        'text-decoration': 'none',
    });

    $('h2').css('letter-spacing','5px');

    $('[href="#"]').attr('href','https://wikipedia.org/wiki/');

    $('#button').click(function()
    {
        $('#page').css('background-color', 'yellow');
    });


    $('a').odd().css({

        'color': 'red',
        'background-color': 'blue'
    });
    
    $('a').even().css({

        'color': 'blue',
        'background-color': 'red'
    });




    $(function(){

    var $aaa = $('ul').html();
    console.log($aaa);
    $('ol').append($aaa);

    var $bbb = $('ul').text();
    console.log($bbb);
    $('p').append($bbb);
    
});

   
$("#przycisk").click(function()
{
    $li = $('li').eq(4).html();
    
    $('ul').append("<li>"+$li+"</li>");

});


$('input').on('blur', function(){

$('body').css('background-color',"green");
});

$('input').on('change',function(){

    $('input').css('background-color',"white");
});

$('input').on('focus',function(){

    $('input').css('background-color','red');
})

let i=0;
let j=0;
$('#prostokat').mouseover(function(){

    i++;
    $('#komunikat1').text("Najechano na prostokąt "+i+" razy");
    $('#komunikat2').text("");
}).mouseout(function(){
    $('#komunikat2').text("Opuszczono prostokąt");
});


$('#prostokat').click(function(){
    j++;
    $('#komunikat3').text("Kliknięto w prostokąt "+j+" razy");
})


});




