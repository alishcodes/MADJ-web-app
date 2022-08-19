package com.madj;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import javax.sql.DataSource;

/**
 * Singleton class to handle Google Cloud connection, since only one connection should be active at a time.
 * @author  Jonathan Navarro
 * @author Mitchel Mercer
 * @version 1.0
 * @since 2022-08-11
 * @see Connection
 */
public class GCloudConnector {
    // Environment variables, use the Google Cloud secret manager for any sensitive information
    private static final String INSTANCE_CONNECTION_NAME =
            System.getenv("DBINSTANCENAME");
    private static final String INSTANCE_UNIX_SOCKET = System.getenv("DBINSTANCEUNIXSOCKET");
    private static final String DB_USER = System.getenv("DBUSER");
    private static final String DB_PASS = System.getenv("DBPASS");
    private static final String DB_NAME = System.getenv("DBNAME");
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
     * Generates a new connection if the current one is closed.
     * @return Get GCloudConnector instance.
     */
    public static GCloudConnector getInstance() throws SQLException {
        if(instance != null){
            if(instance.connection.isClosed()){
                // generate connection if one is closed
                instance.connection = getConnection();
            }
            // instance already exists, so it is returned
            return instance;
        }
        // no instance exists, so one is created
        instance = new GCloudConnector(getConnection());
        return instance;
    }

    /**
     * Helper method to generate the JDBC connection.
     * @return An active JDBC connection if it is successful. Otherwise, returns null.
     */
    private static Connection getConnection(){
        Connection conn = null;
        try
        {
            // Attempt to connect to the Google Cloud database
            conn = createConnectionPool().getConnection();
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

    private static DataSource createConnectionPool() {
        // Config object to specify connection specifications
        HikariConfig config = new HikariConfig();

        // Set url to the proper format
        config.setJdbcUrl(String.format("jdbc:mysql:///%s", DB_NAME));
        config.setUsername(DB_USER);
        config.setPassword(DB_PASS);

        config.addDataSourceProperty("socketFactory", "com.google.cloud.sql.mysql.SocketFactory");
        config.addDataSourceProperty("cloudSqlInstance", INSTANCE_CONNECTION_NAME);

        /* Use a UNIX socket to connect if available.
         * On the cloud run service, we use a proxy to connect, so this UNIX socket path is necessary.
         * In other environments, such as local machines with the GCloud CLI,
         * gcloud auth application-default login is enough.
         */
        if (INSTANCE_UNIX_SOCKET != null) {
            config.addDataSourceProperty("unixSocketPath", INSTANCE_UNIX_SOCKET);
        }

        // Only one connection is needed for now
        config.setMaximumPoolSize(1);

        // Begin the connection pool with the specifications
        return new HikariDataSource(config);
    }
}
