const eventsData = [{
        image: "../media/images/evento-cultural2.jpg",
        title: "Fiesta del Tannat",
        description: "Plaza 18 de Julio de Canelones",
        date: "Sabado 4/11 - 16:00 hs",
        price: "Entrada libre",
        link: "../eventos/plantilla.html",
        tags: ["eventos-culturales"]
    },
    {
        image: "../media/images/teatro1.png",
        title: "La obra que sale mal",
        description: "Juan Luis Granato y Pablo Dive",
        date: "Viernes 3/11 - 21:00 hs",
        price: "$700",
        link: "../eventos/plantilla.html",
        tags: ["teatro"]
    },
    {
        image: "../media/images/fiesta3.jpg",
        title: "Viejo Barreiro",
        description: "Jose Enrique Rodó 1773",
        date: "Miércoles 1/11 - 22:30 hs",
        price: "$250",
        link: "../eventos/plantilla.html",
        tags: ["fiesta"]
    },
    {
        image: "../media/images/stand-up1.jpg",
        title: "German Medina es inseguro",
        description: "Centro Cultural Nacional AFE",
        date: "Domingo 5/11 - 20:00 hs",
        price: "$500",
        link: "../eventos/plantilla.html",
        tags: ["stand-up"]
    },
    {
        image: "../media/images/evento-cultural1.jpg",
        title: "Festival Cultural de la Tierra",
        description: "Parador Roosevelt",
        date: "Domingo 5/11 - 13:00 hs",
        price: "Entrada libre",
        link: "../eventos/plantilla.html",
        tags: ["eventos-culturales"]
    },
    {
        image: "../media/images/fiesta2.jpg",
        title: "Rocola [Edicion Safari]",
        description: "Convencion 1342",
        date: "Sabado 11/11 - 23:55 hs",
        price: "$350",
        link: "../eventos/plantilla.html",
        tags: ["fiesta"]
    },
    {
        image: "../media/images/fiesta1.jpg",
        title: "Soho [Reggaeton Hits]",
        description: "Rambla Gral. Jose Artigas 20100",
        date: "Multiples fechas - 23:55 hs",
        price: "$500",
        link: "../eventos/plantilla.html",
        tags: ["fiesta"]
    },
    {
        image: "../media/images/deporte1.png",
        title: "Epica Gravel Punta del Este",
        description: "Scott Punta del Este",
        date: "Sabado 18/11 - 06:00 hs",
        price: "Desde US$95",
        link: "../eventos/plantilla.html",
        tags: ["deportes"]
    },
    {
        image: "../media/images/deporte2.jpg",
        title: "Invictus Deluxe Championship",
        description: "Club Deportivo Telegrafo",
        date: "Sabado 18/11 - 19:00 hs",
        price: "Desde $385",
        link: "../eventos/plantilla.html",
        tags: ["deportes"]
    },
    {
        image: "../media/images/fiesta4.jpg",
        title: "Trash",
        description: "Parada 12 de la Brava, Punta del este",
        date: "Miercoles 1/11 - 23:55 hs",
        price: "$800",
        link: "../eventos/plantilla.html",
        tags: ["fiesta"]
    },
    {
        image: "../media/images/teatro4.jpg",
        title: "22 de agosto",
        description: "Teatro Stella D'Italia",
        date: "Sabado 18/11 - 21:30 hs",
        price: "$600",
        link: "../eventos/plantilla.html",
        tags: ["teatro"]
    },
    {
        image: "../media/images/teatro2.png",
        title: "Tocata & Fuga",
        description: "Vieja Farmacia Solís",
        date: "Viernes 10/11 - 21:00 hs",
        price: "$600",
        link: "../eventos/plantilla.html",
        tags: ["teatro"]
    },
    {
        image: "../media/images/musica1.png",
        title: "Trotsky Vengarán",
        description: "Sala del Museo del Carnaval",
        date: "Sabado 4/11 - 20:00 hs",
        price: "Desde $650",
        link: "../eventos/plantilla.html",
        tags: ["musica"]
    },
    {
        image: "../media/images/deporte3.png",
        title: "Scott Marathon MTB 2024",
        description: "Parque de Minas Hotel Vacacional",
        date: "Multiples fechas - 08:00 hs",
        price: "US$450",
        link: "../eventos/plantilla.html",
        tags: ["deportes"]
    },
    {
        image: "../media/images/stand-up2.jpg",
        title: "Romántica con Poly Diaz",
        description: "Q´Atrevido, San Jose 907 ",
        date: "Sabado 18/11 - 20:00 hs",
        price: "$650",
        link: "../eventos/plantilla.html",
        tags: ["stand-up"]
    },
    {
        image: "../media/images/teatro3.jpg",
        title: "Pim Pau",
        description: "Teatro Metro",
        date: "Domingo 12/11 - 18:00 hs",
        price: "$1100",
        link: "../eventos/plantilla.html",
        tags: ["teatro"]
    },

];

