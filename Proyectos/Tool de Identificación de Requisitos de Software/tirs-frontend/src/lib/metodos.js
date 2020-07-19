import fetch from 'isomorphic-unfetch';
// import {ruta} from '../public/ruta';


export const metodoGeneral = async (direccion, metodo, body) => {
    let ruta = ''; //se utiliza si hay una constante el todas las rutas 
    let url = ruta + direccion;
    let token = await document.cookie.substring(6);
    
    let metho = 'GET'; //EL METODO POR DEFECTO DE GET
    if(metodo != undefined)
        metho = metodo
    
    const options = {method: metho, headers: {'Content-Type': 'application/json','authorization': ('Token ' + token)}}

    if(body != undefined)
        options.body = JSON.stringify(body);

    if(metho == 'GET'){
        const res = await fetch(url, options)
        const set = await res.json();
        return set;
    }
    else{
        let respuesta = '';
        const res = await fetch(url, options)
        .then(res => res.json())
        .catch(error => {console.error('Error:', error); respuesta = error})
        .then(response => {console.log('Success:', response); respuesta = response});
        return respuesta;
    }

}

