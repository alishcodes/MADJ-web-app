package com.madj;

import java.util.ArrayList;
import java.util.HashMap;


public class Order{

    public class ProductInformation {
        float price;
        String title, desc, img;
    }

    String email = "", name = "", cardInfo = "";
    float total = 0;
    public ArrayList<ProductInformation> productDump;

    public Order(String Name, String email, String cardInfo, HashMap<Long,Integer> products){
        productDump = new ArrayList<>();
        int orderTotal = 0;
        for (Long id : products.keySet()) {
            Product temp = ProductController.globalRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
            orderTotal += temp.getPrice() * products.get(id);
            ProductInformation working = new ProductInformation();
            working.price = temp.getPrice();
            working.title = temp.getTitle();
            working.desc = temp.getDesc();
            working.img = temp.getImg();
            productDump.add(working);
        }
        this.name = Name;
        this.email = email;
        this.cardInfo = cardInfo;
        total = orderTotal;
//Get product information
    }

    private String getEmail(){
        return this.email;
    }
    private String getName(){
        return this.name;
    }
    private String getCardInfo(){
        return this.cardInfo;
    }
    private ArrayList<ProductInformation> getProductsInfo(){
        return this.productDump;
    }
}