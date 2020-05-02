package io.vigoz.keycloak.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/customer")
    public String customer() {
        return "only customer can see";
    }

    @RequestMapping("/admin")
    public String admin() {
        return "only admin cas see";
    }
}
