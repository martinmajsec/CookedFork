package org.example.entity;


import jakarta.persistence.*;


import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
/**
 * Model of Recipe database table.
 * Each recipe can belong to multiple categories, and each category can contain multiple recipes.
 * A recipe can have multiple steps, see {@link Step}.
 * A recipe also contains multiple ingredients, see {@link Ingredient}.
 * TODO add recipe tags, rating, event, image gallery
 */
@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipe_id", unique = true, nullable = false)
    private Integer recipeId;

    @ManyToOne
    @JoinColumn(name = "profile_id", nullable = false) // foreign key
    private Profile profile;    // Recipe author

    @Column(name = "thumbnail", unique = false, nullable = false)
    private String thumbnail;

    @Column(name = "title", unique = true, nullable = false)
    private String title;

    @Column(name = "description", nullable = true, columnDefinition = "TEXT")
    private String description;

    @Column(name = "servings_count", nullable = false)
    private Integer servingsCount; // mozda promijeniti u small int

    @Column(name = "time", nullable = true)
    private Integer time; // isto promijeniti u small int

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Step> steps;

    @Column(name = "how_to_serve", nullable = true)
    private String howToServe;

    @Column(name = "advice", nullable = true)
    private String advice;

    @Column(name = "is_private", nullable = false)
    private Boolean isPrivate = false;

    @Column(name = "deleted_at", nullable = true)
    private Date deletedAt = null;

    // contains the recipe's ingredients organized in ingredient sections
    // TODO add orphanRemoval=true -> if ingredient section is removed from the recipe, JPA will delete it from the database
    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL)
    private List<IngredientSection> ingredientSections = new ArrayList<>();


    @ManyToMany
    @JoinTable(name = "recipe_category", joinColumns = @JoinColumn(name = "recipe_id"), inverseJoinColumns = @JoinColumn(name = "category_id"))
    private List<Category> categories = new ArrayList<>(); // all categories the recipe is part of, possibly zero

    // No-arg constructor required by JPA
    protected Recipe() {
    }

    // Main constructor
    public Recipe(String title) {
        this.title = title;
    }


    public List<IngredientSection> getIngredientSections() {
        return ingredientSections;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public void setIngredientSections(List<IngredientSection> ingredientSections) {
        this.ingredientSections = ingredientSections;
    }

    public Integer getRecipeId() {
        return recipeId;
    }


    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getServingsCount() {
        return servingsCount;
    }

    public void setServingsCount(Integer servingsCount) {
        this.servingsCount = servingsCount;
    }

    public Integer getTime() {
        return time;
    }

    public void setTime(Integer time) {
        this.time = time;
    }

    public List<Step> getSteps() {
        return steps;
    }

    public void setSteps(List<Step> steps) {
        this.steps = steps;
    }

    public String getHowToServe() {
        return howToServe;
    }

    public void setHowToServe(String howToServe) {
        this.howToServe = howToServe;
    }

    public String getAdvice() {
        return advice;
    }

    public void setAdvice(String advice) {
        this.advice = advice;
    }

    public Boolean getPrivate() {
        return isPrivate;
    }

    public void setPrivate(Boolean aPrivate) {
        isPrivate = aPrivate;
    }

    public Date getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt(Date deletedAt) {
        this.deletedAt = deletedAt;
    }

    @Override
    public String toString() {
        return "Recipe | ID: " + recipeId + ", Title: " + title + " |";
    }
}
