package com.madj;

import java.sql.*;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Driver
{
    public static void main (String[] args)
    {
        // SpringBoot Starts
        SpringApplication.run(Driver.class, args);
        Runtime.getRuntime().addShutdownHook(new Thread()
        {
            @Override
            public void run()
            {
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
            }
        });
    }

}