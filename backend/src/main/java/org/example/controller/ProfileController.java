package org.example.controller;

import org.example.Application;
import org.example.entity.Profile;
import org.example.service.ProfileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
/*
fetch all profiles at GET /api/profiles
 */
/**
 * Controller for HTTP requests related to user profiles.
 */
@RestController
@RequestMapping("/profiles") // Base path is /api/profiles
public class ProfileController {

    private final ProfileService profileService;
    private static final Logger log = LoggerFactory.getLogger(Application.class);   // easier logging

    @Autowired
    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping
    public List<Profile> getAllProfiles() {
        log.info("running getAllProfiles...");
        return profileService.getProfiles();
    }
}