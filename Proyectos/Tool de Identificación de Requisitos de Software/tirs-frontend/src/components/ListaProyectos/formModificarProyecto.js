import React, {useState} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import {getJsonStorage} from '../../lib/jsonStorages'
import {metodoGeneral} from '../../lib/metodos'

export default function FormModificarProyecto(props) {
    const {id, nombre, descripcion, rubro} = getJsonStorage('modalProps');
    const [validated, setValidated] = useState(false);
    const [formValue, setFormValue] = useState({
        id: id,
        nombre: nombre,
        rubro: rubro,
        descripcion: descripcion
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
        const modificarProyecto = {
            name: formValue.nombre,
            rubro: formValue.rubro,
            description: formValue.descripcion,
        }

        const res = await metodoGeneral('/projects/'+ formValue.id,'PATCH',modificarProyecto)  //mandar objeto al back para el registro

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
            <h1>Modificar proyecto</h1>
        </Form.Group>
        <br></br>
        <br></br>

        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Nombre del proyecto:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control type="text" name="nombre" defaultValue={nombre} required />
          </Form.Group>
        </Form.Row>

        <br></br>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Tipo/Rubro</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control as="select" name="rubro" defaultValue={rubro} >
                <option value="VENTAS_ONLINE">Ventas online</option>
                <option value="BLOG">Blog</option>
                <option value="INFORMATIVA">Pagina informativa</option>
                <option value="CORPORATIVA">Pagina Corporativa</option>
                <option value="OTROS">Pagina Coorporativa</option>
                </Form.Control>
          </Form.Group>
          
        </Form.Row>

        <br></br>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Descripcion:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control as="textarea" name="descripcion" defaultValue={descripcion} rows="4" required/>
          </Form.Group>
        </Form.Row>

        <br></br>


        <br></br>
        <div style={{textAlign: "center"}}>
         <Button style={{textAlign: "center"}} type="submit" variant="success">Modificar proyecto</Button>
        </div>
      </Form>
    );
}