document.addEventListener("DOMContentLoaded", function () {
    const eventList = document.getElementById("event-list");
    const eventTemplate = document.getElementById("event-template");

    eventsData.forEach((eventData) => {
        const eventClone = document.importNode(eventTemplate.content, true);

        eventClone.querySelector(".event-title").textContent = eventData.title;
        eventClone.querySelector(".event-description").textContent = eventData.description;
        eventClone.querySelector(".event-date").textContent = eventData.date;
        eventClone.querySelector(".event-price").textContent = eventData.price;
        eventClone.querySelector(".event-image").src = eventData.image;
        eventClone.querySelector(".event-link").href = eventData.link;

        eventList.appendChild(eventClone);
    });





    const checkboxes = document.querySelectorAll('.filtros input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateEvents);
    });

    function updateEvents() {
        const selectedTags = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.id);

        eventList.innerHTML = '';

        eventsData.forEach((eventData) => {
            if (selectedTags.every(tag => eventData.tags.includes(tag))) {
                const eventClone = document.importNode(eventTemplate.content, true);

                eventClone.querySelector(".event-title").textContent = eventData.title;
                eventClone.querySelector(".event-description").textContent = eventData.description;
                eventClone.querySelector(".event-date").textContent = eventData.date;
                eventClone.querySelector(".event-price").textContent = eventData.price;
                eventClone.querySelector(".event-image").src = eventData.image;
                eventClone.querySelector(".event-link").href = eventData.link;

                eventList.appendChild(eventClone);
            }
        });
    }


    updateEvents();
});


document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.querySelector('.carrusel');
    const elementosCarrusel = document.querySelectorAll('.elementoCarrusel');
    const botonesCarrusel = document.querySelectorAll('.boton-carrusel');

    let indice = 0;

    function mostrarElemento() {
        elementosCarrusel.forEach(elemento => {
            elemento.style.transform = `translateX(${-indice * 100}%)`;
        });


        botonesCarrusel.forEach((boton, index) => {
            boton.classList.remove('activo');
            if (index === indice) {
                boton.classList.add('activo');
            }
        });
    }

    function cambiarSlide(nuevoIndice) {
        indice = nuevoIndice;
        mostrarElemento();
    }

    function avanzar() {
        indice++;
        if (indice >= elementosCarrusel.length) {
            indice = 0;
        }
        mostrarElemento();
    }

    function retroceder() {
        indice--;
        if (indice < 0) {
            indice = elementosCarrusel.length - 1;
        }
        mostrarElemento();
    }

    setInterval(avanzar, 5000);

    botonesCarrusel.forEach((boton, index) => {
        boton.addEventListener('click', function () {
            cambiarSlide(index);
        });
    });
});

/* const carouselsData = [{
    image: "../media/images/evento-cultural2.jpg",
    title: "Fiesta del Tannat",
    desc: "Plaza 18 de Julio de Canelones",
    link: "../eventos/plantilla.html",
    tags: ["eventos-culturales"]
},
{
    image: "../media/images/teatro1.png",
    title: "La obra que sale mal",
    desc: "Juan Luis Granato y Pablo Dive",
    link: "../eventos/plantilla.html",
    tags: ["teatro"]
},
{
    image: "../media/images/fiesta3.jpg",
    title: "Viejo Barreiro",
    desc: "Jose Enrique Rodó 1773",
    link: "../eventos/plantilla.html",
    tags: ["fiesta"]
},
{
    image: "../media/images/stand-up1.jpg",
    title: "German Medina es inseguro",
    desc: "Centro Cultural Nacional AFE",
    link: "../eventos/plantilla.html",
    tags: ["stand-up"]
},
{
    image: "../media/images/evento-cultural1.jpg",
    title: "Festival Cultural de la Tierra",
    desc: "Parador Roosevelt",
    link: "../eventos/plantilla.html",
    tags: ["eventos-culturales"]
},
];

document.addEventListener("DOMContentLoaded", function () {
    const carouselList = document.getElementById("carousel-list");
    const carouselTemplate = document.getElementById("carousel-template");

    carouselsData.forEach((carouselData) => {
        const carouselClone = document.importNode(carouselTemplate.content, true);

        carouselClone.querySelector(".element-title").textContent = carouselData.title;
        carouselClone.querySelector(".element-desc").textContent = carouselData.desc;
        carouselClone.querySelector(".element-image").src = carouselData.image;
        carouselClone.querySelector(".element-link").href = carouselData.link;

        carouselList.appendChild(carouselClone);
    });

    updateEvents();
}); */