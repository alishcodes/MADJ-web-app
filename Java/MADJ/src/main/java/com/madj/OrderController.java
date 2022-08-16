package com.madj;

import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
/**
 * Rest controller for orders to handle front-end and back-end connection. All methods are mapped to <b>/api</b>.
 * @author  Jonathan Navarro
 * @author Mitchel Mercer
 * @version 1.0
 * @since 2022-08-11
 * @see Order
 * @see RestController
 */
@RestController
@RequestMapping("/api")
public class OrderController {
    /**
     * Method to send order information to server from client. Mapped to <b>/api/send-order</b>. Called from api using POST request.
     * @param orderJSONInformation JSON formatted to fit the OrderJSONInformation properties. Included in the request's body.
     * @see OrderJSONInformation
     */
    @RequestMapping(
            value = "send-order",
            method = RequestMethod.POST)
   public void ReceiveOrder(@RequestBody OrderJSONInformation orderJSONInformation){

        HashMap<Integer, Integer> orderProducts = new HashMap<>();
        List<Integer> products = orderJSONInformation.getProductIDs();
        List<Integer> quantities = orderJSONInformation.getQuantities();

        for(int i = 0; i < products.size(); i++){
            orderProducts.put(products.get(i), quantities.get(i));
        }

        Order order = new Order(orderJSONInformation.getBillingName(), orderJSONInformation.getBillingAddress(), orderJSONInformation.getCustomerName(), orderJSONInformation.getEmail(), orderJSONInformation.getCardInfo(), orderProducts);
        saveOrderToDB(order);
        sendConfirmationEmail(order);
        System.out.println("Received data: " + orderJSONInformation.toString());
    }
    private void sendConfirmationEmail(Order order){
        String body = "<h1>Thank you for your order, " + order.getCustomerName() + ".</h1>\n" +
                "<p>\n" +
                "Billing name: \n" + order.getBillingName() +
                "</p>\n" +
                "<p>\n" +
                "Billing address: \n" + order.getBillingAddress() +
                "</p>\n" +
                "<p>\n" +
                "Customer name: \n" + order.getCustomerName() +
                "</p>" +
                "<p>\n" +
                "Total: $" + (((float)order.getTotal()) / 100) +
                "</p>";
        body += "<p><h3><u>Products</u><h3></p>";
        ArrayList<Order.ProductInformation> products = order.getProductsInfo();
        for(int i = 0; i < order.getProductsInfo().size(); i++){
            body += products.get(i).getAsHTMLText();
        }
        Mailer.send(order.getEmail(), "MADJ Order Confirmation", body);
    }
    private void saveOrderToDB(Order order){
        String query = "INSERT INTO orders (billing_name, billing_address, email_address, customer_name, card_information, total)\n" +
                " values (" +
                "\"" + order.getBillingName() + "\"" +
                ",\"" + order.getBillingAddress() + "\"" +
                ",\"" + order.getEmail() + "\"" +
                ",\"" + order.getCustomerName() + "\"" +
                ",\"" + order.getCardInfo() + "\"" +
                ",\"" + order.getTotal() + "\"" +
                ");";
        try(Statement statement = GCloudConnector.getInstance().connection.createStatement()){
            statement.executeUpdate(query);

            int orderId = -1;
            ResultSet rs = statement.executeQuery("SELECT LAST_INSERT_ID()");
            if (rs.next()) {
                orderId = rs.getInt(1);
            }

            for(Order.ProductInformation product : order.getProductsInfo()){
                query = "INSERT INTO order_items (order_id, product_id, quantity)\n" +
                        " values (" +
                        "\"" + orderId + "\"" +
                        ",\"" + product.id + "\"" +
                        ",\"" + product.quantity + "\"" +
                        ");";
                statement.executeUpdate(query);
            }

        }
        catch (SQLException e){
            e.printStackTrace();
        }
    }
}
