package com.madj;

import java.sql.*;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Driver
{
    public static void main (String[] args)
    {
        SpringApplication.run(Driver.class, args);

        Connection conn = GCloudConnector.getInstance().connection;
        if (conn != null)
        {
            try
            {
                conn.close ();
                System.out.println ("Database connection terminated");
            }
            catch (Exception e) { }
        }
        /*
        Product product1 = new Product(0, 24.32f, "Red Shirt", "A shirt that is red",
                "12452@imgur.com", Product.ProductType.Shirt);
        System.out.println(product1);
        */
    }


    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }
}