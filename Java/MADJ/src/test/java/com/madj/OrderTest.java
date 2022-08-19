package com.madj;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.util.Assert;

import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.*;

class OrderTest {

    Order order;
    @BeforeEach
    void setUp(){
        HashMap<Product, Integer> products = new HashMap<Product, Integer>();
        // TODO feed order some more fake Product instances and update orderTotal assertion accordingly
        products.put(new Product(0, 1234, "A blue shirt", "This shirt is blue",
                "123@imgur.com", Product.ProductType.Tops), 4);
        products.put(new Product(1, 2345, "Red pants", "These pants are red",
                "425@imgur.com", Product.ProductType.Pants), 3);

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
        // check each ProductInformation variable in the list to see that they were generated correctly
        for(Order.ProductInformation prod : order.getProductsInfo()){
            switch (prod.id){
                case 0:
                    assertEquals(0, prod.id);
                    assertEquals(4, prod.quantity);
                    assertEquals(1234, prod.price);
                    assertEquals("A blue shirt", prod.title);
                    assertEquals("This shirt is blue", prod.desc);
                    assertEquals("123@imgur.com", prod.img);
                    break;
                case 1:
                    assertEquals(1, prod.id);
                    assertEquals(3, prod.quantity);
                    assertEquals(2345, prod.price);
                    assertEquals("Red pants", prod.title);
                    assertEquals("These pants are red", prod.desc);
                    assertEquals("425@imgur.com", prod.img);
                    break;
                default:
                    fail("Index " + prod.id + " is not expected");
            }
        }

    }

    @Test
    void getTotal() {
        assertEquals((1234 * 4) + (2345 * 3), order.getTotal());
    }
}