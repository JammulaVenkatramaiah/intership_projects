package com.example.product_api.repository;

import com.example.product_api.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for Product entities.
 * Extends JpaRepository to inherit standard CRUD operations.
 * JpaRepository<Product, Long> means it manages Product entities and their primary key is of type Long.
 */
@Repository // Marks this interface as a Spring Data repository, enabling component scanning.
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Spring Data JPA automatically provides implementations for common CRUD methods:
    // - save(Product product): Saves a product (creates if new, updates if existing).
    // - findById(Long id): Retrieves a product by its ID.
    // - findAll(): Retrieves all products.
    // - deleteById(Long id): Deletes a product by its ID.
    // You can also define custom query methods here, and Spring Data JPA will generate implementations.
}