import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function documentoRequisitos(proyecto, requerimientosEspecificos, requerimientosGenerales, actores) {
    const titulo = proyecto.name
    // const fecha = getDate();
    console.log(requerimientosEspecificos);
    console.log(actores);
    
    const historialDeCambios = [
        ['Item',  'Fecha', 'Version',  'Nombre de Autor',  'Razon de cambio'],
        ['Item',  'Fecha', 'Version',  'Nombre de Autor',  'Razon de cambio'],
        ['Item',  'Fecha', 'Version',  'Nombre de Autor',  'Razon de cambio'],
        ['Item',  'Fecha', 'Version',  'Nombre de Autor',  'Razon de cambio'],
        ['Item',  'Fecha', 'Version',  'Nombre de Autor',  'Razon de cambio'],
        ['Item',  'Fecha', 'Version',  'Nombre de Autor',  'Razon de cambio'],
        ['Item',  'Fecha', 'Version',  'Nombre de Autor',  'Razon de cambio'],
        ['Item',  'Fecha', 'Version',  'Nombre de Autor',  'Razon de cambio'],
        ['Item',  'Fecha', 'Version',  'Nombre de Autor',  'Razon de cambio']
    ];
    const objetivo = proyecto.objetivo
    const alcance = proyecto.alcance
    const fuera_alcance = proyecto.fuera_alcance
    const vision_general_documento = proyecto.vision_general_documento
    const perspectiva_producto = proyecto.perspectiva_producto
    const objetivos_sistema= proyecto.objetivos_sistema
    const restricciones = proyecto.restricciones
    const suposiciones_dependencias = proyecto.suposiciones_dependencias
    const funciones = 'Funciones del sistema'
    // const actores = [
    //     ['Mi pana miguel', 'Mi pana miguel se encarga de manejar el sistema'],
    //     ['Mi pana miguel', 'Mi pana miguel se encarga de manejar el sistema'],
    //     ['Mi pana miguel', 'Mi pana miguel se encarga de manejar el sistema']
    // ]

    // historialCambios = {[0][1][2][3][4][5][6][7][8]}

    
    let json = {
        content: [
            {
                stack: [
                    titulo,
                    {text: 'Documento de requisitos', style: 'subheader'},
                ],
                style: 'header'
            },
            {
                stack: [
                    {
                        fontSize: 15,
                        text: [
                            'ADMINISTRACIÓN DE DOCUMENTOS\n\n',
                        ],
                    },
                    'Aprobación\n\n\n',
                ],
                margin: [0, 20, 0, 0],
                alignment: 'justify'
            },
            {
                style: 'tableExample',
                table: {
                    heights: [55, 55],
                    widths: ['*', '*', '*'],
                    body: [
                        ['Cliente:', 'Firma:', 'Fecha:'],
                        ['Jefe de proyecto:', 'Firma:', 'Fecha:'],
                    ]
                },
            },
            {
                stack: [
                    '\n\n\n\n',
                ],
            },
            {
                stack: [
                    {
                        fontSize: 15,
                        text: [
                            'HISTORIAL DE REVISIONES\n\n\n',
                        ],
                    },
                ],
                margin: [0, 20, 0, 0],
                alignment: 'justify'
            },
            {
                style: 'tableExample',
                table: {
                    widths: [40, 80, 80, '*', '*'],
                    body: [
                        [{text: 'Item', style: 'tableHeader', alignment: 'center'}, {text: 'Fecha', style: 'tableHeader', alignment: 'center'}, {text: 'Version', style: 'tableHeader', alignment: 'center'}, {text: 'Nombre de Autor', style: 'tableHeader', alignment: 'center'}, {text: 'Razon de cambio', style: 'tableHeader', alignment: 'center'}],
                    ]
                },
                style: 'saltoPagina'
            },
            {
                stack: [
                    {
                        fontSize: 15,
                        text: [
                            'TABLA DE CONTENIDO\n\n',
                        ],
                    },
                ],
                margin: [0, 20, 0, 0],
                alignment: 'justify'
            },
            {
                ol: [
                    [
                        'Introducción\n\n',
                        {
                            ol: [
                                'Objetivo\n\n',
                                'Alcance\n\n',
                                'Fuera del alcance\n\n',
                                'Vision general del documento\n\n',
                            ]
                        },
                    ],
                    [
                        'Descripcion general\n\n',
                        {
                            ol: [
                                'Perspectivas del producto\n\n',
                                'Objetivos del sistema\n\n',
                                'Funciones del sistema\n\n',
                                'Caracteristicas de actores\n\n',
                                'Restricciones\n\n',
                                'Suposiciones y dependencias\n\n'
                            ]
                        },
                    ],
                    [
                        'Definicion de requisitos funcionales\n\n',
                        {
                            ol: [
                                'Perspectivas del producto\n\n'
                            ]
                        },
                    ],
                ],
                style: 'contenido',
            },
            {text: '1. Introducción\n\n', style: 'tableHeader'},
            {
                stack: [
                    {text: '1.1. Objetivo:\n\n', style: 'tableHeader'},
                    objetivo,'\n',
                    {text: '1.2. Alcance de sistema:\n\n', style: 'tableHeader'},
                    alcance,'\n',
                    {text: '1.3. Fuera de alcance:\n\n', style: 'tableHeader'},
                    fuera_alcance,'\n',
                    {text: '1.4. Vision general del documento:\n\n', style: 'tableHeader'},
                    vision_general_documento,'\n',
                ],
                style: 'pointMargin'
            },
            {text: '2. Introducción\n\n', style: 'tableHeader'},
            {
                stack: [
                    {text: '2.1. Perspectiva del producto:\n\n', style: 'tableHeader'},
                    perspectiva_producto,'\n',
                    {text: '2.2. Objetivo del sistema:\n\n', style: 'tableHeader'},
                    objetivos_sistema,'\n',
                    {text: '2.3. Funciones del sistema:\n\n', style: 'tableHeader'},
                    funciones,'\n',
                    {text: '2.4. Vision general del documento:\n\n', style: 'tableHeader'},
                ],
                style: 'pointMargin'
            },
            {
                stack: [],
                style: 'pointMargin'
            },
            {
                stack: [
                    '\n',{text: '2.4. Vision general del documento:\n\n', style: 'tableHeader'},
                ],
                style: 'pointMargin'
            },
            {
                style: 'pointMargin',
                table: {
                    widths: [80, '*'],
                    body: [
                        [{text: 'Actor', style: 'tableHeader', alignment: 'center'}, {text: 'Descripción', style: 'tableHeader', alignment: 'center'}]
                    ]
                },
            },
            {
                stack: [
                    '\n',
                ],
            },
            {
                stack: [
                    {text: '2.5. Restricciones:\n\n', style: 'tableHeader'},
                    restricciones,'\n',
                    {text: '2.6. Suposiciones y dependencias:\n\n', style: 'tableHeader'},
                    suposiciones_dependencias,'\n'
                ],
                style: 'pointMargin'
            },
            {
                text: '',
                style: 'saltoPagina'
            },
            {text: '3. Definición de requisitos del sistema\n\n', style: 'tableHeader'},

        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                alignment: 'left',
                margin: [0, 250, 0, 800]
            },
            saltoPagina: {
                margin: [0,0,0,800]
            },
            contenido: {
                margin: [20,0,0,800]
            },
            subheader: {
                fontSize: 14
            },
            pointMargin: {
                margin: [20, 0, 40, 0]
            },
            reqMargin: {
                margin: [40, 0, 40, 0],
            },
            reqTitleTable: {
                bold: true,
                fontSize: 13,
                color: 'black',
                margin: [40, 0, 40, 0],
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            },
            tableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black'
            },
            tableReqHeader: {
                bold: true,
                fontSize: 11.5,
                color: 'black'
            },
            reqContent: {
                fontSize: 11.5
            },
            interlineado: {
                margin: 20
            }
        }
        
    }

    const listarHistorial = () => {
        historialDeCambios.map((history) => {
            json.content[5].table.body.push(history)
            
        })
    }

    const listarRequerimientosSimple = () => {
        requerimientosEspecificos.map((requerimiento) => {
            const linea= `REQ-FUN ${requerimiento.numeracion} – ${requerimiento.name}: ${requerimiento.description}`
            json.content[12].stack.push(linea);
        })
    }

    const listarActores = () => {
        actores.map(actor => {
            const linea = []
            linea.push(actor.name)
            linea.push(actor.descripcion)
            json.content[14].table.body.push(linea)
        })
    }

    const listarRequisitosFuncionales = () => {
        // const requerimientosFuncionales = requerimientosEspecificos.filter(req => req.tipo == 'funcional');
        const requerimientosFuncionales = requerimientosEspecificos;
        const jsonRequisitosFuncionales = { 
            stack: [
                {text: '3.1. Requisitos funcionales del sistema:\n\n', style: 'tableHeader'},
                '\n',
            ],
            style: 'pointMargin'
        }
        json.content.push(jsonRequisitosFuncionales)
        
        let i = 1
        requerimientosFuncionales.map(req => {
            json.content.push(tablaNumeracion(i))
            json.content.push(tablaRequisitoHead(req))
            json.content.push(tablaRequisitoBody(req))
            json.content.push(saltoLinea());
            i++;
        })
        
    }

    const listarRequisitosNoFuncionales = () => {
        // const requerimientosFuncionales = requerimientosEspecificos.filter(req => req.tipo == 'no-funcional');
        const requerimientosNoFuncionales = requerimientosEspecificos;
        const jsonRequisitosNoFuncionales = {
            stack: [
                {text: '3.2. Requisitos no funcionales del sistema:\n\n', style: 'tableHeader'},
                '\n',
            ],
            style: 'pointMargin'
        }
        json.content.push(jsonRequisitosNoFuncionales)
        
    }

    listarHistorial();
    listarRequerimientosSimple();
    listarActores();
    listarRequisitosFuncionales();
    listarRequisitosNoFuncionales();

    return json;
};

