package org.example.service;

import jakarta.annotation.PostConstruct;
import org.example.entity.IngredientSection;
import org.example.repository.IngredientSectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {

    private final IngredientSectionRepository ingredientSectionRepository;

    public IngredientService(IngredientSectionRepository ingredientSectionRepository) {
        this.ingredientSectionRepository = ingredientSectionRepository;
    }

    public List<IngredientSection> getIngredientsByRecipeId(Integer recipeId) {
        return ingredientSectionRepository.findIngredientSectionsWithIngredientsByRecipeId(recipeId);
    }
}
