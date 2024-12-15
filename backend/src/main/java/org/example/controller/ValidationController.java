package org.example.controller;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.example.Application;
import org.example.entity.Category;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Key;

@RestController
@RequestMapping("/validate-session")
public class ValidationController {
    private static final Logger log = LoggerFactory.getLogger(Application.class);
    private static final String SECRET = "very-very-secure-high-risk-secret";
    private static final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());
    @PostMapping("")
    public ResponseEntity<?> validateSession(HttpServletRequest request) {
        // Check for the session cookie
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("jwt_token".equals(cookie.getName())) {
                    String jwt = cookie.getValue();
                    log.info("Valid: " + jwt);
                    try {
                        // Parse and validate JWT
                        Claims claims = Jwts.parserBuilder()
                                .setSigningKey(key)
                                .build()
                                .parseClaimsJws(jwt)
                                .getBody();

                        String email = claims.get("email", String.class);
                        log.info("JWT is valid. User email: " + email);

                        return ResponseEntity.ok("Session is valid for user: " + email);
                    } catch (Exception e) {
                        log.error("Invalid JWT: ", e);
                        return ResponseEntity.status(401).body("Invalid or expired session");
                    }
                }
            }
        }
        return ResponseEntity.status(401).body("Invalid or expired session");
    }
}
