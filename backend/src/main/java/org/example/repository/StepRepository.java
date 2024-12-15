package org.example.repository;


import org.example.entity.Image;
import org.example.entity.Step;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StepRepository extends ListCrudRepository<Step, Integer> {

    List<Image> findImagesByStepId(int stepId); // get images for step with stepId

}
