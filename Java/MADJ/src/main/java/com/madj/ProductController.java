package com.madj;

import java.util.LinkedList;
import java.util.List;

import org.springframework.web.bind.annotation.*;
/**
 * Rest controller for products to handle front-end and back-end connection. All methods are mapped to <b>/api</b>.
 * @author  Jonathan Navarro
 * @author Mitchel Mercer
 * @version 1.0
 * @since 2022-08-11
 * @see Product
 * @see RestController
 */
@RestController
@RequestMapping("/api")
public class ProductController {

    private final ProductRepository repository;

    /**
     * The product repository in the local H2 database. This is a snapshot of the Google Cloud MySQL database taken when the server starts.
     */
    public static ProductRepository globalRepository;

    /**
     * Product controller constructor. Used in Spring Boot automation.
     * @param repository The product repository in the local H2 database.
     */
    ProductController(ProductRepository repository) {
        this.repository = repository;
        globalRepository = repository;
    }

    /**
     * Get list of products method, mapped to <b>/api/products</b>. Called from api using GET request.
     * @param type Optional type parameter to search for all products of a type instead. Included as a parameter in the request's path/url.
     * @return List of products from server's local H2 database.
     */
    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping(value = "/products")
    List<Product> all(@RequestParam(required = false) String type) {
        // If no type is specified, then just get all the products
        if(type == null){
            return repository.findAll();
        }
        // Check if the type in the argument is valid
        Product.ProductType selectedType;
        try{
             selectedType = Product.ProductType.valueOf(type);
        }
        catch(IllegalArgumentException e){
            throw new TypeNotFoundException(type);
        }
        // Find the products that are the specified type
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
     * Get single product by id, mapped to <b>/api/products/{id}</b>. Called from api using GET request.
     * @param id The id to search for. Included in the request's path/url.
     * @return Product requested, if it exists.
     */
    @GetMapping("/products/{id}")
    Product one(@PathVariable int id) {

        return repository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }
}