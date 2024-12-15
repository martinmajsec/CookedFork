package org.example;

import org.example.repository.RecipeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

    private static final Logger log = LoggerFactory.getLogger(Application.class); // alternative to sysout

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
        log.info("Hello world!");
    }

    // Example of CommandLineRunner to ensure beans load properly
    @Bean
    public CommandLineRunner demo(RecipeRepository repository) {
        return (args) -> {
            // Run some logic at startup, if necessary
            log.info("Running startup logic...");
        };
    }

}
