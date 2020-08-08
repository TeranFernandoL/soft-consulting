import React from 'react'
import '../public/ccsReqGrl/cssReqG.css';
import {useParams} from 'react-router-dom'
import {Form, Button, Col,Row, Container} from 'react-bootstrap';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';


export default function RequerimientosGenerales() {
    const {id} = useParams();
    console.log(id);
    
   
    return (

        <>
        <br></br>
        <Container style={{ textAlign: "center"}} className=" container marco  p-5">
                       
            <br></br><br></br>
            <h1>"Proyecto" - Requerimientos Generales</h1>
            <br></br>
            <br></br>
            
            <h4 style={{ textAlign: "left"}}>Elige los requerimientos básicos que quieres tener en tu proyecto:</h4>
            <br></br><br></br>
            
            <Form as={Row}>
                
                <Form.Group as={Col} sm="4">
                    {crearCheckBox()}
                    {crearCheckBox()}
                    {crearCheckBox()}
                    {crearCheckBox()}
                    {crearCheckBox()}
                    {crearCheckBox()}
                </Form.Group>

                <Form.Group as={Col} sm="4">
                    {crearCheckBox()}
                    {crearCheckBox()}
                    {crearCheckBox()}
                    {crearCheckBox()}
                    {crearCheckBox()}
                    {crearCheckBox()}
                </Form.Group>

                <Form.Group as={Col} sm="4">
                    {crearCheckBox()}
                    {crearCheckBox()}
                    {crearCheckBox()}
                    {crearCheckBox()}
                    {crearCheckBox()}
                    {crearCheckBox()}
                </Form.Group>

            </Form>
            
            <br></br><br></br><br></br>
            <Row style={{ textAlign: "left"}}>
                <div className="col-sm-5 mb-2">
                    <a href=""  className="btn btn-danger  text-uppercase font-weight-bold " type="">ATRAS</a>
                </div>
                <div  className="col-sm-7">
                    <Button href=""  className="btn btn-primary  text-uppercase font-weight-bold " type="">GUARDAR</Button>
                </div>
            </Row>
        </Container>
        </>
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



 /** 
export default function RequerimientosGenerales() {
    const {id} = useParams();
    console.log(id);
    
   
    return (
        <Container>
            <br></br><br></br>
            <h3 style={{textAlign: "center"}}>"Proyecto" - Requerimientos Generales</h3>
            <br></br>
            <br></br>
            <h6>Elige los requerimientos básicos que tendrá tu proyecto:</h6>
            <br></br><br></br>
            <Form as={Row}>
                
                <Form.Group as={Col} sm="4">
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                </Form.Group>

                <Form.Group as={Col} sm="4">
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                </Form.Group>

                <Form.Group as={Col} sm="4">
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                    <Form.Label>Requerimiento general</Form.Label> &nbsp;
                    {crearCheckBox()}
                </Form.Group>



            </Form>
            <br></br>
            <div align="center">
                <a href=""  className="btn btn-primary  text-uppercase font-weight-bold mb-2" type="">GUARDAR</a>
            </div>
                
        </Container>
    )
};

function crearCheckBox(){
    if(1 == 1){ //Si ya fue marcado
        return (
            <>
                <Form.Check style={{float: 'right'}} inline type="checkbox" name="name" defaultChecked/>
            </>
        );
    }
    return ( //Si no está marcado
        <>
            <Form.Check style={{float: 'right'}} inline type="checkbox"  name="name"/>
        </>
    );

}
*/
