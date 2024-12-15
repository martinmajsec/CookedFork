package org.example.repository;

import org.example.entity.IngredientSection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientSectionRepository extends JpaRepository<IngredientSection, Long> {
    // find all IngredientSection entries for a recipe, along with the corresponding Ingredients
    @Query("SELECT is FROM IngredientSection is JOIN FETCH is.ingredients WHERE is.recipe.recipeId = :recipeId")
    List<IngredientSection> findIngredientSectionsWithIngredientsByRecipeId(@Param("recipeId") Integer recipeId);
}
