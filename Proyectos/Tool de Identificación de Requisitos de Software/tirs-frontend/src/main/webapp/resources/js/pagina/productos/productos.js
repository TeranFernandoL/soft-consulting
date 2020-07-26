// js que afecta solo a productos.html
$(document).ready(function() {
		    $("#example1").DataTable({
		    	"ajax":{
		    		"method":"GET",
		    		"url":"http://localhost:8082/modelo-backend/productos/",
		    		"dataSrc" : ""
		    	},
				"language" : {
					"url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json",
					"emptyTable" : "Ningun producto encontrado" // Nuevo
				},
				"columnDefs" : [ {
					"targets" : [ 0,1,2,3],
					"className" : "all filtrable",
//					"width" : "100%",
				} , {
					"targets" : 4,
					"className" : "all seleccionable",
//					"width" : "100%",
				} ,{
					"targets" : 5,
					"className" : "all  text-center",
//					"width" : "5%",
// 					"width" : "2%",
					"defaultContent" : "<button class='btn btn-xs btn-success detalle' title='Ver Detalle' data-tooltip='tooltip'style='padding: 5px 5px;'><i class='fas fa-archive'></i></button>"
				}],
		    	"columns" : [ 
		    		{
		    			"data" : 'id',
		    			"title" : "ID"
		    		}, {
		    			"data" : 'nombre',
		    			"title" : "Nombre"
		    		}, {
		    			"data" : 'stock',
		    			"title" : "Stock"
		    		}, {
		    			"data" : 'precio',
		    			"title" : "Precio"
		    		}, {
		    			"data" : 'idCategoria',
		    			"title" : "Categoria"
		    		},{
		    			"data" : null,
		    			"title" : "Acciï¿½n"
		    		}
		    		]
		    });
		    
});