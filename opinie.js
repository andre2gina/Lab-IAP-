document.querySelector("#adopinie").onclick = function (event) {
   //  S-a apasat butonul #adopinie
   var formElement = document.querySelector("form");
   var formData = new FormData(formElement);
   var xhtp = new XMLHttpRequest();
   xhtp.open("POST", "opinie.json");  //  Va deveni "opinie.php"!
   
   // S-au primit date de la scriptul de pe server
   xhtp.onload = function () {
      var raspunsobiect = JSON.parse(this.responseText);
      //console.log("raspunsobiect: " + raspunsobiect);
      var blocraspuns = document.querySelector("#rezopinie");
      var continutbloc = '<p class="italic centrat"><strong>{nume} {prenume}</strong> multumim pentru mesajul dvs.<br><br>Puteti citi <a href="vizite.html"><b>alte impresii despre site </b><a><br>sau puteti completa un alt  <a href="opinie.html"><b>Formular cu impresii</b></a></p>';

   continutbloc = continutbloc.replace('{nume}', raspunsobiect.nume);
   continutbloc = continutbloc.replace('{prenume}', raspunsobiect.prenume);

   //ascund #blocform
   document.querySelector("#blocform").style.display='none';
   //Inserez in #rezopinie
    blocraspuns.innerHTML = continutbloc;
   };


   // S-a produs o eroare
   xhtp.onerror = function () {
      alert('Hopa! Ceva n-a mers!');
   };

   xhtp.send(formData);
};