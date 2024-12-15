package org.example.controller;

import jakarta.validation.Valid;
import org.example.Application;
import org.example.entity.Image;
import org.example.repository.ImageRepository;
import org.example.entity.Step;
import org.example.repository.StepRepository;
import org.example.service.StepService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/*
implemented:
get Step at GET /api/steps/{stepID}
testing feature: get all Steps from database at GET /api/steps
to be implemented:
create Step at POST /api/steps
update Step at PUT /api/steps/{stepID}
delete Step at DELETE /api/steps/{stepID}
get List of Images corresponding to Step at GET /api/steps/getImages/{stepID}
 */
/**
 * Controller for HTTP requests related to recipe categories.
 */
@RestController
@RequestMapping("/steps") // base path is /api/steps
public class StepController {
    private final StepRepository stepRepository;
    private final StepService stepService;
    private final ImageRepository imageRepository;
    private static final Logger log = LoggerFactory.getLogger(Application.class);

    // for internal testing purposes only
    @GetMapping("")
    List<Step> findAll() { // returns all recipes
        return stepRepository.findAll();
    }


    public StepController(StepRepository stepRepository, StepService stepService, ImageRepository imageRepository) {
        this.stepRepository = stepRepository;
        this.stepService = stepService;
        this.imageRepository = imageRepository;
    }

    @GetMapping("/{id}")
    Step findById(@PathVariable int id) {
        Optional<Step> step = stepRepository.findById(id);
        if (step.isEmpty()) { // recipe with that ID doesn't exist
            throw new RuntimeException(); // 404 NOT_FOUND
        }
        return step.get(); // .get() because recipe is Optional
    }

    // disable POST, PUT and DELETE requests for live demo as they are not yet implemented

    /*
    @PostMapping
    public ResponseEntity<Step> addStep(@RequestBody Step step) { // create step
        Step savedStep = stepRepository.save(step);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedStep);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStep(@PathVariable Integer id) { // delete step
        Optional<Step> step = stepRepository.findById(id);
        if (step.isPresent()) {
            stepRepository.delete(step.get());
            return ResponseEntity.noContent().build(); // 204 No Content (OK)
        }
        else { // recipe is not found
            return ResponseEntity.notFound().build(); // 404 NOT_FOUND
        }
    }


    // get all images for a specific step
    @GetMapping("/getImages/{stepId}")
    public ResponseEntity<List<Image>> getImagesByStep(@PathVariable int stepId) {
        List<Image> images = stepService.getImagesForStep(stepId);
        if (images.isEmpty()) {
            return ResponseEntity.noContent().build(); // No images found
        }
        return ResponseEntity.ok(images);
    }
    */
    /**
     * Updates Step number and/or description, depending on which is present in stepRequest.
     * @param stepRequest a Step with new step number and new step description.
     *                    If new step number is 0, the original step number won't be changed.
     *                    If step description is not set, i.e. it is null, the original step description won't be changed.
     * @param id step_id of the Step to update
     */
    /*
    @ResponseStatus(HttpStatus.NO_CONTENT)  // 204 No Content (OK)
    @PutMapping("/{id}")
    void update (@Valid @RequestBody Step stepRequest, @PathVariable int id) {
        // fetch the Step in stepRequest and save it instead of step with ID = {id}
        Optional<Step> step = stepRepository.findById(id);
        if (step.isPresent()) {
            Step newstep = step.get();
            if (stepRequest.getStep_number() != 0) {
                // change step_number
                newstep.setStep_number(stepRequest.getStep_number());
            }
            if (stepRequest.getStep_description() != null) {
                // change step description
                newstep.setStep_description(stepRequest.getStep_description());
            }
            stepRepository.save(newstep);
        }

    }
    */
}

