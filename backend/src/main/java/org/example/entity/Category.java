package org.example.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Model of Category database table.
 * Stores information about the category name and category_id.
 * Each recipe can belong to multiple categories, and each category can contain multiple recipes.
 */
@Entity
public class Category {

    @Id
    @GeneratedValue
    @Column(name = "category_id", unique = true, nullable = false)
    private Integer categoryId;

    @Column(name = "category_name", unique = true, nullable = false)
    private String categoryName;

    @ManyToMany(mappedBy = "categories")    // Recipe owns the relationship
    private List<Recipe> recipes = new ArrayList<>(); // all recipes inside that category, possibly zero

    // No-arg constructor required by JPA
    public Category() {
    }


    public Category(Integer categoryId, String category_name) {
        this.categoryId = categoryId;
        this.categoryName = category_name;
    }


    public Integer getCategoryId() {
        return categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }


    @Override
    public String toString() {
        return "Category{" + " categoryId='" + getCategoryId() + "'" + ", categoryName='" + getCategoryName() + "'" + "}";
    }


}
