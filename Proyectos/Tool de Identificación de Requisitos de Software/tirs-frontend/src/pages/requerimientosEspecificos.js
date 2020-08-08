import React from 'react'
import {Container} from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import {getJsonStorage} from '../lib/jsonStorages'

import TablaRequerimientosEspecificos from '../components/RequerimientosEspecificos/tablaRequerimientosEspecificos'
console.log(TablaRequerimientosEspecificos);
export default function RequerimientosEspecificos() {
    
    return (
        <Container>
        <br></br><br></br>
        <h3 style={{textAlign: "center"}}>"Proyecto" - Requerimientos Especificos</h3>
        <br></br>
        <>
            <button type="button" className="btn btn-success" >Nuevo Requerimiento</button>
            <br /><br />
            
            <TablaRequerimientosEspecificos/>
        </>
        </Container>
    )
};
