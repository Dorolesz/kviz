import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

document.addEventListener('DOMContentLoaded', function(){
  const kvizForm = document.getElementById('kvizForm');

  kvizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const valaszok = [
      "Budapest",
      "Csendes-óceán",
      "Leonardo da Vinci",
      "1939",
      "Zöld",
    ];

    let pontszam = 0;

    for (let i = 0; i < valaszok.length; i++) {
      const felhasznaloValasza = document.getElementById(`k${i + 1}`).value.trim();
      if (felhasznaloValasza.toLowerCase() === valaszok[i].toLowerCase()) {
        pontszam++;
      }
    }

    let feedback = '';
    if (pontszam == 5) {
      feedback = `<div class="alert alert-success">Gratulálunk, hibátlan!</div>`;
    } else if (pontszam === 4) {
      feedback = `<div class="alert alert-warning">Szép megoldás!</div>`;
    } else if (pontszam === 3) {
      feedback = `<div class="alert alert-info">Jó teljesítmény!</div>`;
    } else {
      feedback = `<div class="alert alert-danger">Több gyakorlásra van szükség!</div>`;
    }

    document.getElementById('result').innerHTML = feedback;
    document.getElementById('score-meter').value = pontszam;
  });
});
