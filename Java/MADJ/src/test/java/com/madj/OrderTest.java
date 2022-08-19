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
        products.put(new Product(0, 1234, "A blue shirt", "This shirt is blue",
                "123@imgur.com", Product.ProductType.Tops), 4);
        products.put(new Product(1, 2345, "Red pants", "These pants are red",
                "425@imgur.com", Product.ProductType.Pants), 3);

        order = new Order("Joe", "123 street", "Jack Nihoff",
                "example@gmail.com", "12345678", products);
    }
    @Test
    void getBillingName() {
        assertNotNull(order);
        assertNotNull(order.getBillingName());
        assertEquals("Joe", order.getBillingName());
    }

    @Test
    void getBillingAddress() {
        assertNotNull(order);
        assertNotNull(order.getBillingAddress());
        assertEquals("123 street", order.getBillingAddress());
    }

    @Test
    void getEmail() {
        assertNotNull(order);
        assertNotNull(order.getEmail());
        assertEquals("example@gmail.com", order.getEmail());
    }

    @Test
    void getCustomerName() {
        assertNotNull(order);
        assertNotNull(order.getCustomerName());
        assertEquals("Jack Nihoff", order.getCustomerName());
    }

    @Test
    void getCardInfo() {
        assertNotNull(order);
        assertNotNull(order.getCardInfo());
        assertEquals("12345678", order.getCardInfo());
    }

    @Test
    void getProductsInfo() {
        assertNotNull(order);
        assertNotNull(order.getProductsInfo());
        // check each ProductInformation variable in the list to see that they were generated correctly
        for(Order.ProductInformation p : order.getProductsInfo()){
            Product product= p.product;
            /* Assert sure products are equal to one another.
             * This works because we overrode Product.equals.
             */
            assertEquals(p.product, product);
            // Assert that quantities are equal to one another.
            switch (product.getId()){
                case 0:
                    assertEquals(4, p.quantity);
                    break;
                case 1:
                    assertEquals(3, p.quantity);
                    break;
                default:
                    fail("Index " + product.getId() + " is not expected");
            }
        }

    }

    @Test
    void getTotal() {
        assertNotNull(order);
        assertNotNull(order.getTotal());
        assertEquals((1234 * 4) + (2345 * 3), order.getTotal());
    }
}