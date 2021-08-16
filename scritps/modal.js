let tituloModal = document.querySelector('#tituloModal');
let imgModal = document.querySelector('#imgHotelModal');
let ciudadModal = document.querySelector('#ciudadModal');
let paisModal = document.querySelector('#paisModal');
let descripcionModal = document.querySelector('#descripcionModal');
let habitacionesModal = document.querySelector('#habitacionesModal');
let precioModal = document.querySelector('#precioModal');
let elemento2 = document.createElement('div');


const modalHotel = (id) => {

    const hotelAlModal = getHotelById(id);



    hotelAlModal.map(hotel => {

        tituloModal.innerHTML = `
            ${hotel.nombre}
        `;
        imgModal.src = `${hotel.img}`;

        ciudadModal.innerHTML = `
        <i class="bi bi-geo-alt-fill"></i>
            ${hotel.ciudad},
        `;
        paisModal.innerHTML = `
            ${hotel.pais}
        `;
        descripcionModal.innerHTML = `
            ${hotel.descripcion}
        `;
        habitacionesModal.innerHTML = `
        <i class="bi bi-building"></i>
            ${hotel.habitaciones} Habitaciones
        `;
        precioModal.innerHTML = `
        <i class="bi bi-currency-dollar"></i>
            ${hotel.precio} (Precio por noche)
        `;

        elemento2.innerHTML = `
        <div class="cantidad-personas">
            <label for="" id="cantPersonas">Cantidad de personas:</label>
            <input type="number" id="personas">
        </div>
        <div class="cantidad-noches">
            <label for="" id="cantNoches">Cantidad de noches:</label>
            <input type="number" id="noches">
        </div>
        <button class="btn-consultar" id="consultar" onclick="consultar(${hotel.id})">Consultar</button>
        <div class="resumen" id="container-resumen">
           
            <p class="total" id="resultado"></p>
        </div>
        `
        containerForm.appendChild(elemento2);
    });

};

const getHotelById = (id) => {
    const getHotelStorage = JSON.parse(localStorage.getItem('hoteles')).filter((hotel) => hotel.id == id);
    return getHotelStorage;
};


//CONSULTAS CON PRECIO

const consultar = (id) => {

    const hotel = getHotelById(id);
    const precio = hotel.map(x => {
        return x.precio
    });

    let numeroPersonas = document.getElementById('personas').value;
    let numeroNoches = document.getElementById('noches').value;

    let multiplicacion = numeroPersonas * numeroNoches * precio;

    let mostrarResultado = document.getElementById("resultado");
    mostrarResultado.innerHTML = `Total a pagar: <i class="bi bi-currency-dollar"></i> ${multiplicacion}`

    document.getElementById('personas').value = "";
    document.getElementById('noches').value = "";
};

const confirmarReserva = () => {
    swal("Reserva confirmada", "Enviaremos la información a su correo electrónico", "success");
}