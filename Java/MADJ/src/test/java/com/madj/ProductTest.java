package com.madj;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProductTest {
    Product product;
    @BeforeEach
    public void setUp(){
      product =  new Product(0, 1234, "A blue shirt", "This shirt is blue",
                "123@imgur.com", Product.ProductType.Tops);
    }

    @Test
    void getPrice() {
        assertEquals(1234,product.getPrice());
    }

    @Test
    void getTitle() {
        assertEquals("A blue shirt",product.getTitle());
    }

    @Test
    void getDesc() {
        assertEquals("This shirt is blue",product.getTitle());
    }

    @Test
    void getImg() {
        assertEquals("123@imgur.com",product.getTitle());
    }

    @Test
    void getProductType() {
        assertEquals(Product.ProductType.Tops,product.getProductType());
    }

    @Test
    void getId() {
        assertEquals(0,product.getId());
    }

    @Test
    void setTitle() {
        product.setTitle("Thisone");
        assertEquals("Thisone",product.getTitle());
    }

    @Test
    void setDesc() {
        product.setDesc("Thisone");
        assertEquals("Thisone",product.getDesc());
    }

    @Test
    void setImg() {
        product.setImg("456@imgur.com");
        assertEquals("456@imgur.com",product.getImg());
    }

    @Test
    void setPrice() {
        product.setPrice(555);
        assertEquals(555,product.getPrice());
    }

    @Test
    void setProductType() {
        product.setProductType(Product.ProductType.Pants);
        assertEquals(Product.ProductType.Pants,product.getProductType());
    }

    @Test
    void setId() {
        product.setId(55);
        assertEquals(55,product.getId());
    }

    @Test
    void testEquals() {
        Product product1;
        product1 =  new Product(44, 5678, "A red shirt", "This shirt is red",
                "456@imgur.com", Product.ProductType.Pants);
        assertEquals(product, product1);
    }

    @Test
    void testHashCode() {
        
    }

    @Test
    void testToString() {
    }
}