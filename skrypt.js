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
		a = document.getElementById('iimie').value
		b = document.getElementById('inazwisko').value
		c = document.getElementById('iemail').value
		d = document.getElementById('iwiadomosc').value 
		
		indeks1 = c.indexOf("@")
		indeks2 = c.indexOf(".")
		
		if (a=="" || b=="" || c=="" ||d == "")
		{
			alert("Brak danych")
		}
				
				else if (indeks1<0 || indeks2<0 || indeks1>indeks2)
				{
				alert("Zły mail")
				}
				
				else
				{
					alert("OK")
				}
		}

function wstawiaj()
{
var element = document.createElement('div'); //tworzymy nowego Diva
element.id = 'bloczek';
 
var body = document.getElementsByTagName('body')[0]; //pobieramy body
var wiadomosc = document.getElementById('wiadomosc');
body.insertBefore(element,wiadomosc);

}

function wstawiaj2()
{

}
