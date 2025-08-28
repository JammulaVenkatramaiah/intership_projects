package com.example.recipes_api;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {
    @Autowired
    private RecipeRepository repo;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllRecipes(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int limit
    ) {
        Pageable pageable = PageRequest.of(page - 1, limit, Sort.by("rating").descending());
        Page<Recipe> recipesPage = repo.findAll(pageable);

        Map<String, Object> resp = new LinkedHashMap<>();
        resp.put("page", page);
        resp.put("limit", limit);
        resp.put("total", recipesPage.getTotalElements());
        resp.put("data", recipesPage.getContent());
        return ResponseEntity.ok(resp);
    }

    // Simple custom search implementation (replace with actual DB queries as needed)
    private List<Recipe> customSearch(String title, String cuisine, Float rating, Integer total_time, Integer calories) {
        List<Recipe> allRecipes = repo.findAll();
        List<Recipe> filtered = new ArrayList<>();
        for (Recipe recipe : allRecipes) {
            boolean matches = true;
            if (title != null && !recipe.getTitle().toLowerCase().contains(title.toLowerCase())) {
                matches = false;
            }
            if (cuisine != null && !recipe.getCuisine().equalsIgnoreCase(cuisine)) {
                matches = false;
            }
            if (rating != null && (recipe.getRating() == null || recipe.getRating() < rating)) {
                matches = false;
            }
            if (total_time != null && (recipe.getTotal_time() == null || recipe.getTotal_time() > total_time)) {
                matches = false;
            }
            if (calories != null && (recipe.getCalories() == null || ((Integer) recipe.getCalories()) > calories)) {
                matches = false;
            }
            if (matches) {
                filtered.add(recipe);
            }
        }
        return filtered;
    }

    @GetMapping("/search")
public ResponseEntity<Map<String, Object>> searchRecipes(
    @RequestParam(required = false) String title,
    @RequestParam(required = false) String cuisine,
    @RequestParam(required = false) Float rating,
    @RequestParam(required = false) Integer total_time,
    @RequestParam(required = false) Integer calories
) {
    // Build dynamic specification or JPQL/Native Queries
    // For simplicity, filter in-memory or create custom specification methods in repository
    // For calories: native query: SELECT * FROM recipes WHERE nutrients->>'calories'::int <= ?

    List<Recipe> results = customSearch(title, cuisine, rating, total_time, calories);
    Map<String, Object> resp = new LinkedHashMap<>();
    resp.put("data", results);
    return ResponseEntity.ok(resp);
}

}
