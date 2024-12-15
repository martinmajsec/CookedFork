package org.example.service;

import org.example.entity.Category;
import org.example.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CategoryService extends Exception{


    private final CategoryRepository categoryRepository;


    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    public boolean deleteCategory(String id) {
        try {
            categoryRepository.deleteById(Long.getLong(id));
            return true;
        } catch (Exception e) {
            return false;
        }
        
    }

    public boolean addCategory(Category category){
        if(category != null){
            categoryRepository.save(category);
            return true;
        }

        return false;
        
    }

    /*public void sortCategories(){
        List<Category> categories = getCategories();
        Comparator<Category> c = Category.BY_NAME.thenComparing(Category.BY_ID);
        categories.sort(c);
        
    }
    */
}
