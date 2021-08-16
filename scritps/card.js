// RENDERIZAR LAS TARJETAS DE HOTELES //

function crearHotel(hotel) {
    let containerCard = document.getElementById('container-card');

    const elemento = document.createElement('div');
    elemento.classList.add('card')

    elemento.innerHTML = `
    <div>
        <img src=${hotel.img} alt="${hotel.nombre}">
        <div class="container-info">
            <h2 class="tittle">${hotel.nombre}</h2>
            <p>${hotel.descripcion}</p>
        </div>
        <div class="location-card">
        <i class="bi bi-geo-alt-fill"></i>
            <span>${hotel.ciudad}, ${hotel.pais}</span>
        </div>
        <div class="info-room">
                    <i class="fas fa-bed"></i>
                    <span>${hotel.habitaciones} habitaciones</span>
                    <span><i class="fas fa-dollar-sign"></i>${hotel.precio} x noche</span>
                </div>
                <button class="btn-reserva" id="btn-reserva" onclick="modalHotel(${hotel.id})" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">RESERVAR</button>
    </div>
    `
    containerCard.appendChild(elemento);
}
hoteles.forEach(crearHotel);


$(document).ready(function() {
    $('.bi-instagram, .bi-twitter, .bi-facebook').hover(function() {
            $(this).addClass('active');
        },
        function() {
            $(this).removeClass('active');
        }
    );
});