package com.madj;


import java.util.HashMap;


public class Order{

    String email = "", name = "", cardInformation = "";
    float total = 0;
    int id = 0;


    public Order(HashMap<Long,Integer> products){
        int orderTotal = 0;
        for (Long id : products.keySet()) {
            Product temp = ProductController.globalRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
            orderTotal += temp.getPrice() * products.get(id);
        }
        total = orderTotal;
//Get product information
    }
    public void sendConfirmation(){

    }
}