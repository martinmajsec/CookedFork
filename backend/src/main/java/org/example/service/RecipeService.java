package org.example.service;

import org.example.entity.Step;
import org.example.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    private final RecipeRepository RecipeRepository;
    @Autowired
    public RecipeService(org.example.repository.RecipeRepository recipeRepository) {
        RecipeRepository = recipeRepository;
    }

    public List<Step> getStepsForRecipe(int recipeId) {
        return RecipeRepository.findStepsByRecipeId(recipeId);
    }
}
