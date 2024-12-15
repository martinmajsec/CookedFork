package org.example.repository;

import org.example.entity.Image;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends ListCrudRepository<Image, Integer> {}