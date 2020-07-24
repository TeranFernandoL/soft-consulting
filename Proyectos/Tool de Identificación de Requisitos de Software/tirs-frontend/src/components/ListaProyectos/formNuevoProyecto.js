import React, {useState} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import {getJsonStorage} from '../../lib/jsonStorages'
import {metodoGeneral} from '../../lib/metodos'



export default function FormNuevoProyecto() {
    const usuario = getJsonStorage('TIRS_usuario')
    const [validated, setValidated] = useState(false);
    const [formValue, setFormValue] = useState({
        nombre: "",
        descripcion: "",
        usuario: usuario.id,
        valitacion: true
    });
    
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
        const nuevoProyecto = {
            name: formValue.nombre,
            description: formValue.descripcion,
            users: [formValue.usuario],
            confirmation: formValue.valitacion,
        }


        const res = await metodoGeneral('/projects/','POST',nuevoProyecto)  //mandar objeto al back para el registro
        
        console.log(res);


        if(res == 0){
            console.log('no se pudo registrar');
            
        }
        else{
            window.location.reload();
        }
        
      }     
      setValidated(true)
      
    };
    

    return (
      <Form noValidate 
      validated={validated} onSubmit={handleSubmit} onChange={onChange} 
      className="m-4">
        <Form.Group className="text-center" >
            <h1>Nuevo proyecto</h1>
        </Form.Group>
        <br></br>
        <br></br>

        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Nombre del proyecto:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control type="text" name="nombre" required />
          </Form.Group>
        </Form.Row>

        <br></br>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Tipo/Rubro</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control as="select">
                <option value="0">Ventas online</option>
                <option value="1">Vlog</option>
                <option value="3">Pagina informativa</option>
                <option value="4">Pagina Coorporativa</option>
                </Form.Control>
          </Form.Group>
          
        </Form.Row>

        <br></br>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Descripcion:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control as="textarea" name="descripcion" rows="4" required/>
          </Form.Group>
        </Form.Row>

        <br></br>

        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Row>
                <Form.Group as={Col} md="1"><Form.Check  type="checkbox"/></Form.Group>
                <Form.Group as={Col} md="11"><Form.Label>Item </Form.Label> </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="1"><Form.Check  type="checkbox"/></Form.Group>
                <Form.Group as={Col} md="11"><Form.Label>Item </Form.Label> </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="1"><Form.Check  type="checkbox"/></Form.Group>
                <Form.Group as={Col} md="11"><Form.Label>Item </Form.Label> </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="1"><Form.Check  type="checkbox"/></Form.Group>
                <Form.Group as={Col} md="11"><Form.Label>Item </Form.Label> </Form.Group>
            </Form.Row>

          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Row>
                <Form.Group as={Col} md="1"><Form.Check  type="checkbox"/></Form.Group>
                <Form.Group as={Col} md="11"><Form.Label>Item </Form.Label> </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="1"><Form.Check  type="checkbox"/></Form.Group>
                <Form.Group as={Col} md="11"><Form.Label>Item </Form.Label> </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="1"><Form.Check  type="checkbox"/></Form.Group>
                <Form.Group as={Col} md="11"><Form.Label>Item </Form.Label> </Form.Group>
            </Form.Row>

          </Form.Group>
        </Form.Row>

        <br></br>
        <div style={{textAlign: "center"}}>
         <Button style={{textAlign: "center"}} type="submit" variant="success">Crear nuevo proyecto</Button>
        </div>
      </Form>
    );

}