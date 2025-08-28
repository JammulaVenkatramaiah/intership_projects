package com.example.recipes_api;

import java.io.InputStream;
//import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.json.JsonReadFeature;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class RecipeImportService implements CommandLineRunner {
    @Autowired
    private RecipeRepository repository;


    @Override
    public void run(String... args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(JsonReadFeature.ALLOW_NON_NUMERIC_NUMBERS.mappedFeature(), true);
        TypeReference<Map<String, Map<String, Object>>> typeRef = new TypeReference<>() {};
        InputStream is = getClass().getClassLoader().getResourceAsStream("US_recipes.json");
        if( is == null ) throw new Exception("Resource not found");   
        Map<String, Map<String, Object>> recipeMap = mapper.readValue(is, typeRef);

        for(Map<String, Object> item : recipeMap.values()) {
            Recipe r = new Recipe();
            r.setTitle((String)item.get("title"));
            r.setCuisine((String)item.get("cuisine"));
            r.setDescription((String)item.get("description"));
            r.setServes((String)item.get("serves"));

            r.setRating(parseFloat(item.get("rating")));
            r.setPrep_time(parseInt(item.get("prep_time")));
            r.setCook_time(parseInt(item.get("cook_time")));
            r.setTotal_time(parseInt(item.get("total_time")));

           r.setNutrients((Map<String, Object>) item.get("nutrients"));

            repository.save(r);
        }
    }

    private Float parseFloat(Object value) {
        try {
            if (value == null || value.toString().equalsIgnoreCase("NaN")) return null;
            return Float.valueOf(value.toString());
        } catch (NumberFormatException e) { return null; }
    }
    private Integer parseInt(Object value) {
        try {
            if (value == null || value.toString().equalsIgnoreCase("NaN")) return null;
            return Integer.valueOf(value.toString());
        } catch (NumberFormatException e) { return null; }
    }
}
