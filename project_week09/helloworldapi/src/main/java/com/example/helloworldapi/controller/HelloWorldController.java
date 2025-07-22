package com.example.helloworldapi.controller; // Ensure this matches your package structure

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * This class acts as a REST Controller for our Hello World API.
 * The @RestController annotation is a convenience annotation that combines
 * @Controller and @ResponseBody.
 * - @Controller: Marks this class as a Spring MVC controller.
 * - @ResponseBody: Indicates that the return value of the methods should be
 * bound directly to the web response body (e.g., as JSON or plain text),
 * rather than being interpreted as a view name.
 */
@RestController
public class HelloWorldController {

    /**
     * This method handles HTTP GET requests to the "/hello" endpoint.
     * When a client sends a GET request to http://localhost:8080/hello,
     * this method will be executed.
     *
     * The @GetMapping annotation is a composed annotation that acts as a shortcut
     * for @RequestMapping(method = RequestMethod.GET, path = "/hello").
     *
     * @return A String containing the "Hello, World!" greeting.
     */
    @GetMapping("/hello")
    public String sayHello() {
        // This string will be returned as the HTTP response body.
        return "Hello, World!";
    }
}
