package com.madj;

import java.util.List;

public class OrderJSONInformation {
    private String name;
    private String email;
    private String cardInfo;
    private List<Long> productIDs;
    private List<Integer> quantities;

    public OrderJSONInformation() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public List<Long> getProductIDs() {
        return productIDs;
    }

    public void setProductIDs(List<Long> productIDs) {
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
        String output = "name: " + this.name +
                ", email: " + this.email +
                ", card info: " +this.cardInfo +
                ", Product IDs: " + productIDs.toString() +
                ", Quantities: " + quantities.toString();
        return output;
    }
}
