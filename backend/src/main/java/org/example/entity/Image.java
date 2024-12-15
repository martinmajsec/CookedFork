package org.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

/**
 * Model of Image database table.
 * Each step can have multiple images.
 * TODO add image gallery - images not associated with any particular step
 */
@Entity
public class Image {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id", unique = true, nullable = false)
    private Integer imageId;

    @ManyToOne
    @JoinColumn(name = "recipe_id", nullable = false) // foreign key, recipe that the image is part of
    @JsonIgnore
    private Recipe recipe;  // Reference to the associated Recipe

    @ManyToOne
    @JoinColumn(name = "step_id", insertable = false, updatable = false)
    @JsonIgnore
    private Step step; // Each image belongs to a step

    @Column(name = "image_path", unique = false, nullable = false)
    private String imagePath;

    @Column(name = "image_alt", unique = false, nullable = false) // image description
    private String imageDescription;


    public Image() {
    }


    public Integer getImageId() {
        return imageId;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getImageDescription() {
        return imageDescription;
    }

    public void setImageDescription(String imageDescription) {
        this.imageDescription = imageDescription;
    }
}