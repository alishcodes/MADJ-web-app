package com.madj;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 * JPA product repository for server's local H2 database. Products are mapped to Integer id.
 * @author  Jonathan Navarro
 * @author Mitchel Mercer
 * @version 1.0
 * @since 2022-08-10
 * @see JpaRepository
 */
public interface ProductRepository extends JpaRepository<Product, Integer>  {
}
