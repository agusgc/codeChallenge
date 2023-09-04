const boton = document.getElementById('enviar');
const formulario = document.getElementById('formulario');
const respuesta = document.getElementById('respuesta');

const getData = () => {
  const datos = new FormData(formulario); //Datos del formulario
  const datosProcesados = Object.fromEntries(datos.entries()); //Combierte a objeto
  formulario.reset();
  return datosProcesados;
}

const postData = async () => {
 
  //Crea un objeto con la informacion del formulario
   const newUser = getData();

   try{
   //Fetch
     const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    	method: 'POST',
    	headers: {'Content-Type': 'application/json'},
    	body: JSON.stringify(newUser)
    });
    
    if(response.ok){
    //Muestra los datos
        const jsonResponse = await response.json();
		console.log(jsonResponse)
		respuesta.innerHTML = 
			`<h5>Nombre: ${jsonResponse.nombre}</h5>
			<h5>Apellido: ${jsonResponse.apellido}</h5>
			<h5>Nacimiento: ${jsonResponse.nacimiento}</h5>`;
    }

   //Error
   }catch(error){
     console.log(error);
   }
}

boton.addEventListener('click', (event) => {
  event.preventDefault();
  postData();
  
})