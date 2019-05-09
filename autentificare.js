document.querySelector("#verif").onclick = function (event) {
	//  S-a apasat butonul avand id=verif
	var formElement = document.querySelector("form");
	var formData = new FormData(formElement);
	var xhtp = new XMLHttpRequest();
	xhtp.open("POST", "autentif.json");  //  Va fi autentif.php

	// S-au primit date de la scriptul de pe server
	xhtp.onload = function () {
		var raspunsobiect = JSON.parse(this.responseText);
		var blocraspuns = document.querySelector("#verificat");
		if(raspunsobiect.autentificat == "da") {
		   var continutbloc = '<p class="italic centrat"><strong>{nume}, </strong> Sunteti autorizat<br><br><br>Puteti <a href="adaugare.html">adauga</a> produse in baza de date</p>';
		 } else {
		   var continutbloc = '<p class="italic centrat"><strong>{nume},</strong>NU Sunteti autorizat<br><br><br>Puteti incerca din nou sa va <a href="login.html">autentificati</a></p>';
		}
		continutbloc = continutbloc.replace('{nume}', raspunsobiect.nume);
		//ascund #blocform
		document.querySelector("#blocform").style.display='none';
		//afisez raspunsul
		blocraspuns.innerHTML = continutbloc;
		
	};

	// S-a produs o eroare
	xhtp.onerror = function () {
		alert('Hopa! Ceva n-a mers!');
	};

	xhtp.send(formData);
};