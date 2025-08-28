// src/main/java/com/example/productapi/controller/ProductController.java
package com.example.product_api.controller;

import com.example.product_api.model.Product;
import com.example.product_api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * REST Controller for managing Product resources.
 * Handles HTTP requests and returns JSON responses.
 */
@RestController // Marks this class as a REST controller, combining @Controller and @ResponseBody.
@RequestMapping("/api/products") // Specifies the base path for all endpoints in this controller.
public class ProductController {

    @Autowired // Injects an instance of ProductRepository. Spring manages the lifecycle of this bean.
    private ProductRepository productRepository;

    /**
     * Creates a new product.
     * Maps POST requests to /api/products.
     *
     * @param product The product object received in the request body.
     * @return ResponseEntity containing the saved product and HTTP status 201 (Created).
     */
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product savedProduct = productRepository.save(product); // Save the product to the database.
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED); // Return the saved product with 201 status.
    }

    /**
     * Retrieves all products.
     * Maps GET requests to /api/products.
     *
     * @return ResponseEntity containing a list of all products and HTTP status 200 (OK).
     */
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productRepository.findAll(); // Retrieve all products from the database.
        return new ResponseEntity<>(products, HttpStatus.OK); // Return the list of products with 200 status.
    }

    /**
     * Retrieves a product by its ID.
     * Maps GET requests to /api/products/{id}.
     *
     * @param id The ID of the product to retrieve, extracted from the URL path.
     * @return ResponseEntity containing the product if found (200 OK), or 404 (Not Found) if not.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Optional<Product> product = productRepository.findById(id); // Attempt to find the product by ID.
        // Use Optional to handle cases where the product might not be found.
        return product.map(value -> new ResponseEntity<>(value, HttpStatus.OK)) // If present, return product with 200 OK.
                      .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND)); // If not present, return 404 Not Found.
    }

    /**
     * Updates an existing product.
     * Maps PUT requests to /api/products/{id}.
     *
     * @param id The ID of the product to update.
     * @param productDetails The updated product details received in the request body.
     * @return ResponseEntity containing the updated product if found (200 OK), or 404 (Not Found) if not.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Optional<Product> productOptional = productRepository.findById(id); // Find the existing product.

        if (productOptional.isPresent()) {
            Product existingProduct = productOptional.get();
            // Update the fields of the existing product with the new details.
            existingProduct.setName(productDetails.getName());
            existingProduct.setDescription(productDetails.getDescription());
            existingProduct.setPrice(productDetails.getPrice());
            existingProduct.setQuantity(productDetails.getQuantity());

            Product updatedProduct = productRepository.save(existingProduct); // Save the updated product.
            return new ResponseEntity<>(updatedProduct, HttpStatus.OK); // Return the updated product with 200 OK.
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Product not found, return 404.
        }
    }

    /**
     * Deletes a product by its ID.
     * Maps DELETE requests to /api/products/{id}.
     *
     * @param id The ID of the product to delete.
     * @return ResponseEntity with 204 (No Content) on successful deletion, or 500 (Internal Server Error) if an exception occurs.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteProduct(@PathVariable Long id) {
        try {
            productRepository.deleteById(id); // Delete the product by ID.
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // Return 204 No Content for successful deletion.
        } catch (Exception e) {
            // Log the exception for debugging purposes.
            System.err.println("Error deleting product with ID " + id + ": " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Return 500 if an error occurs.
        }
    }
}
