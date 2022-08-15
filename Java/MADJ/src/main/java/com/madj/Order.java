package com.madj;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * Order class to hold all order information.
 * @author  Jonathan Navarro
 * @author Mitchel Mercer
 * @version 1.0
 * @since 2022-08-11
 */
public class Order{
    public class ProductInformation {
        int id;
        int quantity;
        int price;
        String title, desc, img;
    }
    // variables for local use
    String billingName;
    String billingAddress;
    String email = "", customerName = "", cardInfo = "";
    int total = 0;
    // list of all products in an order
    public ArrayList<ProductInformation> productDump;
    // Order Constructor
    public Order(String billingName, String billingAddress, String customerName, String email, String cardInfo, HashMap<Integer, Integer> products){
        productDump = new ArrayList<>();
        int orderTotal = 0;
        for (int id : products.keySet()) {
            // Product variable to hold product currently under analysis
            Product temp = ProductController.globalRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
            //increment total price of order with current item multiplied by quantity
            orderTotal += temp.getPrice() * products.get(id);
            // create a new instance of product info to manipulate without cross contamination
            ProductInformation working = new ProductInformation();
            working.price = temp.getPrice();
            working.title = temp.getTitle();
            working.desc = temp.getDesc();
            working.img = temp.getImg();
            working.id = temp.getId();
            working.quantity = products.get(id);
            // add created product to list of all products in order
            productDump.add(working);
        }
        // Collect Order information
        this.billingName = billingName;
        this.billingAddress = billingAddress;
        this.customerName = customerName;
        this.email = email;
        this.cardInfo = cardInfo;
        total = orderTotal;
    }
    // Functions for front end data retrieval
    public String getBillingName(){
        return this.billingName;
    }
    public String getBillingAddress(){
        return this.billingAddress;
    }
    public String getEmail(){
        return this.email;
    }
    public String getCustomerName(){
        return this.customerName;
    }
    public String getCardInfo(){
        return this.cardInfo;
    }
    public ArrayList<ProductInformation> getProductsInfo(){
        return this.productDump;
    }
    public int getTotal(){
        return this.total;
    }
}