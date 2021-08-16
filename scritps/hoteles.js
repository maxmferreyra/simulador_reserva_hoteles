const hoteles = [{
        id: 1,
        nombre: 'La Bamba de Areco',
        img: './images/la-bamba-de-areco.jpg',
        descripcion: 'La Bamba de Areco está ubicada en San Antonio de Areco, en el corazón de la pampa. Es una de las estancias más antiguas de la Argentina, recientemente restaurada para ofrecer a sus huéspedes todo el confort y esplendor colonial.',
        habitaciones: 11,
        ciudad: 'Buenos Aires',
        pais: 'Argentina',
        tamanio: 'Mediano',
        precio: 3000
    },
    {
        id: 2,
        nombre: 'Sainte Jeanne Boutique & Spa',
        img: './images/sainte-jeanne.jpg',
        descripcion: 'Sainte Jeanne Hotel Boutique & Spa está ubicado en el corazón de Los Troncos, un barrio residencial y elegante de Mar del Plata. El lujo, el confort y la pasión por los detalles dan personalidad a esta cálida propuesta.',
        habitaciones: 23,
        ciudad: 'Mar del Plata',
        pais: 'Argentina',
        tamanio: 'Grande',
        precio: 1500
    },
    {
        id: 3,
        nombre: 'Entre Cielos',
        img: './images/entre-cielos.jpg',
        descripcion: 'Ubicado en una de las regiones vitivinícolas más grandes de América Latina, Entre Cielos fue pensado y construido en un campo de 8 hectáreas rodeado de viñedos malbec y una imponente vista de la Cordillera de Los Andes.',
        habitaciones: 16,
        ciudad: 'Mendoza',
        pais: 'Argentina',
        tamanio: 'Mediano',
        precio: 4000
    },
    {
        id: 4,
        nombre: 'Hotel Huacalera',
        img: './images/huacalera.jpg',
        descripcion: 'Construido en la década de 1940, está ubicada en el corazón de la Quebrada de Humahuaca, un extenso valle rodeado de imponentes cadenas montañosas, recorrido por el Río Grande y declarado Patrimonio de la Humanidad en 2003. Mezcla de modernidad y cultura',
        habitaciones: 32,
        ciudad: 'Jujuy',
        pais: 'Argentina',
        tamanio: 'Grande',
        precio: 1200
    },
    {
        id: 5,
        nombre: 'La Merced del Alto',
        img: './images/merced-del-alto.jpg',
        descripcion: 'Al pie del Nevado de Cachi, La Merced del Alto se destaca sobre el pintoresco valle rodeado de cerros, ríos y arroyos. Dominando sobre lo alto, el hotel y sus imponentes vistas invitan a explorar los Valle Calchaquíes o simplemente a disfrutar de la paz del lugar.',
        habitaciones: 14,
        ciudad: 'Salta',
        pais: 'Argentina',
        tamanio: 'Mediano',
        precio: 1900
    },
    {
        id: 6,
        nombre: 'Azur Real Hotel',
        img: './images/azur-real.jpg',
        descripcion: 'Hote lujoso replicando aguas termnales turcas. La exclusividad rodeada de historia. Azur Real Hotel Boutique está ubicado en el corazón de la zona comercial y el centro histórico de Córdoba, dentro de uno de los principales circuitos culturales y turísticos de la ciudad.',
        habitaciones: 16,
        ciudad: 'Córdoba',
        pais: 'Argentina',
        tamanio: 'Mediano',
        precio: 1700
    },
    {
        id: 7,
        nombre: 'Rincón del Socorro',
        img: './images/rincon-del-socorro.jpg',
        descripcion: 'Rincón del Socorro es una estancia ubicada en la reserva natural de los Esteros del Iberá, un santuario de vida silvestre, donde la Fundación Conservation Land Trust decidió desarrollar un ambicioso proyecto de recuperación y conservación.',
        habitaciones: 11,
        ciudad: 'Corrientes',
        pais: 'Argentina',
        tamanio: 'Mediano',
        precio: 2300
    },
    {
        id: 8,
        nombre: 'Luma Casa de Montaña',
        img: './images/luma-casa-de-montana.jpg',
        descripcion: 'Emplazada en un entorno natural a orillas del lago Nahuel Huapi y con la imponente imagen de la Cordillera de Los Andes, Luma Casa de Montaña se presenta majestuosa pero a la vez simple y hogareña: un lugar diferente, atemporal y mágico.',
        habitaciones: 8,
        ciudad: 'Villa La Angostura',
        pais: 'Argentina',
        tamanio: 'Pequeño',
        precio: 2150
    },
    {
        id: 9,
        nombre: 'Casa Turquesa',
        img: './images/casa-turquesa.jpg',
        descripcion: 'Casa Turquesa es una histórica mansión del siglo XVIII que recrea el encanto típico de Paraty, una de las herencias coloniales más bellas de Brasil, declarada Patrimonio Mundial de la Humanidad por la UNESCO Mundial de la Humanidad por la UNESCO.',
        habitaciones: 9,
        ciudad: 'Río de Janeiro',
        pais: 'Brasil',
        tamanio: 'Pequeño',
        precio: 5200
    },
    {
        id: 10,
        nombre: 'Vila Da Santa',
        img: './images/vila-da-santa.jpg',
        descripcion: 'Esta casa de pescadores fue renovada con elegancia. Se abre a un gran patio central con dos piscinas de diseño, una de ellas climatizada. Ubicado a km del caribe brasilero',
        habitaciones: 19,
        ciudad: 'Buzios',
        pais: 'Brasil',
        tamanio: 'Mediano',
        precio: 4900
    },
    {
        id: 11,
        nombre: 'UXUA Casa Hotel & Spa',
        img: './images/uxua-casa.jpg',
        descripcion: 'Hotel boutique reconocido mundialmente por su incomparable belleza tropical y el inigualable spa Almescar que ofrece innovadores tratamientos con ingredientes extraídos de la selva.',
        habitaciones: 11,
        ciudad: 'Bahía',
        pais: 'Brasil',
        tamanio: 'Mediano',
        precio: 7000
    },
    {
        id: 12,
        nombre: 'Ponta dos Ganchos',
        img: './images/uxua-casa.jpg',
        descripcion: 'Ubicado a pasos de San Pablo, Río de Janeiro, e incluso Buenos Aires, se encuentra Ponta dos Ganchos, uno de los resorts de playa más exclusivos del sur de Brasil.',
        habitaciones: 25,
        ciudad: 'Santa Catarina',
        pais: 'Brasil',
        tamanio: 'Grande',
        precio: 8100
    },
    {
        id: 13,
        nombre: 'Alto Atacama',
        img: './images/alto-atacama.jpg',
        descripcion: 'Alto Atacama Desert Lodge & Spa es un distinguido refugio ubicado a los pies del Pukará de Quitor en el imponente desierto de Atacama al norte de Chile. Imponente vista combinando con los claros y calidos del atardecer.',
        habitaciones: 42,
        ciudad: 'San Pedro de Atacama',
        pais: 'Chile',
        tamanio: 'Grande',
        precio: 3700
    },
    {
        id: 14,
        nombre: 'Tierra Patagonia',
        img: './images/tierra-patagonia.jpg',
        descripcion: 'Tierra Patagonia Hotel & Spa es un lujoso hotel boutique ubicado en la Patagonia chilena a orillas del lago Sarmiento, un parque nacional rodeado de montañas, cascadas y glaciares, declarado Reserva de la Biosfera por la UNESCO en 1978.',
        habitaciones: 40,
        ciudad: 'Torres del Paine',
        pais: 'Chile',
        tamanio: 'Grande',
        precio: 4200
    },
    {
        id: 15,
        nombre: 'Vira Vira',
        img: './images/vira-vira.jpg',
        descripcion: 'Hotel Hacienda Vira Vira Relais & Chateaux se encuentra en una ubicación privilegiada, muy cerca de Pucón, Chile. Su impresionante parque nativo de 23 hectáreas a orillas del río Liucura ofrece un oasis único de paz y tranquilidad.',
        habitaciones: 21,
        ciudad: 'Pucón',
        pais: 'Chile',
        tamanio: 'Grande',
        precio: 5100
    },
    {
        id: 16,
        nombre: 'Vik Chile',
        img: './images/vik-chile.jpg',
        descripcion: 'Vik Chile es una hacienda moderna y sofisticada en donde confluyen el arte y el diseño de vanguardia, una ubicación sin igual, fabulosos escenarios naturales, servicio personalizado y una cuidada atención por el medioambiente.',
        habitaciones: 22,
        ciudad: 'Millahue',
        pais: 'Chile',
        tamanio: 'Grande',
        precio: 5600
    },
    {
        id: 17,
        nombre: 'Casa Higueras',
        img: './images/casa-higueras.jpg',
        descripcion: 'Ubicada en el corazón del Cerro Alegre, frente a la imponente bahía de Valparaíso, se encuentra Casa Higueras, el primer hotel boutique y de diseño del puerto. Imponente vista hacia el mar, ideal para vacacionar en familia.',
        habitaciones: 20,
        ciudad: 'Valparaíso',
        pais: 'Chile',
        tamanio: 'Mediano',
        precio: 6750
    },
    {
        id: 18,
        nombre: 'Campo Tinto',
        img: './images/campo-tinto.jpg',
        descripcion: 'Campo Tinto es una chacra de 25 hectáreas ubicada en el corazón de San Roque, en medio del ondulante Carmelo, una zona de chacras, viñedos, bodegas y frutales, con mucha historia y un ritmo de vida tranquilo y natural.',
        habitaciones: 4,
        ciudad: 'Colonia',
        pais: 'Uruguay',
        tamanio: 'Pequeño',
        precio: 2000
    }
];

const keyLocalStorage = "hoteles";

if (localStorage.getItem("hoteles") == null) {
    localStorage.setItem(keyLocalStorage, JSON.stringify(hoteles));
};