import React, {useState} from "react";
import useFetch from '../../hooks/useFetch'
import {useLayoutEffect} from 'react';
import {setFecha} from '../../lib/metodos'
import {Container} from 'react-bootstrap';
import {ruta} from '../../lib/ruta'
import {getJsonStorage} from '../../lib/jsonStorages'

export default function TablaProyectos(props) {
    const {proyectos} = props

    
    if(proyectos.loading || !proyectos.result){
        return "loading..."
    }
    
        
    const proyects = proyectos.result;    
    
    return (
        <table className ="table table-hover">
            <thead className = "table-secondary">
                <tr>
                    <th>Id proyecto</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Fecha Creación</th>
                    <th>Estado</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {proyects.map((proyecto, index) => {
                    return <Proyecto key={proyecto.id} proyecto={proyecto}/>
                })}
            </tbody>

        </table>
    )


};

function Proyecto(props){
    const {proyecto: {
        id,
        name, 
        description,
        creation_date, 
        confirmation
    }} = props;
    console.log(confirmation);
    
    const fecha_creacion = setFecha(creation_date);

    let estado='';
    if(confirmation == true){
        estado = 'Validado';
    }

    else{
        estado = 'No validado';
    }
    
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{fecha_creacion}</td>
            <td>{estado}</td>
            <td>
            <button type="button" className="btn btn-primary">Compartir</button>{"  "}
                <button type="button" className="btn btn-danger">Trabajar</button>{"  "}
                <button type="button" className="btn btn-danger">Eliminar</button>

            </td>
        </tr>
    );
}


        // <tr>
        //     <td>103</td>
        //     <td>App</td>
        //     <td>Germany</td>
        //     <td>12/07/2020</td>
        //     <td>Confirmado</td>
        //     <td>
        //     <button type="button" className="btn btn-primary">Editar</button>{"  "}
        //         {/* <button type="button" className="btn btn-danger">Elimnar</button> */}

        //     </td>
        // </tr>