package com.madj;
/**
 * Type not found runtime exception class.
 * @author  Jonathan Navarro
 * @author Mitchel Mercer
 * @version 1.0
 * @since 2022-08-10
 */
public class TypeNotFoundException extends RuntimeException {

    TypeNotFoundException(String type) {
        super("Could not find type " + type);
    }
}