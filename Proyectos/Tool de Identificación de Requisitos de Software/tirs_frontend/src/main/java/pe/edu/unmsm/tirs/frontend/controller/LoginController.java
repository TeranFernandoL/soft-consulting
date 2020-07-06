package pe.edu.unmsm.tirs.frontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class LoginController {
	
	@GetMapping("/login")
    public String login(ModelMap model)
    {
        return "login";
    }
	
	@GetMapping("/layout")
    public String principal(ModelMap model)
    {
        return "principal";
    }
}
