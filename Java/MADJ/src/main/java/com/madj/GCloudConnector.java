package com.madj;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 * Singleton class to handle Google Cloud connection, since only one connection should be active at a time.
 * @author  Jonathan Navarro
 * @author Mitchel Mercer
 * @version 1.0
 * @since 2022-08-11
 * @see Connection
 */
public class GCloudConnector {

    private static GCloudConnector instance;

    private GCloudConnector(Connection conn)
    {
        connection = conn;
    }

    /**
     * The JDBC connection. Only one exists at a time. This should be closed on when the application terminates.
     */
    public Connection connection;

    /**
     * Get the current instance of GCloudConnector. Generates the instance if it does not yet exist.
     * @return Get GCloudConnector instance.
     */
    public static GCloudConnector getInstance(){
        if(instance != null){
            return instance;
        }
        instance = new GCloudConnector(getConnection());
        return instance;
    }

    /**
     * Helper method to generate the JDBC connection.
     * @return An active JDBC connection if it is successful. Otherwise, returns null.
     */
    private static Connection getConnection(){
        // Get username, instance name, and password from the environment variables
        Connection conn = null;
        String DBPass = System.getenv("DBPASS");
        String DBInstanceName = System.getenv("DBINSTANCENAME");
        String DBName = System.getenv("DBNAME");

        try
        {
            // Attempt to connect to the Google Cloud database
            String url = String.format("jdbc:mysql:///%s?cloudSqlInstance=%s&socketFactory=com.google.cloud.sql.mysql.SocketFactory&user=root&password=%s", DBName, DBInstanceName, DBPass);
            Class.forName ("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(url);
            System.out.println ("Database connection established");
        }
        catch (Exception e)
        {
            e.printStackTrace();

        }
        finally
        {
            return conn;
        }
    }
}
