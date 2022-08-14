package com.madj;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

@Configuration
class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
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