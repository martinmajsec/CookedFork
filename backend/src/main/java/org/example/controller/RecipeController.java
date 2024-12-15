package org.example.controller;

import org.example.Application;
import org.example.entity.Category;
import org.example.entity.IngredientSection;
import org.example.entity.Recipe;
import org.example.repository.RecipeRepository;
import org.example.service.IngredientService;
import org.example.service.RecipeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/*
implemented:
fetch all recipes at GET /api/recipes
fetch a single recipe at GET /api/recipes/{recipeID}
testing feature: fetch recipe ingredients at GET /api/recipes/{recipeId}/ingredients
to be implemented:
create a recipe at POST /api/recipes
update a recipe at PUT /api/recipes/{recipeID}
delete a recipe at DELETE /api/recipes/{recipeID}
 */

@RestController
@RequestMapping("/recipes") // base path is /api/recipes
public class RecipeController {

    private static final Logger log = LoggerFactory.getLogger(Application.class);
    private final RecipeRepository recipeRepository;
    private final RecipeService recipeService;
    private final IngredientService ingredientService;

    public RecipeController (RecipeRepository recipeRepository, RecipeService recipeService, IngredientService ingredientService) {
        // Spring will inject the recipeRepo instead of creating a new one every time
        this.recipeRepository = recipeRepository;
        this.recipeService = recipeService;
        this.ingredientService = ingredientService;
    }
    @GetMapping("")
    List<Recipe> findAll() { // returns all recipes
        return recipeRepository.findAll();
    }

    @GetMapping("/{recipe_id}")
    Recipe findById(@PathVariable String recipe_id) {
        Recipe recipe = recipeRepository.findById(recipe_id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Recipe not found"));

        return recipe;
    }

    // expose an explicit endpoint for testing, it's currently unused
    @GetMapping("/{recipeId}/ingredients")
    public ResponseEntity<List<IngredientSection>> getIngredientsByRecipeId(@PathVariable Integer recipeId) {
        List<IngredientSection> ingredientSections = ingredientService.getIngredientsByRecipeId(recipeId);
        return ResponseEntity.ok(ingredientSections);
    }

     /*
    // doesn't work
    // throws Specified result type [org.example.entity.Step] did not match Query selection type [org.example.entity.Recipe] - multiple selections: use Tuple or array
    // TODO fix
    // get all steps for a specific recipe
    @GetMapping("/getSteps/{recipeId}")
    public ResponseEntity<List<Step>> getStepsByRecipe(@PathVariable Integer recipeId) {
        List<Step> steps = recipeService.getStepsForRecipe(recipeId);
        return ResponseEntity.ok(steps);
    }
    */

    // disable POST, PUT and DELETE requests for live demo as they are not yet implemented

    /*
    // use POST for creating
    @ResponseStatus(HttpStatus.CREATED) // notify the sender that the resource is created
    @PostMapping("")
    void create (@Valid @RequestBody Recipe recipeRequest) {
        Recipe recipe = new Recipe(recipeRequest.getTitle()); // assume new title is part of the request. Otherwise, 400 Bad Request is thrown
        recipeRepository.save(recipe);
    }

    // update = PUT
    @ResponseStatus(HttpStatus.NO_CONTENT) // inform the user what's going on
    @PutMapping("/{id}")
    void update (@Valid @RequestBody Recipe recipeRequest, @PathVariable String id) {
        // fetch the recipe information in recipeRequest and save it instead of recipe with ID = {id}
        Optional<Recipe> recipe = recipeRepository.findById(id);
        if (recipe.isPresent()) { // recipe exists
            Recipe newRecipe = recipe.get();
            System.out.println("updating " + recipe.get());
            newRecipe.setTitle(recipeRequest.getTitle()); // assume new title is part of the request. Otherwise, 400 Bad Request is thrown
            // update other parameters here
            System.out.println("saving edited " + newRecipe);
            recipeRepository.save(newRecipe);
        }
    }

    // delete = DELETE
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    ResponseEntity<Object> delete(@PathVariable String id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);
        if (recipe.isPresent()) {
            recipeRepository.delete(recipe.get());
            return ResponseEntity.noContent().build(); // 204 No Content (OK)
        }
        else { // recipe is not found
            return ResponseEntity.notFound().build(); // 404 NOT_FOUND
        }

    }
    */

}
