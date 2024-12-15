package org.example.controller;

import jakarta.validation.Valid;
import org.example.Application;
import org.example.entity.Image;
import org.example.repository.ImageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/*
implemented:
fetch a single image at GET /api/image/{imageID}
testing feature: fetch al images at GET /api/images
to be implemented:
create an image at POST /api/images
update an image at PUT /api/images/{imageID}
delete an image at DELETE /api/images/{imageID}
 */
/**
 * Controller for HTTP requests related to Image objects that belong to a recipe.
 */
@RestController
@RequestMapping("/images") // base path is api/images
public class ImageController {

    private final ImageRepository imageRepository;
    private static final Logger log = LoggerFactory.getLogger(Application.class);

    // for testing only
    @GetMapping("")
    List<Image> findAll() { // returns all recipes
        return imageRepository.findAll();
    }

    @Autowired
    public ImageController(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }


    /**
     * Handles a GET request to fetch an Image object by its ID, which is retrieved from the path.
     * If the image with that ID is not found, the method throws a Runtime Exception.
     * In that case, the user will see a 404 NOT_FOUND response.
     * @param id the ID of the wanted image
     * @return the image with that ID
     * @throws RuntimeException if there's no image with that ID
     */
    @GetMapping("/{id}")
    Image findById(@PathVariable Integer id) { // get image by image_id
        log.info("ulazim u get image by id " + id);
        Optional<Image> image = imageRepository.findById(id);
        if (image.isEmpty()) { // image with that ID doesn't exist
            log.info("image is empty");
            throw new RuntimeException(); // 404 NOT_FOUND
        }
        log.info("image is not empty");
        return image.get(); // .get() because recipe is Optional
    }


    // disable POST, PUT and DELETE requests for live demo as they are not yet implemented

    /*
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteImage(@PathVariable Integer id) { // delete image
        Optional<Image> image = imageRepository.findById(id);
        if (image.isPresent()) {
            imageRepository.delete(image.get());
            return ResponseEntity.noContent().build(); // 204 No Content (OK)
        }
        else { // recipe is not found
            return ResponseEntity.notFound().build(); // 404 NOT_FOUND
        }
    }


    @PostMapping
    public ResponseEntity<Image> addImage(@RequestBody Image image) { // create image
        Image savedImage = imageRepository.save(image);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedImage);
    }
    */

    /**
     * Update an image by setting a new image path and/or alternative path.
     */
    /*
    // update an image at PUT /api/images/{imageID}
    @ResponseStatus(HttpStatus.NO_CONTENT)  // 204 No Content (OK)
    @PutMapping("/{id}")
    void update (@Valid @RequestBody Image imageRequest, @PathVariable Integer id) {
        // the request gets converted to an Image object
        // fetch the Image in recipeRequest and save it instead of image with ID = {id}
        Optional<Image> image = imageRepository.findById(id);
        if (image.isPresent()) { // recipe exists
            Image newImage = image.get();
            log.info("changing image path from " + image.get().getImage_path() + " to " + newImage.getImage_path());
            newImage.setImage_path(imageRequest.getImage_path());
            if (imageRequest.getImage_alt() != null) {
                newImage.setImage_alt(imageRequest.getImage_alt());
                log.info("changing alt image path from " + image.get().getImage_path() + " to " + newImage.getImage_path());
            }
            imageRepository.save(newImage);
        }
    }
     */
}

/*
get image at GET /api/images/imageID
create an image at POST /api/images
update an image at PUT /api/images/{imageID}
delete a recipe at DELETE /api/images/{imageID}
 */