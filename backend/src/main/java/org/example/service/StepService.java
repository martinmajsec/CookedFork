package org.example.service;

import org.example.entity.Image;
import org.example.repository.StepRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StepService {

    private final StepRepository stepRepository;

    @Autowired
    public StepService(StepRepository stepRepository) {
        this.stepRepository = stepRepository;
    }

    // Fetches all images for a given step
    public List<Image> getImagesForStep(int stepId) {
        return stepRepository.findImagesByStepId(stepId);
    }
}