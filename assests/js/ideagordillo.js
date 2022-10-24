let insertDOMcontent = document.querySelector('#insertDOMcontent');
let listapaises = document.querySelector('#listapaises');
let paisesSeleccionados = []

let paises = [{
        _id: "1",
        pais: "Argentina",
        bandera: "http://127.0.0.1:5500/assests/img/ar.svg",
    },
    {
        _id: "2",
        pais: "Bélgica",
        bandera: "http://127.0.0.1:5500/assests/img/be.svg",
    },
    {
        _id: "3",
        pais: "Qatar",
        bandera: "http://127.0.0.1:5500/assests/img/qa.svg",
    },
    {
        _id: "4",
        pais: "Ecuador",
        bandera: "http://127.0.0.1:5500/assests/img/ec.svg",
    },
    {
        _id: "5",
        pais: "Senegal",
        bandera: "http://127.0.0.1:5500/assests/img/sn.svg",
    },
    {
        _id: "6",
        pais: "Holanda",
        bandera: "http://127.0.0.1:5500/assests/img/nl.svg",
    },
    {
        _id: "7",
        pais: "México",
        bandera: "http://127.0.0.1:5500/assests/img/mx.svg",
    },
    {
        _id: "8",
        pais: "Inglaterra",
        bandera: "http://127.0.0.1:5500/assests/img/gb-eng.svg",
    },
    {
        _id: "9",
        pais: "Irán",
        bandera: "http://127.0.0.1:5500/assests/img/ir.svg",
    },
    {
        _id: "10",
        pais: "Gales",
        bandera: "http://127.0.0.1:5500/assests/img/gb-wls.svg",
    },
    {
        _id: "11",
        pais: "Estados Unidos",
        bandera: "http://127.0.0.1:5500/assests/img/us.svg",
    },
    {
        _id: "12",
        pais: "Dinamarca",
        bandera: "http://127.0.0.1:5500/assests/img/dk.svg",
    },
    {
        _id: "13",
        pais: "Túnez",
        bandera: "http://127.0.0.1:5500/assests/img/tn.svg",
    },
    {
        _id: "14",
        pais: "Australia",
        bandera: "http://127.0.0.1:5500/assests/img/au.svg",
    },
    {
        _id: "15",
        pais: "Arabia Saudita",
        bandera: "http://127.0.0.1:5500/assests/img/sa.svg",
    },
    {
        _id: "16",
        pais: "Polonia",
        bandera: "http://127.0.0.1:5500/assests/img/pl.svg",
    },
    {
        _id: "17",
        pais: "Francia",
        bandera: "http://127.0.0.1:5500/assests/img/fr.svg",
    },
    {
        _id: "18",
        pais: "Ghana",
        bandera: "http://127.0.0.1:5500/assests/img/gh.svg",
    },
    {
        _id: "19",
        pais: "Alemania",
        bandera: "http://127.0.0.1:5500/assests/img/de.svg",
    },
    {
        _id: "20",
        pais: "Japón",
        bandera: "http://127.0.0.1:5500/assests/img/jp.svg",
    },
    {
        _id: "21",
        pais: "España",
        bandera: "http://127.0.0.1:5500/assests/img/es.svg",
    },
    {
        _id: "22",
        pais: "Croacia",
        bandera: "http://127.0.0.1:5500/assests/img/hr.svg",
    },
    {
        _id: "23",
        pais: "Costa Rica",
        bandera: "http://127.0.0.1:5500/assests/img/cr.svg",
    },
    {
        _id: "24",
        pais: "Marruecos",
        bandera: "http://127.0.0.1:5500/assests/img/ma.svg",
    },
    {
        _id: "25",
        pais: "Canadá",
        bandera: "http://127.0.0.1:5500/assests/img/ca.svg",
    },
    {
        _id: "26",
        pais: "Camerún",
        bandera: "http://127.0.0.1:5500/assests/img/cm.svg",
    },
    {
        _id: "27",
        pais: "Suiza",
        bandera: "http://127.0.0.1:5500/assests/img/ch.svg",
    },
    {
        _id: "28",
        pais: "Brasil",
        bandera: "http://127.0.0.1:5500/assests/img/br.svg",
    },

    {
        _id: "29",
        pais: "Serbia",
        bandera: "http://127.0.0.1:5500/assests/img/rs.svg",
    },
    {
        _id: "30",
        pais: "Uruguay",
        bandera: "http://127.0.0.1:5500/assests/img/uy.svg",
    },
    {
        _id: "31",
        pais: "Korea del Sur",
        bandera: "http://127.0.0.1:5500/assests/img/kr.svg",
    },
    {
        _id: "32",
        pais: "Portugal",
        bandera: "http://127.0.0.1:5500/assests/img/pt.svg",
    },
]

function printdata(object) {
    object.forEach((element) => {
        insertDOMcontent.innerHTML += `<div class="col-md-3">
    <div class="card mb-4">
    <img class="imgpais" src="${element.bandera}" class="card-img-top" alt="${element.pais}">
    <div class="card-body">
      <h5 class="card-title">${element.pais}</h5>
      <p class="card-text">Seleccione la cantidad de figuritas que tiene de este país.</p>
      <a href="#" class="btn btn-secondary" id="${element._id}">Agregar al album</a>
    </div>
  </div>
  </div>`
    });
}

function agregarPaisAlCarro (){
listapaises.innerHTML = ``
paisesSeleccionados.forEach ((element,index)=>{
listapaises.innerHTML=`<tr>
<td><img class="imgminiatura" src="${element.bandera}" alt="${element.pais}"></td>
<td class="text-center">${element.pais}</td>
<td class="text-center" >Cantidad de Figuritas</td>
<td class="text-center"><a href="#" id="${element._id}" class="borrar-pais">X</a></td>
</tr>`
})
}

function buscarPais(idPais, buscarPaises) {
    let paisSeleccionado = buscarPaises.find(element => idPais == element._id)

    let pais = []
    pais.push(paisSeleccionado)
    paisesSeleccionados = [...paisesSeleccionados, ...pais]
    agregarPaisAlCarro ();

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