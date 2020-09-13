class Persona
{
	constructor(id,nombre,sexo,edad)
	{
		this.id = id;
		this.nombre = nombre;
		this.sexo = sexo;
		this.edad = edad;
		this.pulsacion = 0;
	}
}

var btnCalculate = document.getElementById("calculate");
var resultado =  document.getElementById("resultado");

var id =  document.getElementById("id_person");
var firstName = document.getElementById("first_name");
var sex = document.getElementById("sex")
var age =  document.getElementById("age");


btnCalculate.addEventListener("click",getPersona);

function getPersona()
{
	const persona =  new Persona(id.value, firstName.value, sex.value, age.value);
	
	if (persona.sexo == 'F' ) {
		persona.pulsacion = (220 - persona.edad) / 10;
	}else
	{
		persona.pulsacion = (210 - persona.edad) / 10;
	}


	resultado.innerHTML = '<strong>' + 'Su pulsacion es: '+ persona.pulsacion+'</strong>';
	Guardar(persona);
	
}

function Guardar(p)
{
	var persona = p;
	var personas = [];

	if(localStorage.getItem('BDLocal') != null)
	{
		personas = JSON.parse(localStorage.getItem('BDLocal'));
	}
	personas.push(persona);
	localStorage.setItem('BDLocal', JSON.stringify(personas));

	
}


