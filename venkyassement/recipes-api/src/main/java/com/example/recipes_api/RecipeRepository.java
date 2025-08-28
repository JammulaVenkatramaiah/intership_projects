package com.example.recipes_api;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    // Add custom methods for searching if needed
    Page<Recipe> findByTitleContainingIgnoreCase(String title, Pageable pageable);
    Page<Recipe> findByCuisine(String cuisine, Pageable pageable);
}
