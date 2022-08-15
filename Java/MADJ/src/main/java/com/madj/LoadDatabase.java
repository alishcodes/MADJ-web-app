package com.madj;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
/**
 * Spring Boot configuration for loading local H2 database with Google Cloud database values.
 * @author  Jonathan Navarro
 * @author Mitchel Mercer
 * @version 1.0
 * @since 2022-08-10
 */
@Configuration
class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    /**
     * Method to initialize database. Loads the values from Google Cloud database into the local H2 product repository. Called automatically when the server starts.
     * @param repository The server's local H2 product repository.
     * @return Code to run on server boot.
     * @see Product
     * @see ProductRepository
     * @see GCloudConnector
     */
    @Bean
    CommandLineRunner initDatabase(ProductRepository repository) {

        return args -> {
            Connection conn = GCloudConnector.getInstance().connection;

            String query = "SELECT * FROM products";
            Statement statement = conn.createStatement();

            ResultSet rs = statement.executeQuery(query);
            while (rs.next()) {
                String productName = rs.getString("name");
                int id = rs.getInt("product_id");
                int productId = rs.getInt("product_id");
                int price = rs.getInt("price");
                String description = rs.getString("description");
                int type = rs.getInt("type");
                String img = rs.getString("img");
                log.info("Preloading " + repository.save(
                        new Product(id,
                                price,
                                productName,
                                description,
                                img,
                                Product.ProductType.values()[type])));
            }
        };
    }
}