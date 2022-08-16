package com.madj;

import java.util.List;

/**
 * Order information class to hold all order information sent through JSON. Formatted to be compatible with Spring Boot automation.
 * @author  Jonathan Navarro
 * @author Mitchel Mercer
 * @version 1.0
 * @since 2022-08-12
 */
public class OrderJSONInformation {
    private String billingName;
    private String billingAddress;
    private String customerName;
    private String email;
    private String cardInfo;
    private List<Integer> productIDs;
    private List<Integer> quantities;

    /**
     * Default constructor.
     */
    public OrderJSONInformation() {}

    // Getters and setters. Necessary for Spring Boot automation.

    /**
     * Billing name getter method.
     * @return The name for the billing information.
     */
    public String getBillingName() {
        return billingName;
    }

    /**
     * Billing name setter method.
     * @param billingName The name for the billing information.
     */
    public void setBillingName(String billingName) {
        this.billingName = billingName;
    }

    /**
     * Billing address getter method.
     * @return The address for the billing information.
     */
    public String getBillingAddress() {
        return billingAddress;
    }

    /**
     * Billing address setter method.
     * @param billingAddress The address for the billing information.
     */
    public void setBillingAddress(String billingAddress) {
        this.billingAddress = billingAddress;
    }

    /**
     * Customer name getter method.
     * @return The customer's name.
     */
    public String getCustomerName() {
        return customerName;
    }

    /**
     * Customer name setter method.
     * @param customerName The customer's name.
     */
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    /**
     * Email getter method.
     * @return The customer's email address.
     */
    public String getEmail() {
        return email;
    }

    /**
     * Email setter method.
     * @param email The customer's email address.
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Card information getter method.
     * @return The customer's card information used in payment.
     */
    public String getCardInfo() {
        return cardInfo;
    }

    /**
     * Card information setter method.
     * @param cardInfo The customer's card information used in payment.
     */
    public void setCardInfo(String cardInfo) {
        this.cardInfo = cardInfo;
    }

    /**
     * Product ids getter method.
     * @return List of product ids. Indices should match with quantities list.
     */
    public List<Integer> getProductIDs() {
        return productIDs;
    }

    /**
     * Product ids setter method
     * @param productIDs List of product ids. Indices should match with quantities list.
     */
    public void setProductIDs(List<Integer> productIDs) {
        this.productIDs = productIDs;
    }

    /**
     * Product quantities getter method.
     * @return List of product quantities. Indices should match with product ids list.
     */
    public List<Integer> getQuantities() {
        return quantities;
    }

    /**
     * Product quantities setter method.
     * @param quantities List of product quantities. Indices should match with product ids list.
     */
    public void setQuantities(List<Integer> quantities) {
        this.quantities = quantities;
    }

    /**
     * Overridden toString method.
     * @return The order information as a string.
     */
    @Override
    public String toString(){
        String output = "billing name: " + this.billingName +
                ", billing address: " + this.billingAddress +
                ", customer name: " + this.customerName +
                ", email: " + this.email +
                ", card info: " +this.cardInfo +
                ", Product IDs: " + productIDs.toString() +
                ", Quantities: " + quantities.toString();
        return output;
    }
}
