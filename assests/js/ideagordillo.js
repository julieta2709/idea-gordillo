let insertDOMcontent = document.querySelector('#insertDOMcontent');
let listapaises = document.querySelector('#listapaises');
let paisesSeleccionados = []

// Objeto JSON

let paises = [{
        _id: "1",
        pais: "Argentina",
        bandera: "http://127.0.0.1:5500/assests/img/ar.svg",
        cantidad: 1,
    },
    {
        _id: "2",
        pais: "Bélgica",
        bandera: "http://127.0.0.1:5500/assests/img/be.svg",
        cantidad: 1,
    },
    {
        _id: "3",
        pais: "Qatar",
        bandera: "http://127.0.0.1:5500/assests/img/qa.svg",
        cantidad: 1,
    },
    {
        _id: "4",
        pais: "Ecuador",
        bandera: "http://127.0.0.1:5500/assests/img/ec.svg",
        cantidad: 1,
    },
    {
        _id: "5",
        pais: "Senegal",
        bandera: "http://127.0.0.1:5500/assests/img/sn.svg",
        cantidad: 1,
    },
    {
        _id: "6",
        pais: "Holanda",
        bandera: "http://127.0.0.1:5500/assests/img/nl.svg",
        cantidad: 1,
    },
    {
        _id: "7",
        pais: "México",
        bandera: "http://127.0.0.1:5500/assests/img/mx.svg",
        cantidad: 1,
    },
    {
        _id: "8",
        pais: "Inglaterra",
        bandera: "http://127.0.0.1:5500/assests/img/gb-eng.svg",
        cantidad: 1,
    },
    {
        _id: "9",
        pais: "Irán",
        bandera: "http://127.0.0.1:5500/assests/img/ir.svg",
        cantidad: 1,
    },
    {
        _id: "10",
        pais: "Gales",
        bandera: "http://127.0.0.1:5500/assests/img/gb-wls.svg",
        cantidad: 1,
    },
    {
        _id: "11",
        pais: "Estados Unidos",
        bandera: "http://127.0.0.1:5500/assests/img/us.svg",
        cantidad: 1,
    },
    {
        _id: "12",
        pais: "Dinamarca",
        bandera: "http://127.0.0.1:5500/assests/img/dk.svg",
        cantidad: 1,
    },
    {
        _id: "13",
        pais: "Túnez",
        bandera: "http://127.0.0.1:5500/assests/img/tn.svg",
        cantidad: 1,
    },
    {
        _id: "14",
        pais: "Australia",
        bandera: "http://127.0.0.1:5500/assests/img/au.svg",
        cantidad: 1,
    },
    {
        _id: "15",
        pais: "Arabia Saudita",
        bandera: "http://127.0.0.1:5500/assests/img/sa.svg",
        cantidad: 1,
    },
    {
        _id: "16",
        pais: "Polonia",
        bandera: "http://127.0.0.1:5500/assests/img/pl.svg",
        cantidad: 1,
    },
    {
        _id: "17",
        pais: "Francia",
        bandera: "http://127.0.0.1:5500/assests/img/fr.svg",
        cantidad: 1,
    },
    {
        _id: "18",
        pais: "Ghana",
        bandera: "http://127.0.0.1:5500/assests/img/gh.svg",
        cantidad: 1,
    },
    {
        _id: "19",
        pais: "Alemania",
        bandera: "http://127.0.0.1:5500/assests/img/de.svg",
        cantidad: 1,
    },
    {
        _id: "20",
        pais: "Japón",
        bandera: "http://127.0.0.1:5500/assests/img/jp.svg",
        cantidad: 1,
    },
    {
        _id: "21",
        pais: "España",
        bandera: "http://127.0.0.1:5500/assests/img/es.svg",
        cantidad: 1,
    },
    {
        _id: "22",
        pais: "Croacia",
        bandera: "http://127.0.0.1:5500/assests/img/hr.svg",
        cantidad: 1,
    },
    {
        _id: "23",
        pais: "Costa Rica",
        bandera: "http://127.0.0.1:5500/assests/img/cr.svg",
        cantidad: 1,
    },
    {
        _id: "24",
        pais: "Marruecos",
        bandera: "http://127.0.0.1:5500/assests/img/ma.svg",
        cantidad: 1,
    },
    {
        _id: "25",
        pais: "Canadá",
        bandera: "http://127.0.0.1:5500/assests/img/ca.svg",
        cantidad: 1,
    },
    {
        _id: "26",
        pais: "Camerún",
        bandera: "http://127.0.0.1:5500/assests/img/cm.svg",
        cantidad: 1,
    },
    {
        _id: "27",
        pais: "Suiza",
        bandera: "http://127.0.0.1:5500/assests/img/ch.svg",
        cantidad: 1,
    },
    {
        _id: "28",
        pais: "Brasil",
        bandera: "http://127.0.0.1:5500/assests/img/br.svg",
        cantidad: 1,
    },

    {
        _id: "29",
        pais: "Serbia",
        bandera: "http://127.0.0.1:5500/assests/img/rs.svg",
        cantidad: 1,
    },
    {
        _id: "30",
        pais: "Uruguay",
        bandera: "http://127.0.0.1:5500/assests/img/uy.svg",
        cantidad: 1,
    },
    {
        _id: "31",
        pais: "Korea del Sur",
        bandera: "http://127.0.0.1:5500/assests/img/kr.svg",
        cantidad: 1,
    },
    {
        _id: "32",
        pais: "Portugal",
        bandera: "http://127.0.0.1:5500/assests/img/pt.svg",
        cantidad: 1,
    },
]

