document.querySelector("#adauga").onclick = function (event) {
        //  event.preventDefault();  //  Anuleaza submit
        //  S-a apasat butonul avand id=verif
        var formElement = document.querySelector("form");
        var formData = new FormData(formElement);
        var xhtp = new XMLHttpRequest();
        xhtp.open("POST", "adaugare.json");  //	va fi "adaugare.php");

        // S-au primit date de la scriptul de pe server
        xhtp.onload = function () {
           	var raspunsobiect = JSON.parse(this.responseText);
			var blocraspuns = document.querySelector("#adaugare");
			
			if (raspunsobiect.mesaj == "da") 
			{
			var continutbloc = '<p class="italic centrat"><span class=\"litera italic\">P</span>rodusul <strong>{nume_produs}</strong><br />s-a adaugat in baza de date<br/><br/><br/>	Puteti adauga alt <a href="adaugare.html">produs</a> sau va puteti <a href="#">deconecta</a></p>';
			}
			else {
			var continutbloc = '<p class="italic centrat"><span class=\"litera italic\">P</span>rodusul {nume_produs}<br />NU s-a adaugat in baza de date</p><br/>Puteti adauga alt <a href="adaugare.html">produs</a> sau va puteti <a href="#">deconecta</a></p>';
			}
			continutbloc = continutbloc.replace('{nume_produs}', raspunsobiect.nume_produs);
			//ascund #blocform
			document.querySelector("#blocform").style.display='none';
			//scriu
			blocraspuns.innerHTML = continutbloc;
        };

        // S-a produs o eroare
        xhtp.onerror = function () {
            alert('Hopa! Ceva n-a mers!');
        };

        xhtp.send(formData);
    };