import React, {useState} from "react";
import useFetch from '../../hooks/useFetch'
import {useLayoutEffect} from 'react';
import {setFecha} from '../../lib/metodos'
import {Container} from 'react-bootstrap';
import {ruta} from '../../lib/ruta'
import {setJsonStorage} from '../../lib/jsonStorages'



export default function TablaRequerimientosEspecificos() {
    

    return (
        <>
            <table className ="table table-hover">
                <thead className = "table-secondary">
                    <tr>
                        <th>Id </th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Prioridad</th>
                        <th>Fecha</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>101</td>
                        <td>PROYECTO 1</td> 
                        <td>PROYECTO 2  </td>
                        <td>Media</td>
                        <td>07/08/2020  </td>

                        <td>
                            <button type="button" className="btn btn-primary"   >Modificar  </button>{"   "}
                            <button type="button" className="btn btn-danger"    >Eliminar   </button>
                        </td>
                    </tr>
                    <tr>
                        <td>102</td>
                        <td>PROYECTO 1</td> 
                        <td>PROYECTO 2  </td>
                        <td>Alta</td>
                        <td>07/08/2020  </td>

                        <td>
                            <button type="button" className="btn btn-primary"   >Modificar  </button>{"   "}
                            <button type="button" className="btn btn-danger"    >Eliminar   </button>
                        </td>
                    </tr>
                    <tr>
                        <td>103</td>
                        <td>PROYECTO 1</td> 
                        <td>PROYECTO 2  </td>
                        <td>Baja</td>
                        <td>07/08/2020  </td>

                        <td>
                            <button type="button" className="btn btn-primary"   >Modificar  </button>{"   "}
                            <button type="button" className="btn btn-danger"    >Eliminar   </button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </>
    )

};


