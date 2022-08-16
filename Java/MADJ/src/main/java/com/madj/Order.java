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
    /**
     * Product information to store product information and quantity in order
     */
    public class ProductInformation {
        /**
         * Product's id
         */
        int id;
        /**
         * Quantity of this product purchased
         */
        int quantity;
        /**
         * Product's price
         */
        int price;
        /**
         * Product's title/name
         */
        String title;
        /**
         * Product's description
         */
        String desc;
        /**
         * Product's image url
         */
        String img;

        /**
         * Gets the product information with HTML formatting
         * @return Product information as a String
         */
        public String getAsHTMLText(){
            return
                    "<p><h2>" + this.title + "</h2></p>" +
                    "<p>" + this.desc + "</p>" +
                    "<p>Price: $" + (((float)this.price) / 100) + "</p>" +
                    "<p>Quantity: " + this.quantity + "</p>";
        }
    }
    // local variables
    String billingName;
    String billingAddress;
    String email = "", customerName = "", cardInfo = "";
    int total = 0;
    /**
     * List of products' information for this order.
     */
    public ArrayList<ProductInformation> productDump;

    /**
     * Order constructor.
     * @param billingName The name for the billing information.
     * @param billingAddress The address for the billing information.
     * @param customerName The customer's name.
     * @param email The customer's email.
     * @param cardInfo The customer's card information.
     * @param products The product ids and quantities.
     */
    public Order(String billingName, String billingAddress, String customerName, String email, String cardInfo, HashMap<Integer, Integer> products){
        productDump = new ArrayList<>();
        int orderTotal = 0;
        for (int id : products.keySet()) {
            // Product variable to hold product currently under analysis
            Product temp = ProductController.globalRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
            // increment total price of order with current item multiplied by quantity
            orderTotal += temp.getPrice() * products.get(id);
            // create a new instance of product info to manipulate without cross contamination
            ProductInformation working = new ProductInformation();
            working.price = temp.getPrice();
            working.title = temp.getTitle();
            working.desc = temp.getDesc();
            working.img = temp.getImg();
            working.id = temp.getId();
            working.quantity = products.get(id);
            // add created product to list
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
    // Getter methods

    /**
     * Order billing name getter method.
     * @return The name for the billing information.
     */
    public String getBillingName(){
        return this.billingName;
    }

    /**
     * Order billing address getter method.
     * @return The address for the billing information.
     */
    public String getBillingAddress(){
        return this.billingAddress;
    }

    /**
     * Order email getter method.
     * @return The customer's email.
     */
    public String getEmail(){
        return this.email;
    }

    /**
     * Order customer name getter method.
     * @return The customer's name.
     */
    public String getCustomerName(){
        return this.customerName;
    }

    /**
     * Order card information getter method.
     * @return The card information.
     */
    public String getCardInfo(){
        return this.cardInfo;
    }

    /**
     * Order products' information getter method.
     * @return The list of products' information.
     * @see ProductInformation
     */
    public ArrayList<ProductInformation> getProductsInfo(){
        return this.productDump;
    }

    /**
     * Order total getter method.
     * @return The total price of this order.
     */
    public int getTotal(){
        return this.total;
    }
}