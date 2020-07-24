package pe.edu.unmsm.tirs.frontend.controller.producto;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/productos")
public class ProductoController {
	
	@GetMapping("/")
    public String irPagina(ModelMap model)
    {
        return "seguras/productos/productos";
    }
	
//	@GetMapping("/prueba")
//    public String irPaginaMantenimiento(ModelMap model)
//    {
//		System.out.println("INGRESO ACA");
//        return "/view/seguras/productos/Content1";
//    }
	
}
