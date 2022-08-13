package com.madj;

import java.util.ArrayList;
import java.util.HashMap;


public class Order{

    public class ProductInformation {
        int id;
        int quantity;
        float price;
        String title, desc, img;
    }
    String billingName;
    String billingAddress;
    String email = "", customerName = "", cardInfo = "";
    float total = 0;
    public ArrayList<ProductInformation> productDump;

    public Order(String billingName, String billingAddress, String customerName, String email, String cardInfo, HashMap<Integer, Integer> products){
        productDump = new ArrayList<>();
        int orderTotal = 0;
        for (int id : products.keySet()) {
            Product temp = ProductController.globalRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
            orderTotal += temp.getPrice() * products.get(id);
            ProductInformation working = new ProductInformation();
            working.price = temp.getPrice();
            working.title = temp.getTitle();
            working.desc = temp.getDesc();
            working.img = temp.getImg();
            working.id = temp.getId();
            working.quantity = products.get(id);
            productDump.add(working);
        }
        this.billingName = billingName;
        this.billingAddress = billingAddress;
        this.customerName = customerName;
        this.email = email;
        this.cardInfo = cardInfo;
        total = orderTotal;
//Get product information
    }
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
    public float getTotal(){
        return this.total;
    }
}