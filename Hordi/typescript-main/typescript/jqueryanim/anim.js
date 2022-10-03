$('#anim').click(function () {
    const red = $('#red')
    const yellow = $('#yellow')
    const blue = $('#blue')
    const green = $('#green')
    const container = $('#container2')
    
    red.animate({'left':'+=175px','top':'+=53px'},'slow')
    yellow.animate({'right':'+=175px','top':'+=53px'},'slow')
    blue.animate({'left':'+=175px','bottom':'+=53px'},'slow')
    green.animate({'right':'+=175px','bottom':'+=53px'},'slow')
    
    .delay(2000)
    .queue(function (next) {
        container.css('transform','rotate(360deg)')
        next();
    })
  

});
