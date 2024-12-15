package org.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

/**
 * Models recipe ingredients.
 * A recipe can have multiple ingredients.
 */
@Entity
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ingredient_id", unique = true, nullable = false)
    private Integer ingredientId;

    @ManyToOne
    @JoinColumn(name = "ingredient_section_id", nullable = false) // foreign key
    @JsonIgnore
    private IngredientSection ingredientSection;

    @ManyToOne
    @JoinColumn(name = "measurement_units_id", nullable = false) // foreign key
    private MeasurementUnit measurementUnit;

    @Column(name = "food_id", unique = false, nullable = false)
    private Integer foodId;

    @Column(name = "food_name", unique = false, nullable = false)
    private String foodName;

    @Column(name = "amount", unique = false, nullable = false)
    private Integer amount;

    public Ingredient() {

    }

    public Integer getIngredientId() {
        return ingredientId;
    }

    public IngredientSection getIngredientSection() {
        return ingredientSection;
    }

    public void setIngredientSection(IngredientSection ingredientSection) {
        this.ingredientSection = ingredientSection;
    }

    public MeasurementUnit getMeasurementUnit() {
        return measurementUnit;
    }

    public void setMeasurementUnit(MeasurementUnit measurementUnit) {
        this.measurementUnit = measurementUnit;
    }

    public Integer getFoodId() {
        return foodId;
    }

    public void setFoodId(Integer foodId) { // this setter is ok as foodId is not a primary key
        this.foodId = foodId;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }
}
