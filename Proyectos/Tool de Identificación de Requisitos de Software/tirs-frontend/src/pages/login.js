import React from 'react'
import {Row, Col, Form, Container} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {metodoGeneral} from '../lib/metodos.js' //mandar json al back
import {setJsonStorage} from '../lib/jsonStorages'
import '../public/csshome/cssjh.css';

export default function Login() {
    const history = useHistory();
    const login = async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value ;
        const contraseña = document.getElementById('login-contraseña').value ;
        const usuario = {
            email: email, 
            password: contraseña
        }

        const tkn = await metodoGeneral('/users/login/','POST',usuario,true)
        localStorage.setItem('TIRS_token',tkn.token);
        
        if(tkn.token != null){
            const user = await metodoGeneral('/users/')
            await setJsonStorage('TIRS_usuario',user);
            
            history.push('/listaProyectos')
            window.location.reload();
        }
        else{
            document.getElementById('login-mensaje-error').textContent = 'Login no válido';
        }

      }
      


    return (
      <>
        

        <Container md="4" >
          <Form  onSubmit={login}>
            
            <Row  >
                  <Col md="3"></Col>
                  <Col className=" pt-5 p-5" md="6">
                  <h3 style={{textAlign: "center"}}>Login TIRS</h3>
                  <br></br>
                  <div align="center">
                  <img src="user1.png" width="120" height="120" ></img>
                  </div>
                  <br></br>
                  <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" className="form-control" name="email" id='login-email' 
                      placeholder="Correo electrónico" autofocus required/>
                  </div>
  
                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" name="contraseña" id='login-contraseña'
                      placeholder="Contraseña" required/>
                  </div>
                  <br></br>

                  <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                  <a href="/registro" className="btn btn-secondary btn-block mb-2" type="s">Registrarse</a>
                  <div style={{color: "#FF0000"}} id="login-mensaje-error"></div>
                  </Col>
            </Row>
          </Form>

        </Container>
      </>
    );
};
