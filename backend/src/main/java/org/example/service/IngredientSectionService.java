package org.example.service;

import jakarta.annotation.PostConstruct;
import org.example.entity.IngredientSection;
import org.example.repository.IngredientSectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class IngredientSectionService {
    private final IngredientSectionRepository ingredientSectionRepository;

    @Autowired
    public IngredientSectionService(IngredientSectionRepository ingredientSectionRepository) { this.ingredientSectionRepository = ingredientSectionRepository; }

    public List<IngredientSection> getIngredientSections() { return ingredientSectionRepository.findAll(); }

    @PostConstruct
    public void logIngredientSections() {
        List<IngredientSection> sections = getIngredientSections();

        sections.forEach(section -> {
            System.out.println(section.toString());
        });
    }
}
