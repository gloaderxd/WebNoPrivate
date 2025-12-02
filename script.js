      function whatsapp() {
        location.href = ("https://whatsapp.com/channel/0029Vb6o2K57YSd5yDEp7g1E")
      }
      function telegram() {
        location.href = ("https://t.me/AVESTRUUS")
      }

const miBoton = document.getElementById('miBoton');
const miDiv = document.getElementById('miDiv'); // ⬅️ ¡Aquí seleccionamos el <div>!
const button = document.getElementById('button');


miBoton.addEventListener('click', function() {
  miBoton.classList.toggle('activo');
  miDiv.classList.toggle('activo'); 
  button.classList.toggle('activo');
});
