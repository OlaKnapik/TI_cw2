$(document).ready(function() {
	
	$("#wiadomosc").fadeOut();
	
	
$("#p1").click(function() {
  $("#stopka").load("podstrona.html");
});
	
	
	
	$(".txt a").click(function(){
		//if (a == 0){
		$(this).after('<p id = "polubiles">Polubiłes ten post</p>');
		//a=a+1;
		//}
	 });
    
    $("#p4").click(function(){
    $("#wiadomosc").fadeIn();
    });
    

    $("#bwyslij").click(function(){
    wyslij();
    });
   
    $("#banuluj").click(function(){
    $("#wiadomosc").fadeOut();
    });
    
    $(".przycisk").mouseenter(function(){
    $(this).fadeTo(10,1);
    });
    
    $(".przycisk").mouseleave(function(){
    $(this).fadeTo(10,0.8);
    });
    
    odliczanie();
    
    //$('body').append('<h1>Im a paragraph</h1>');
    
    $("#stopka").mouseenter(function(){
    $("#stopka").css ("opacity" ,"1");
     });
     
    $("#stopka").mouseleave(function(){
    $("#stopka").css ("opacity" ,"0.5");
     });
    
 
    $("#obraz").mouseenter(function(){
    $("#obraz").css ("border-radius" ,"3px");
     });
     
    $("#obraz").mouseleave(function(){
    $("#obraz").css ("border-radius" ,"1000px");
     });
    
    
    //do slidera:
    var $sliders = $('.slider');
 
    $sliders.each(function() {
        var $current_slider = $(this);
        var $lista = $('.lista', $current_slider);
        var $li = $lista.children('li');
 
        if ($li.length > 3) {
            //wyliczamy odległość pojedynczego przesunięcia
            var odleglosc = $li.eq(0).outerWidth() + parseInt($li.eq(0).css('margin-left')) + parseInt($li.eq(0).css('margin-right'));
 
            //Maksymalne przesuniecie w lewo
            var maxLeft = odleglosc * $li.length - 1 * odleglosc;
 
            //Przesuniecia lewo/prawo
            $('.next', $current_slider).click(function() {
                if ($lista.position().left > -maxLeft) {
                    $($lista).not(':animated').animate({
                        'left' : '-='+odleglosc
                    },500);
                }
            });
 
            $('.prev', $current_slider).click(function() {
                if ($lista.position().left<0) {
                    $($lista).not(':animated').animate({
                        'left' : '+='+odleglosc
                    },500);
                }
            });
 
        } else {
 
            //wyłączmy działanie next i prev
            $('.next, .prev', $current_slider).click(function() {
                $(this).preventDefault();
                return false;
            });
 
        }
    });

});


//a=0;


function odliczanie()
		{
			var dzisiaj = new Date();
			var dzien = dzisiaj.getDate(); 
			var miesiac = dzisiaj.getMonth()+1;
			var rok = dzisiaj.getFullYear(); 
			var godzina = dzisiaj.getHours(); 
			if (godzina<10) godzina = "0"+ godzina;
			var minuta = dzisiaj.getMinutes();
			if (minuta<10) minuta = "0"+ minuta;
			var sekunda = dzisiaj.getSeconds(); 
			if (sekunda<10) sekunda = "0"+ sekunda;
			
			document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+"  "+godzina+":"+minuta+":"+sekunda;
			setTimeout("odliczanie()",1000);
		}	

	
function wyslij()
	{
		a = document.getElementById('iimie').value;
		b = document.getElementById('inazwisko').value;
		c = document.getElementById('iemail').value;
		d = document.getElementById('iwiadomosc').value;
		//e = document.getElementById('iemail').type;
		
		
		indeks1 = c.indexOf("@");
		indeks2 = c.indexOf(".");
		
		$("#timie").css ("background-color" ,"#FFFFD5");
		$("#tnazwisko").css ("background-color" ,"#FFFFD5");
		$("#temail").css ("background-color" ,"#FFFFD5");
		$("#twiadomosc").css ("background-color" ,"#FFFFD5");
		
		
		
		if (a=="")
			  {$("#timie").css ("background-color" ,"#FF928A");}
		
		else if (b=="")
			  {$("#tnazwisko").css ("background-color" ,"#FF928A");}
		
		else if (c=="" || indeks1<0 || indeks2<0 || indeks1>indeks2)
			  {$("#temail").css ("background-color" ,"#FF928A");}
		
		else if (d=="")
			 {$("#twiadomosc").css ("background-color" ,"#FF928A");}
			 
		else {alert("Wysłano");}
			  

		
	}
