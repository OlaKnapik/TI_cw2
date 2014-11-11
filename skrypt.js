$(document).ready(function() {
	
	$("#wiadomosc").fadeOut();
	
	$(".txt a").click(function(){
		//if (a == 0){
		$(this).after('<p>Polubiłes ten post</p>');
		//a=a+1;
		//}
	 });

    $("#prawy").mouseenter(function(){
        $("#prawy").fadeTo(10,1);
    });
    
    $("#p4").click(function(){
    $("#wiadomosc").fadeIn();
    });
    
    $("#prawy").mouseleave(function(){
        $("#prawy").fadeTo(10,0.7);
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
		
		indeks1 = c.indexOf("@");
		indeks2 = c.indexOf(".");
		
		if (a=="" || b=="" || c=="" ||d == "")
		{
			alert("Brak danych");
		}
				
				else if (indeks1<0 || indeks2<0 || indeks1>indeks2)
				{
				alert("Zły mail");
				}
				
				else
				{
					alert("Wysłano :)");
				}
		}