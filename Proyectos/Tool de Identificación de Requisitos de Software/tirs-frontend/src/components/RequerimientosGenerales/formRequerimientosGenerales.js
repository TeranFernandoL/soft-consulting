import React, {useState} from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';
import {getJsonStorage} from '../../lib/jsonStorages'
import {metodoGeneral} from '../../lib/metodos'

export default function FormRequerimientosGenerales(props) {
    const {idProyecto,  proyecto} = props    

    if(proyecto.loading || !proyecto.result){
        return "loading..."
    }
    
    const Requerimientos = proyecto.result.check_general;  
    
    const handleSubmit = async event => {
        event.preventDefault();
        const requerimientosCheck = []
        for(let x in Requerimientos){
            const checked = document.getElementById(`actividad-${Requerimientos[x].id}`).checked;
            if(checked){
                requerimientosCheck.push(Requerimientos[x].id);
            }
        }
        const modificarRequerimientosGenerales = {
            general_requeriments: requerimientosCheck,
        }

        const res = await metodoGeneral('/projects/'+ idProyecto,'PATCH',modificarRequerimientosGenerales)  //mandar objeto al back para el registro
        window.location.reload();
        
    };
    
    return (
        <Form onSubmit={handleSubmit} className="m-4" >
            <Row>

                <Form.Group as={Col} sm="6">
                    {crearCheckBox(Requerimientos[0].name,`actividad-${Requerimientos[0].id}`,Requerimientos[0].confirmation)}
                    {crearCheckBox(Requerimientos[1].name,`actividad-${Requerimientos[1].id}`,Requerimientos[1].confirmation)}
                    {crearCheckBox(Requerimientos[2].name,`actividad-${Requerimientos[2].id}`,Requerimientos[2].confirmation)}
                    {crearCheckBox(Requerimientos[3].name,`actividad-${Requerimientos[3].id}`,Requerimientos[3].confirmation)}
                    {crearCheckBox(Requerimientos[4].name,`actividad-${Requerimientos[4].id}`,Requerimientos[4].confirmation)}
                    {crearCheckBox(Requerimientos[5].name,`actividad-${Requerimientos[5].id}`,Requerimientos[5].confirmation)}
                    {crearCheckBox(Requerimientos[6].name,`actividad-${Requerimientos[6].id}`,Requerimientos[6].confirmation)}
                    {crearCheckBox(Requerimientos[7].name,`actividad-${Requerimientos[7].id}`,Requerimientos[7].confirmation)}
                    {crearCheckBox(Requerimientos[8].name,`actividad-${Requerimientos[8].id}`,Requerimientos[8].confirmation)}
                </Form.Group>

                <Form.Group as={Col} sm="6">
                    {crearCheckBox(Requerimientos[9].name,`actividad-${Requerimientos[9].id}`,Requerimientos[9].confirmation)}
                    {crearCheckBox(Requerimientos[10].name,`actividad-${Requerimientos[10].id}`,Requerimientos[10].confirmation)}
                    {crearCheckBox(Requerimientos[11].name,`actividad-${Requerimientos[11].id}`,Requerimientos[11].confirmation)}
                    {crearCheckBox(Requerimientos[12].name,`actividad-${Requerimientos[12].id}`,Requerimientos[12].confirmation)}
                    {crearCheckBox(Requerimientos[13].name,`actividad-${Requerimientos[13].id}`,Requerimientos[13].confirmation)}
                    {crearCheckBox(Requerimientos[14].name,`actividad-${Requerimientos[14].id}`,Requerimientos[14].confirmation)}
                    {crearCheckBox(Requerimientos[15].name,`actividad-${Requerimientos[15].id}`,Requerimientos[15].confirmation)}
                    {crearCheckBox(Requerimientos[16].name,`actividad-${Requerimientos[16].id}`,Requerimientos[16].confirmation)}
                    {crearCheckBox(Requerimientos[17].name,`actividad-${Requerimientos[17].id}`,Requerimientos[17].confirmation)}
                </Form.Group>
            </Row>


            <br></br><br></br>
            <div style={{textAlign: "center"}}>
                <Button style={{textAlign: "center"}} type="submit" variant="success">GUARDAR</Button>
            </div>
        </Form>
    );
}

function crearCheckBox(nombre,id,checked){
    if(checked == 1){ //Si ya fue marcado
        return (
            <Form.Row>
                <Form.Check inline type="checkbox" id={id} defaultChecked/>
                <Form.Label>{nombre}</Form.Label> &nbsp;
            </Form.Row>
        );
    }
    return ( //Si no está marcado
        <Form.Row>
            <Form.Check inline type="checkbox" id={id}/>
            <Form.Label>{nombre}</Form.Label> &nbsp;
        </Form.Row>
    );

}