package org.example.controller;

import org.example.Application;
import org.example.entity.Category;
import org.example.service.CategoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/*
fetch all recipe categories at GET /api/profiles
 */
/**
 * Controller for HTTP requests related to recipe categories.
 */
@RestController
@RequestMapping("/categories") // Base path is /api/categories

public class CategoryController {
    private final CategoryService categoryService;
    private static final Logger log = LoggerFactory.getLogger(Application.class);

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public List<Category> getAllCategories() {
        log.info("running getAllCategories...");
        return categoryService.getCategories();
    }
}
