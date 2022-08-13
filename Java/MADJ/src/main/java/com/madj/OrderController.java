package com.madj;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {
    @RequestMapping(
            value = "send-order",
            method = RequestMethod.POST)
   public void ReceiveOrder(@RequestBody OrderJSONInformation orderJSONInformation){

        HashMap<Long, Integer> orderProducts = new HashMap<Long, Integer>();
        List<Long> products = orderJSONInformation.getProductIDs();
        List<Integer> quantities = orderJSONInformation.getQuantities();

        for(int i = 0; i < products.size(); i++){
            orderProducts.put(products.get(i), quantities.get(i));
        }

        Order order = new Order(orderJSONInformation.getName(), orderJSONInformation.getEmail(), orderJSONInformation.getCardInfo(), orderProducts);
        saveOrderToDB(order);
        sendConfirmationEmail(order);
        System.out.println("Received data: " + orderJSONInformation.toString());
    }
    private void sendConfirmationEmail(Order order){

    }
    private void saveOrderToDB(Order order){

    }
}
