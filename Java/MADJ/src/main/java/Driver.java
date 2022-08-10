import java.sql.*;

public class Driver
{
    public static void main (String[] args)
    {
        Connection conn = GCloudConnector.getInstance().connection;
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