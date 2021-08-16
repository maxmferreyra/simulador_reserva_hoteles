 document.getElementById('enviar').addEventListener("click", (e) => {

     e.preventDefault();

     var nombre = document.querySelector('#user').value;
     var correoElectronico = document.querySelector('#email').value;
     var formulario = document.querySelector('#formulario')
     var mensaje = document.querySelector('#mensaje');
     mensaje.className = "mensaje";


     if (nombre.length == 0 || correoElectronico.length == 0) {
         return mensaje.innerHTML = `Completar los campos`;
     }
     mensaje.innerHTML = `Bienvenido ${nombre}`;

     formulario.reset();

     setTimeout(() => {
         window.location = "./hoteles.html";
     }, 3000);
 });



 $('a').hover(
     function() {
         $(this).addClass('active');
     },
     function() {
         $(this).removeClass('active');
     }
 );