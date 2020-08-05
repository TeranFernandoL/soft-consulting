import React from 'react'
import {useParams} from 'react-router-dom'
import {Form, Button, Col, Container} from 'react-bootstrap';

export default function RequerimientosGenerales() {
    const {id} = useParams();
    console.log(id);
    

    return (
        <Container>
            <br></br><br></br>
            <h3 style={{textAlign: "center"}}>"Proyecto" - Requerimientos Generales</h3>
            <br></br>
            <br></br>
            <h6>Lista de checkbox de requerimientos generales en 2 o en 3 filas</h6>
            <Form>
                <Form.Group as={Col} md="6">
                    {crearCheckBox()}
                </Form.Group>
                <Form.Group as={Col} md="6">
                    {crearCheckBox()}
                </Form.Group>
            </Form>
            <h6>Botón de guardar requerimientos seleccionados</h6>
        </Container>
    )
};

function crearCheckBox(){
    if(1 == 1){ //Si ya fue marcado
        return (
            <>
                <Form.Label>Requerimiento general</Form.Label> &nbsp;
                <Form.Check inline type="checkbox" name="name" defaultChecked/>
            </>
        );
    }
    return ( //Si no está marcado
        <>
            <Form.Label>Requerimiento general</Form.Label> &nbsp;
            <Form.Check inline type="checkbox"  name="name"/>
        </>
    );
}
