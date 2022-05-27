
$('#nick').on('blur', function() {
		var input = $(this);
		var nick_length = input.val().length;
		if(nick_length >= 5 && nick_length <= 15)
        {
			input.removeClass("invalid").addClass("valid");
		}
		else
        {
			input.removeClass("valid").addClass("invalid");			
		}
});

$('#name').on('blur', function() {
		var input = $(this);
		var name_length = input.val().length;
		if(name_length >= 3 && name_length <= 15)
        {
			input.removeClass("invalid").addClass("valid");
		}
		else
        {
			input.removeClass("valid").addClass("invalid");			
		}
});


$('#lname').on('blur', function() {
    var input = $(this);
    var lname_length = input.val().length;
    if(lname_length >= 3 && lname_length <= 15)
    {
        input.removeClass("invalid").addClass("valid");
    }
    else
    {
        input.removeClass("valid").addClass("invalid");			
    }
});

$('#pass').on('blur', function() {
    var input = $(this);
    var input1 = $('#ppass');
    var pass_length = input.val().length;
    var pass = $('#pass').val();
    var pass1 = $('#ppass').val();

    if(pass_length >= 3 && pass_length <= 15)
    {
        input.removeClass("invalid").addClass("valid");
        
        if(pass==pass1)
        {
            input1.removeClass("invalid").addClass("valid");
        }
        else
        {
            input1.removeClass("valid").addClass("invalid");
        }

    }
    else
    {
        input.removeClass("valid").addClass("invalid");			
    }
});

$('#ppass').on('blur', function() {
    var input = $(this);
    var input0 = $('#ppass').val();
    var input1 = $('#pass').val();
    
    if(input0 == input1)
    {
        input.removeClass("invalid").addClass("valid");
    }
    else
    {
        input.removeClass("valid").addClass("invalid");			
    }
});


$('#mail').on('blur', function() {
    var input = $(this);
    var input0 = $('#mail').val();
    var wzor = /^\S+@\S+\.\S+$/;
    
    if(input0.match(wzor))
    {
        input.removeClass("invalid").addClass("valid");
    }
    else
    {
        input.removeClass("valid").addClass("invalid");			
    }
});


$('#pesel').on('blur', function() {
    var input = $(this);
    var input0 = $('#pesel').val();
    
    var tab1 = input0.split('');
    var rok = tab1[0]+tab1[1];

    var mies = tab1[2]+tab1[3]
    var dzien = tab1[4]+tab1[5]
    if(mies>=21 && mies<=32)
    {
        var rok1 = 20+""+rok;
        var mies1 = mies-20;
    }
    if(mies>=41 && mies<=52)
    {
        var rok1 = 21+""+rok;
        var mies1 = mies-40;
    }
    if(mies>=61 && mies<=72)
    {
        var rok1 = 22+""+rok;
        var mies1 = mies-60;
    }
    if(mies>=81 && mies<=92)
    {
        var rok1 = 18+""+rok;
        var mies1 = mies-80;
    }
    if(mies>=01 && mies<=12)
    {
        var rok1 = 19+""+rok;
        var mies2 = mies.split("");
        mies1 = mies2[1];
    }



    
  



    if(input0.length == 11)
    {    
        var liczba = 0;
        var j=1;
        var i;
    
        liczba = tab1[0]*1 + tab1[1]*3 + tab1[2]*7 + tab1[3]*9 + tab1[4]*1 + tab1[5]*3 + tab1[6]*7 + tab1[7]*9 + tab1[8] * 1 + tab1[9]*3 + tab1[10]*1;
        var liczbatab = (""+liczba).split("");
        
        if(liczbatab[2]==0)
        {
            input.removeClass("invalid").addClass("valid");
        }else{
            input.removeClass("valid").addClass("invalid");
        }
        
		if(tab1[9]== 1 || tab1[9]== 3 || tab1[9]== 5|| tab1[9]== 7 ||tab1[9]== 9)
		{
			$('#kob').prop("checked",false);
			$('#mez').prop("checked",true);
			
		}
		else
		{
			$('#mez').prop("checked",false);
			$('#kob').prop("checked",true);
		}


    }
    else
    {
        input.removeClass("valid").addClass("invalid");			
    }

    if(mies1<10)
    {
        mies1 = "0"+mies1;
    }
    
        var data = rok1+"-"+mies1+"-"+dzien;

    $('#data').val(data);
});