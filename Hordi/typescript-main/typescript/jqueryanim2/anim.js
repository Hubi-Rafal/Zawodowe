$("#reset").click(function(){
    const napis = $("#napis")
    const container = $(".container")
    const span = $(".span")
    span.css({'transform':'initial'},'fast-transform')
    napis.css({'transform':'initial'},'fast-transform')
    span.css({'color':'black'})
    napis.css({'top':''})
    napis.css({'font-size':''})
    napis.css({'letter-spacing':'0'})
    $('#button').prop('disabled',false)
})

$("#button").click(function(){
    const napis = $("#napis")
    const container = $(".container")
    
    $('#button').prop('disabled',true)

    .delay(2000)
    $(function(){
            
        container.animate({'top':'+=400','fontSize':'120px'},'fast')

        .delay(1300)
        .queue(function (next) {
            napis.css('letter-spacing','90px')
            next()
        })
        .delay(1000)
        .queue(function (next) {
            napis.css({'transform':'rotate(360deg)'})
            
            next();
        })
    
        .delay(1000)
        .queue(function (next) {
        
        const kolory = ['blue','red','green','purple','yellow'];
            console.log(random)
            console.log(kolory[random])

            for(var i = 0;i<5;i++)
            {        
                var random = Math.floor(Math.random() * 5);
                $('span').eq(i).css('color', kolory[random])
            }
                
            next();
        })
        .delay(1000)
        .queue(function (next) {
            const span = $('.span');
                
                span.css({'transform':'rotate(-360deg)'})
             
            next();
        })

    })

})