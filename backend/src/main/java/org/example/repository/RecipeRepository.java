package org.example.repository;

import org.example.entity.Recipe;
import org.example.entity.Step;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface RecipeRepository extends ListCrudRepository<Recipe, String> {
// repository contains Recipes, ID is integer
List<Step> findStepsByRecipeId(int recipeId); // get steps for recipe with recipeId

}
