
    $('#button').click(function(){

    const red = $(".arrow-left")
    const blue = $(".arrow-up")
    const green = $(".arrow-right")
    const yellow = $(".arrow-down")

       
        red.animate({'right':'+=142px'},'slow')
        green.animate({'left':'+=158px'},'slow')
        blue.animate({'bottom':'+=160px'},'slow')
        yellow.animate({'top':'+=159px'},'slow')
    
        .delay(2000)
        .queue(function(next)
        {
            
            red.animate({'right':'+=80px'},'slow')
            blue.animate({'bottom':'+=81px'},'slow')
            green.animate({'left':'+=80px'},'slow')
            yellow.animate({'top':'+=81px'},'slow')
            
            next();   
        })

        .delay(1500)
        .queue(function(next)
        {
            
            red.animate({'right':'+=120px'},'slow')
            green.animate({'left':'+=120px'},'slow')
            blue.animate({'bottom':'+=120px'},'slow')
            yellow.animate({'top':'+=120px'},'slow')
            
            next();   
        })

    
    })

