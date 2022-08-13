package com.madj;

import java.util.LinkedList;
import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
class ProductController {

    private final ProductRepository repository;

    public static ProductRepository globalRepository;

    ProductController(ProductRepository repository) {
        this.repository = repository;
        globalRepository = repository;
    }


    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping(value = "/products")
    List<Product> all(@RequestParam(required = false) String type) {
        if(type == null){
            return repository.findAll();
        }
        Product.ProductType selectedType;
        try{
             selectedType = Product.ProductType.valueOf(type);
        }
        catch(IllegalArgumentException e){
            throw new TypeNotFoundException(type);
        }
        List<Product> results = new LinkedList<Product>();
        for(Product p : repository.findAll()){
            if(p.getProductType() == selectedType){
                results.add(p);
            }
        }
        return results;
    }
    // end::get-aggregate-root[]

    // Single item

    @GetMapping("/products/{id}")
    Product one(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }
}