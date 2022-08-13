package com.madj;

import java.util.List;

public class OrderJSONInformation {
    private String billingName;
    private String billingAddress;
    private String customerName;
    private String email;
    private String cardInfo;
    private List<Integer> productIDs;
    private List<Integer> quantities;

    public OrderJSONInformation() {}
    public String getBillingName() {
        return billingName;
    }

    public void setBillingName(String billingName) {
        this.billingName = billingName;
    }

    public String getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(String billingAddress) {
        this.billingAddress = billingAddress;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCardInfo() {
        return cardInfo;
    }

    public void setCardInfo(String cardInfo) {
        this.cardInfo = cardInfo;
    }

    public List<Integer> getProductIDs() {
        return productIDs;
    }

    public void setProductIDs(List<Integer> productIDs) {
        this.productIDs = productIDs;
    }

    public List<Integer> getQuantities() {
        return quantities;
    }

    public void setQuantities(List<Integer> quantities) {
        this.quantities = quantities;
    }
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