document.addEventListener('DOMContentLoaded', () => {
    paisesSeleccionados = JSON.parse(localStorage.getItem('paises')) || []
    agregarPaisAlCarro()
})

function sincronizarConLocalStorage() {
    localStorage.setItem("paises", JSON.stringify(paisesSeleccionados));
}

function printdata(object) {
    object.forEach((element) => {
        insertDOMcontent.innerHTML += `<div class="col-md-3">
    <div class="card mb-4">
    <img class="imgpais" src="${element.bandera}" class="card-img-top" alt="${element.pais}">
    <div class="card-body">
      <h5 class="card-title">${element.pais}</h5>
      <p class="card-text">Seleccione la cantidad de figuritas que tiene de este país.</p>
      <a href="#" class="btn btn-secondary agregar-album" id="${element._id}">Agregar al album</a>
    </div>
  </div>
  </div>`
    });
}

function agregarPaisAlCarro() {
    listapaises.innerHTML = ``;
    paisesSeleccionados.forEach((element, index) => {
        listapaises.innerHTML += `<tr>
<td><img class="imgminiatura" src="${element.bandera}" alt="${element.pais}"></td>
<td class="text-center">${element.pais}</td>
<td class="text-center" >${element.cantidad}</td>
<td class="text-center"><a href="#" id="${element._id}" class="borrar-pais" data-id="1">X</a></td>
</tr>`
    });

    let buttonDelete = document.querySelectorAll('#listapaises tr td a');
    buttonDelete.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            let id = e.target.id;
            paisesSeleccionados = paisesSeleccionados.filter(pais => pais._id !== id);
            agregarPaisAlCarro()
        })
    })

    sincronizarConLocalStorage();

}

function buscarPais(idPais, buscarPaises) {
    let paisSeleccionado = buscarPaises.find(element => idPais == element._id)

    let pais = []
    pais.push(paisSeleccionado)
    paisesSeleccionados = [...paisesSeleccionados, ...pais]
    agregarPaisAlCarro();

}

printdata(paises)

let buttonCard = document.querySelectorAll('#insertDOMcontent .card a');

buttonCard.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        let id = event.target.id;
        buscarPais(id, paises)
    })
})