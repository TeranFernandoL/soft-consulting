import React from 'react'
import useFetch from '../hooks/useFetch'
import {useLayoutEffect} from 'react';
import {metodoGeneral} from '../lib/metodos'

import {Row, Col, Form, Container, Button} from 'react-bootstrap';

export default function ListaProyectos() {
    // // const api = useFetch('https://c5042682eafe.ngrok.io/api/v1/users/');
    // // console.log(api);
    // let api;
    // useEffect(() => {
        const result = useFetch('https://c5042682eafe.ngrok.io/api/v1/users/');
        console.log(result);
        
    // }, [])
  
    return (
    <>
     <br></br><br></br>
        <h3 style={{textAlign: "center"}}>Lista de Proyectos</h3>
        <Container>
            <br />
            <button type="button" class="btn btn-success">Nuevo Proyecto</button>
            <br /><br />
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
                <tr>
                    <td>101</td>
                    <td>Sistema de ventas</td>
                    <td>Página web</td>
                    <td>12/07/2020</td>
                    <td>Confirmado</td>
                    <td>
                        <button type="button" class="btn btn-primary">Editar</button>{"  "}
                        <button type="button" class="btn btn-danger">Elimnar</button>

                    </td>
                </tr>
                <tr>
                    <td>102</td>
                    <td>Página web</td>
                    <td>Germany</td>
                    <td>12/07/2020</td>
                    <td>Confirmado</td>
                    <td>
                    <button type="button" class="btn btn-primary">Editar</button>{"  "}
                        <button type="button" class="btn btn-danger">Elimnar</button>

                    </td>
                </tr>
                <tr>
                    <td>103</td>
                    <td>App</td>
                    <td>Germany</td>
                    <td>12/07/2020</td>
                    <td>Confirmado</td>
                    <td>
                    <button type="button" class="btn btn-primary">Editar</button>{"  "}
                        <button type="button" class="btn btn-danger">Elimnar</button>

                    </td>
                </tr>

            </tbody>

        </table>
        </Container>

       
    </>);

};
