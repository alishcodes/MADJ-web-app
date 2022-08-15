package com.madj;

/**
 * Product not found runtime exception class.
 * @author  Jonathan Navarro
 * @author Mitchel Mercer
 * @version 1.0
 * @since 2022-08-10
 */
public class ProductNotFoundException extends RuntimeException {

    ProductNotFoundException(int id) {
        super("Could not find product " + id);
    }
}