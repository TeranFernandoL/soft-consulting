import React, {useState, useEffect} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import {metodoGeneral} from '../../lib/metodos'

export default function FormDocumentoRequisitos(props) {
    const {proyecto} = props
    const [validated, setValidated] = useState(false);
    const [formValue, setFormValue] = useState({
        objetivo: '',
        alcance: '',
        fuera_alcance: '',
        vision_general_documento: '',
        perspectiva_producto: '',
        objetivos_sistema: '',
        restricciones: '',
        suposiciones_dependencias: ''
    })
    
    useEffect(() => {
        if(!(proyecto.loading || !proyecto.result)){
            setFormValue({
                objetivo: proyecto.result.objetivo,
                alcance: proyecto.result.alcance,
                fuera_alcance: proyecto.result.fuera_alcance,
                vision_general_documento: proyecto.result.vision_general_documento,
                perspectiva_producto: proyecto.result.perspectiva_producto,
                objetivos_sistema: proyecto.result.objetivos_sistema,
                restricciones: proyecto.result.restricciones,
                suposiciones_dependencias: proyecto.result.suposiciones_dependencias
            })
        }
    }, [proyecto])

    if(proyecto.loading || !proyecto.result){
        return "loading..."
    }

    const onChange = async e => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else{
            console.log(formValue);
            const res = await metodoGeneral('/projects/'+ project.id,'PATCH',formValue)  //mandar objeto al back para el registro

            if(res == 0){
                console.log('no se pudo registrar');
                
            }
            else{
                window.location.reload();
            }
            
        }     
        setValidated(true)
    }; 

    const project = proyecto.result;    

    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} onChange={onChange} className="m-4">
        <br></br>
        <Form.Row>
            <Form.Label>Objetivos:</Form.Label> 
            <Form.Control as="textarea" name="objetivo" rows="5" defaultValue={project.objetivo}/>
        </Form.Row>
        <br />
        <Form.Row>
            <Form.Label>Alcance:</Form.Label> 
            <Form.Control as="textarea" name="alcance" rows="5" defaultValue={project.alcance}/>
        </Form.Row>
        <br />
        <Form.Row>
            <Form.Label>Fuera de alcance:</Form.Label> 
            <Form.Control as="textarea" name="fuera_alcance" rows="5" defaultValue={project.fuera_alcance}/>
        </Form.Row>
        <br />
        <Form.Row>
            <Form.Label>Vision general del documento:</Form.Label> 
            <Form.Control as="textarea" name="vision_general_documento" rows="5" defaultValue={project.vision_general_documento}/>
        </Form.Row>
        <br />


        <Form.Row>
            <Form.Label>Perspectiva de producto:</Form.Label> 
            <Form.Control as="textarea" name="perspectiva_producto" rows="5" defaultValue={project.perspectiva_producto}/>
        </Form.Row>
        <br />
        <Form.Row>
            <Form.Label>Objetivos del sistema:</Form.Label> 
            <Form.Control as="textarea" name="objetivos_sistema" rows="5" defaultValue={project.objetivos_sistema}/>
        </Form.Row>
        <br />
        <Form.Row>
            <Form.Label>Restricciones:</Form.Label> 
            <Form.Control as="textarea" name="restricciones" rows="5" defaultValue={project.restricciones}/>
        </Form.Row>
        <br />
        <Form.Row>
            <Form.Label>Suposiciones y dependencias:</Form.Label> 
            <Form.Control as="textarea" name="suposiciones_dependencias" rows="5" defaultValue={project.suposiciones_dependencias}/>
        </Form.Row>
        <br />

        <div style={{textAlign: "center"}}>
         <Button style={{textAlign: "center"}} type="submit" variant="success">Guardar datos de la documentación</Button>
        </div>

      </Form>
    );
}