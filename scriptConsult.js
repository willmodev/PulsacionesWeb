
var personas = []; 
    if (localStorage.getItem('BDLocal') != null) {
        personas = JSON.parse(localStorage.getItem('BDLocal'));
    }

     personas.forEach(item => {
        document.getElementById("tablaPersonas").innerHTML +=
        '<tr>' +
            '<td>' + item.id + '</td>' +
            '<td>' + item.sexo+ '</td>' +
            '<td>' + item.nombre+ '</td>' +
            '<td>' + item.edad+ '</td>' + 
            '<td>' + item.pulsacion+ '</td>' +
        '</tr>';
    });

console.log(personas); 