const tablaRequisitoHead = (req) => {
    const jsonRequisito = {
        style: 'reqMargin',
        table: {
            widths: [80, 120 , 120, 80],
            body: [
                [
                    {text: 'ID DEL REQUISITO', style: 'tableReqHeader', alignment: 'center'}, 
                    {text: 'NOMBRE', style: 'tableReqHeader', alignment: 'center'},
                    {text: 'ACTOR', style: 'tableReqHeader', alignment: 'center'},
                    {text: 'PRIORIDAD', style: 'tableReqHeader', alignment: 'center'}
                ],
                [
                    {text: req.id, style: 'reqContent'}, 
                    {text: req.name, style: 'reqContent'},
                    {text: req.actor, style: 'reqContent'},
                    {text: req.priority, style: 'reqContent'}
                ],
            ],
            style: 'reqMargin'
        },
    }
    return jsonRequisito;
}

const tablaRequisitoBody = (req) => {
    const jsonRequisito = {
        style: 'reqMargin',
        table: {
            widths: [400],
            body: [
                [{text: 'DESCRIPCIÓN', style: 'tableReqHeader'}],
                [{text: req.descripcion_detallada, style: 'reqContent'}]
            ],
            style: 'reqMargin'
        },
    }
    return jsonRequisito;
}

const tablaNumeracion = (num) => {
    return {text: `3.1.${num} \n\n`, style: 'reqTitleTable'}
}

const saltoLinea = () => {
    const jsonSaltoLinea = {
        stack: [
            '\n\n'
        ]
    }
    return jsonSaltoLinea;
}