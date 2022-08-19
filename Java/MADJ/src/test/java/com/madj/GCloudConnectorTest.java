package com.madj;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.sql.Connection;
import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.*;
class GCloudConnectorTest {
    // Must set environment variables for this test's runtime configuration for it to function properly.
    @Test
    void getInstance() {
        if(System.getenv("DBUSER") == null ||
                System.getenv("DBNAME") == null ||
                System.getenv("DBPASS") == null ||
                System.getenv("DBINSTANCENAME") == null){
            fail("You must set the environment variables for this test to function properly." +
                    " On Intellij, they are in the run configuration.");
        }
        Connection conn = null;
        try{
            // Assert connection can be gotten initially
            conn = GCloudConnector.getInstance().connection;
            assertFalse(conn.isClosed());
            // Assert connection can be reinstated again after closing
            conn.close();
            conn = GCloudConnector.getInstance().connection;
            assertFalse(conn.isClosed());
        }
        catch (SQLException e){
            // If an exception occurs, then test failed
            e.printStackTrace();
            fail("SQL Exception occurred");
        }
        finally {
            //try to close the connection
            if(conn != null){
                try{
                    conn.close();
                    System.out.println("Database connection terminated");
                }
                catch (Exception e){
                    fail("Failed to close connection");
                }
            }
        }
    }
}