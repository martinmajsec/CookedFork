package org.example.service;

import org.example.entity.Image;
import org.example.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {

    private final ImageRepository imageRepository;


    @Autowired
    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
//        this.fieldLengthValidator = new FieldLengthValidator();
    }

    public Image saveImage(Image image) {
        // validateImageFields(image.getImage_path(), image.getImage_alt());
        return imageRepository.save(image);
    }

    public void deleteImage(Integer image_id) {
        imageRepository.deleteById(image_id);
    }


    // add validation here


}