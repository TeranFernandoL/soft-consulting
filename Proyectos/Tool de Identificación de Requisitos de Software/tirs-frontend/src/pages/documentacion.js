import React from 'react'
import {Container} from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import {documentoRequisitos} from '../lib/documentacion'
import {metodoGeneral} from '../lib/metodos'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {getJsonStorage} from '../lib/jsonStorages'
import FormDocumentoRequisitos from '../components/Documentacion/formDocumentoRequisitos'
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function Documentacion(props) {
    const {id} = useParams();
    const {setState} = props; setState(id);
    const nombreProyecto = getJsonStorage('TIRS_proyecto')
    const proyecto = useFetch('/projects/' + id)
    const imprimir = async () => {
        const project = await metodoGeneral('/projects/' + id)
        const requerimientosEspecificos = await metodoGeneral('/requirement/project/' + id);
        const requerimientosGenerales = '';
        // const requerimientosGenerales = await metodoGeneral('/requirement/project/' + id);
        const actores = await metodoGeneral(`/projects/${id}/actor`);
        console.log('a');
        console.log(actores);
        console.log('a');
        
        
        const json = await documentoRequisitos(project,requerimientosEspecificos,requerimientosGenerales,actores);
        await pdfMake.createPdf(json).open();
    }

    return (
        <Container>
            <br></br><br></br>
            <h3 style={{textAlign: "center"}}>{nombreProyecto} - Documentación de requisitos</h3>
            <button onClick={imprimir}>Imprimir algo</button>
            <FormDocumentoRequisitos proyecto={proyecto}/>
        </Container>
    );
};
