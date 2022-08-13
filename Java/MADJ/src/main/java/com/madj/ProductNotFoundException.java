package com.madj;

public class ProductNotFoundException extends RuntimeException {

    ProductNotFoundException(int id) {
        super("Could not find product " + id);
    }
}