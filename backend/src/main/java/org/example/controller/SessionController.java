package org.example.controller;


import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

import jakarta.servlet.http.HttpSession;
import org.example.Application;
import org.example.entity.Category;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/session")
public class SessionController {

    private static final Logger log = LoggerFactory.getLogger(Application.class);
    private static final long EXPIRATION_TIME = 30 * 60 * 1000;
    private static final String SECRET = "very-very-secure-high-risk-secret";
    private static final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());
    @PostMapping("")
    public ResponseEntity<?> createSession(@RequestBody Map<String, Object> request, HttpServletResponse response, HttpSession session) {
        log.info("entered session POST");
        String accessToken = (String) request.get("access_token");
        Map<String, Object> userInfo = (Map<String, Object>) request.get("userInfo");
        log.info("userinfo "+ userInfo.get("data"));
        if (accessToken == null || userInfo == null) {
            return ResponseEntity.badRequest().body("Invalid request");
        }
        Map<String, Object> data = (Map<String, Object>) userInfo.get("data");
        log.info("data "+ data);
        if (data == null) {
            return ResponseEntity.badRequest().body("Missing user data in request");
        }
        // TODO validate access token
        // Process user info (e.g., save to database, create a session, etc.)
        String email = (String) data.get("email");
        String name = (String) userInfo.get("name");
        log.info("User email = " + email);
        log.info("User name = " + name);
        // Example response
        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("message", "Session created successfully");
        responseBody.put("email", email);
        responseBody.put("name", name);
        // save information to session
        session.setAttribute("email", email);
        session.setAttribute("name", name);
        session.setAttribute("access_token", accessToken);

        String jwt = Jwts.builder()
                .setSubject(email)
                .claim("email", email)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
        log.info("Session: " + jwt);
        // Create a cookie to store in the response
        Cookie cookie = new Cookie("jwt_token", jwt); // Store the access token in a cookie
        cookie.setHttpOnly(true);  // Make the cookie HttpOnly for security
        cookie.setSecure(true);    // use HTTPS
        cookie.setPath("/");       // make cookie accessible from all endpoints
        cookie.setMaxAge(30 * 60);  // 30 minutes, TODO fetch session timeout from environment variable

        // Add the cookie to the response
        response.addCookie(cookie);
        return ResponseEntity.ok(responseBody);
    }

}