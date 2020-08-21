import React from 'react';
import '../public/csshome/cssjh.css';


export default function Home(props) {
    const {setState,state} = props; setState(state);
    return (

        <>
        <br></br>
        <div className=" container contenido  pt-5"  id="" align="center">
            <div className="">
                <div className="container  titulos1" >
                    <h1 >BIENVENIDO A TIRS</h1>
                    <h5>Tu Herramienta de Identificación de Requisitos de Software</h5> 
                </div>
                <br></br>
                <div className="container  p-5 ">
                    <div   className="form-group row">
                        <div className="col-sm-6">
                             <img className="imagen" src="img2.jpg" alt="image" width="450" height="400"></img>
                        </div>
                        <div className="col-sm-6 pt-5">
                            <br></br><br></br><br></br><br></br>
                            <a href="/login" className="btn btn-primary btn-block text-uppercase font-weight-bold mb-2" type="">Acceder</a><br></br>
                            <a href="/registro" className="btn btn-secondary btn-block text-uppercase font-weight-bold mb-2" type="s">Crear cuenta</a>
                            <br></br>
                            <img  src="redux.png" width="40" height="40" ></img>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};