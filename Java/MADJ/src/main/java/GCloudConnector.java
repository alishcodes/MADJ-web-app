import java.sql.Connection;
import java.sql.DriverManager;

public class GCloudConnector {

    private static GCloudConnector instance;

    private GCloudConnector(Connection conn)
    {
        connection = conn;
    }

    public Connection connection;

    public static GCloudConnector getInstance(){
        if(instance != null){
            return instance;
        }
        instance = new GCloudConnector(getConnection());
        return instance;
    }
    private static Connection getConnection(){
        Connection conn = null;
        String DBPass = System.getenv("DBPASS");
        String DBInstanceName = System.getenv("DBINSTANCENAME");
        String DBName = System.getenv("DBNAME");

        try
        {
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
