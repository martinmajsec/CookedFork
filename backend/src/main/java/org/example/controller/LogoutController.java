package org.example.controller;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/logout")
public class LogoutController {

    @PostMapping("")

    public ResponseEntity<?> logout(HttpSession session, HttpServletResponse response) {
        // Invalidate the session
        session.invalidate();
        // Remove the access token cookie
        Cookie cookie = new Cookie("jwt_token", null);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setMaxAge(0); // Expire the cookie immediately
        response.addCookie(cookie);

        return ResponseEntity.ok("Logged out successfully");
    }
}
