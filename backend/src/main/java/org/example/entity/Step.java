package org.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

/**
 * Model of Step database table.
 * Each recipe can have multiple steps, and each step can have multiple images.
 * TODO limit the max allowed amount of images as an environment variable that admin can modify
 */
@Entity
public class Step {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "step_id", unique = true, nullable = false)
    private int stepId;

    @ManyToOne
    @JoinColumn(name = "recipe_id", nullable = false) // foreign key
    @JsonIgnore
    private Recipe recipe;

    @Column(name = "step_number", nullable = false)
    private int stepNumber;

    @Column(name = "step_description", nullable = false)
    private String stepDescription;

    // CascadeType.ALL any operation on parent entity will be cascaded to children
    // FetchType.LAZY don't load if you don't have to
    @OneToMany
    @JoinTable(name = "step_image", joinColumns = @JoinColumn(name = "step_id"), inverseJoinColumns = @JoinColumn(name = "image_id"))
    private List<Image> images; // A step can have multiple images

    // No-arg constructor required by JPA
    public Step() {
    }


    public int getStepId() {
        return stepId;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public int getStepNumber() {
        return stepNumber;
    }

    public void setStepNumber(int stepNumber) {
        this.stepNumber = stepNumber;
    }

    public String getStepDescription() {
        return stepDescription;
    }

    public void setStepDescription(String stepDescription) {
        this.stepDescription = stepDescription;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    @Override
    public String toString() {
        return "Step{" + "stepId=" + stepId + ", recipe=" + recipe + ", stepNumber=" + stepNumber + ", stepDescription='" + stepDescription + '\'' + ", images=" + images + '}';
    }
}
