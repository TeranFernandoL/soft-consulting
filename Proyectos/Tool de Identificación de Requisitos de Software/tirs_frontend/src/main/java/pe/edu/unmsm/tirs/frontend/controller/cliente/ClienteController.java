package pe.edu.unmsm.tirs.frontend.controller.cliente;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/clientes")
public class ClienteController {
	
	@GetMapping("/")
    public String irPagina(ModelMap model)
    {
        return "seguras/clientes/clientes";
    }
	
//	@GetMapping("/prueba")
//    public String irPaginaMantenimiento(ModelMap model)
//    {
//		System.out.println("INGRESO ACA");
//        return "/view/seguras/productos/Content1";
//    }
	
}
