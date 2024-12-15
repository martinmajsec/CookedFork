package org.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Ingredients for one part of a recipe can be organized into Ingredient Sections.
 * E.g. when making a cake, you might want to separate the ingredients for the dough and for the fill.
 */
@Entity
public class IngredientSection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ingredient_section_id", unique = true, nullable = false)
    private Integer ingredientSectionId;

    @ManyToOne
    @JoinColumn(name = "recipe_id", nullable = false) // foreign key, the parent recipe
    @JsonIgnore     // don't return the recipe in JSON, creates an endless loop
    private Recipe recipe;

    @Column(name = "ingredient_section_name", unique = false, nullable = false)
    private String ingredientSectionName;

    @OneToMany(mappedBy = "ingredientSection", cascade = CascadeType.ALL)
    private List<Ingredient> ingredients = new ArrayList<>();

    public IngredientSection() {
    }

    public IngredientSection(Integer ingredientSectionId, Recipe recipe, String ingredientSectionName) {
        this.ingredientSectionId = ingredientSectionId;
        this.recipe = recipe;
        this.ingredientSectionName = ingredientSectionName;
    }

    public Integer getIngredientSectionId() {
        return ingredientSectionId;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public String getIngredientSectionName() {
        return ingredientSectionName;
    }

    public void setIngredientSectionName(String ingredientSectionName) {
        this.ingredientSectionName = ingredientSectionName;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    @Override
    public String toString() {
        return "IngredientSection{" + "ingredientSectionId=" + ingredientSectionId + ", recipeId=" + recipe.getRecipeId() + ", ingredientSectionName='" + ingredientSectionName + '\'' + '}';
    }
}
