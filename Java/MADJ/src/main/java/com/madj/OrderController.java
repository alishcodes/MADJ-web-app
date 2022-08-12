package com.madj;

import java.util.HashMap;
import java.util.List;

public class OrderController {

   public void PostFunction(List<Long> products, List<Integer> quantities){
        HashMap<Long, Integer> orderProducts = new HashMap<>();
        for(int i = 0; i < products.size(); i++){
            orderProducts.put(products.get(i), quantities.get(i));
        }
    }
}
