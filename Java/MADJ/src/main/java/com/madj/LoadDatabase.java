package com.madj;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(ProductRepository repository) {

        return args -> {
            /* TODO
            *   Populate repository with GCloud DB instead
            * (To do this, all we have to do is create the products from the db values here using the GCloudConnector.
            * The existing HTTP and ProductRepository setup should function correctly as is) */

            log.info("Preloading " + repository.save(
                    new Product(24.32f, "Red Shirt", "A shirt that is red",
                    "12452@imgur.com", Product.ProductType.Tops)));
            log.info("Preloading " + repository.save(
                    new Product(33.32f, "Blue Pants", "A pair of pants that are blue",
                    "82134@imgur.com", Product.ProductType.Pants)));
            log.info("Preloading " + repository.save(
                    new Product(31.32f, "Green Shirt", "A shirt that's green",
                            "42134@imgur.com", Product.ProductType.Tops)));
            log.info("Preloading " + repository.save(
                    new Product(21.56f, "Orange Pants", "A pair of pants that are orange",
                            "962134@imgur.com", Product.ProductType.Pants)));
            log.info("Preloading " + repository.save(
                    new Product(42.99f, "White Shoes", "A pair of shoes that are white",
                            "35134@imgur.com", Product.ProductType.Shoes)));
        };
    }
}