package com.example.recipes_api;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.postgresql.util.PGobject;

import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;

@Entity
@Table(name = "recipes")
@TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cuisine;
    private String title;
    private Float rating;
    private Integer prep_time;
    private Integer cook_time;
    private Integer total_time;
    private String description;

    @Type(type = "jsonb")
    @Column(columnDefinition = "jsonb")
    private Map<String, Object> nutrients; // store as raw JSON string

    private String serves;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getCuisine() {
        return cuisine;
    }
    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public Float getRating() {
        return rating;
    }
    public void setRating(Float rating) {
        this.rating = rating;
    }
    public Integer getPrep_time() {
        return prep_time;
    }
    public void setPrep_time(Integer prep_time) {
        this.prep_time = prep_time;
    }
    public Integer getCook_time() {
        return cook_time;
    }
    public void setCook_time(Integer cook_time) {
        this.cook_time = cook_time;
    }
    public Integer getTotal_time() {
        return total_time;
    }
    public void setTotal_time(Integer total_time) {
        this.total_time = total_time;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Map<String, Object> getNutrients() {
        return nutrients;
    }
    public void setNutrients(Map<String, Object> nutrients) {
        this.nutrients = nutrients;
    }
    public String getServes() {
        return serves;
    }
    public void setServes(String serves) {
        this.serves = serves;
    }
    public Object getCalories() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCalories'");
    }
}
