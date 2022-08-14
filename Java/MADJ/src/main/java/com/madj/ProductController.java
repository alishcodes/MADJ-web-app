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

    /**
     * Get list of products method, mapped to /api/products.
     * @param type Optional type parameter to search for all products of a type instead.
     * @return List of products from server's local H2 database.
     */
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

    /**
     * Get single product by id, mapped to /api/products/{id}
     * @param id The id to search for.
     * @return Product requested, if it exists.
     */
    @GetMapping("/products/{id}")
    Product one(@PathVariable int id) {

        return repository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }
}