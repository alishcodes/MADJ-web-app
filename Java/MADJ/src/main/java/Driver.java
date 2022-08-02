import java.sql.*;

public class Driver
{
    public static void main (String[] args)
    {
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
            if (conn != null)
            {
                try
                {
                    conn.close ();
                    System.out.println ("Database connection terminated");
                }
                catch (Exception e) { /* ignore close errors */ }
            }
        }
    }
}