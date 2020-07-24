import React from 'react'
import useFetch from '../hooks/useFetch'
import {useLayoutEffect} from 'react';
import {metodoGeneral} from '../lib/metodos'

export default function ListaProyectos() {

    // // const api = useFetch('https://c5042682eafe.ngrok.io/api/v1/users/');
    // // console.log(api);
    // let api;
    // useEffect(() => {
        const result = useFetch('https://c5042682eafe.ngrok.io/api/v1/users/');
        console.log(result);
        
    // }, [])
    
    
    
    
    return (
        <h1>hola</h1>
    );
};
