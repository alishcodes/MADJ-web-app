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
     * Container to store product and quantity in order
     */
    public class ProductInformation {
        /**
         * Product purchased in this order
         */
        Product product;
        /**
         * Quantity of this product purchased
         */
        int quantity;
        /**
         * Gets the product information with HTML formatting
         * @return Product information as a String
         */
        public String getAsHTMLText(){
            return
                    "<p><h2>" + product.getTitle() + "</h2></p>" +
                    "<p>" + product.getDesc() + "</p>" +
                    "<p>Price: $" + (((float)product.getPrice()) / 100) + "</p>" +
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
     * @param products The products and quantities.
     */
    public Order(String billingName, String billingAddress, String customerName, String email, String cardInfo, HashMap<Product, Integer> products){
        productDump = new ArrayList<>();
        int orderTotal = 0;
        for (Product pr : products.keySet()) {
            // increment total price of order with current item multiplied by quantity
            orderTotal += pr.getPrice() * products.get(pr);
            // create a new instance of product info to manipulate without cross contamination
            ProductInformation working = new ProductInformation();
            working.product = pr;
            working.quantity = products.get(pr);
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