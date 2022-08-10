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
            log.info("Preloading " + repository.save(
                    new Product(24.32f, "Red Shirt", "A shirt that is red",
                    "12452@imgur.com", Product.ProductType.Shirt)));
            log.info("Preloading " + repository.save(
                    new Product(33.32f, "Blue Pants", "A pair of pants that are blue",
                    "82134@imgur.com", Product.ProductType.Pants)));
        };
    }
}