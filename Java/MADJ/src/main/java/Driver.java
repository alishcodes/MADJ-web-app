import java.sql.*;

public class Driver
{
    public static void main (String[] args)
    {
        Connection conn = null;

        try
        {
            String url = "jdbc:mysql:///MADJSiteDB?cloudSqlInstance=nth-segment-357600:us-west1:madj-01&socketFactory=com.google.cloud.sql.mysql.SocketFactory&user=root&password=G23FDSZhre4";
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