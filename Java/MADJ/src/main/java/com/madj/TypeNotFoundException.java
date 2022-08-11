package com.madj;

public class TypeNotFoundException extends RuntimeException {

    TypeNotFoundException(String type) {
        super("Could not find type " + type);
    }
}