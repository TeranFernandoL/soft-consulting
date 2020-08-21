import React from 'react'
import {Container} from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import {getJsonStorage} from '../lib/jsonStorages'

import TablaRequerimientosEspecificos from '../components/RequerimientosEspecificos/tablaRequerimientosEspecificos'
console.log(TablaRequerimientosEspecificos);
export default function RequerimientosEspecificos() {
    
    return (
        
        <Container>
            
        {/* <nav id="menu">
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li class="barra">|</li>
            <li><a href="#">Quienes somos</a></li>
            <li class="barra">|</li>
            <li><a href="#">Servicios</a></li>
            <li class="barra">|</li>
            <li><a href="#">Garantías</a></li>
            <li class="barra">|</li>
            <li><a href="#">Clientes</a></li>
            <li class="barra">|</li>
            <li><a href="#">Ofertas</a></li>
            <li class="barra">|</li>
            <li><a href="mantenimientos/productos.html">Productos</a></li>
            <li class="barra">|</li>
            <li><a href="mantenimientos/categorias.html">Categorias</a></li>
            <li class="barra">|</li>
            <li><a href="#">Ubícanos</a></li>
        </ul>
    </nav> */}
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
