import React from 'react'
import '../public/ccsReqGrl/cssReqG.css';
import {useParams} from 'react-router-dom'
import {Form, Button, Col,Row, Container} from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import FormRequerimientosGenerales from '../components/RequerimientosGenerales/formRequerimientosGenerales';
import {getJsonStorage} from '../lib/jsonStorages'

export default function RequerimientosGenerales(props) {
    const {id} = useParams();
    const {setState} = props; setState(id);
    const requerimientosGenerales = useFetch('/projects/generalrequirements');
    const proyecto = useFetch('/projects/'+ id);

    const nombreProyecto = getJsonStorage('TIRS_proyecto')
    return (
        <Container style={{ textAlign: "center"}} className=" container marco  p-5">
            <br></br><br></br><br></br>
            <h1>{nombreProyecto} - Requerimientos Generales</h1>
            <br></br><br></br>
            
            <h4 style={{ textAlign: "left"}}>Elige los requerimientos básicos que quieres tener en tu proyecto:</h4>
            <FormRequerimientosGenerales idProyecto={id} requerimientosGenerales = {requerimientosGenerales} proyecto={proyecto}/>

        </Container>
    )
};
