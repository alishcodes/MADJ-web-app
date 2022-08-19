package com.madj;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.*;

class OrderTest {

    Order order;
    @BeforeEach
    void setUp(){
        HashMap<Product, Integer> products = new HashMap<Product, Integer>();
        //TODO feed products fake Product instances

        order = new Order("Joe", "123 street", "Jack Nihoff",
                "example@gmail.com", "12345678", products);
    }
    @Test
    void getBillingName() {
        assertEquals("Joe", order.getBillingName());
    }

    @Test
    void getBillingAddress() {
        assertEquals("123 street", order.getBillingAddress());
    }

    @Test
    void getEmail() {
        assertEquals("example@gmail.com", order.getEmail());
    }

    @Test
    void getCustomerName() {
        assertEquals("Jack Nihoff", order.getCustomerName());
    }

    @Test
    void getCardInfo() {
        assertEquals("12345678", order.getCardInfo());
    }

    @Test
    void getProductsInfo() {
        // TODO implement this
    }

    @Test
    void getTotal() {
        // TODO implement this
    }
}