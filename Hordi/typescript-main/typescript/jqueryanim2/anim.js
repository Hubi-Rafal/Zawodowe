$("#button").click(function(){
    const napis = $("#napis")
    const container = $(".container")
    container.animate({'top':'+=400','fontSize':'150px'},'fast')

    .delay(1000)
    .queue(function (next) {
        napis.css('letter-spacing','90px')
        next()
    })
    .delay(1000)
    .queue(function (next) {
        napis.css('transform','rotate(360deg)')
        
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
   /* .delay(1000)
    .queue(function (next) {
          const span = $('.span')
             span.css('transform', 'rotate(360deg)')
        
        next();
    })*/

})
