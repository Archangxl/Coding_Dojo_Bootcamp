package com.alex.authentication.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.alex.authentication.models.LoginUser;
import com.alex.authentication.models.User;
import com.alex.authentication.repositories.UserRepo;
    
@Service
public class UserService {
    
    @Autowired
    private UserRepo userRepo;
    
    // TO-DO: Write register and login methods!
    public User register(User newUser, BindingResult result) {
    	
    	String emailEntered = newUser.getEmail();
    	String passwordEntered = newUser.getPassword();
    	Optional<User> potentialUser = userRepo.findByEmail(emailEntered);
    	
    	if (potentialUser.isPresent()) {
    		return null;
    	}
    	if (!passwordEntered.equals(newUser.getConfirm())) {
    		result.rejectValue("confirm", "Passwords don't match", "The Confirm Password must match Password!");
    	}
    	if (result.hasErrors()) {
        	return null;
        }
    	String hashed = BCrypt.hashpw(passwordEntered, BCrypt.gensalt());
    	newUser.setPassword(hashed);
    	return userRepo.save(newUser);
    }
    public User login(LoginUser newLoginObject, BindingResult result) {

    	String emailEntered = newLoginObject.getEmailLogin();
    	String passwordEntered = newLoginObject.getPasswordLogin();
    	Optional<User> potentialUser = userRepo.findByEmail(emailEntered);

    	if (!potentialUser.isPresent()) {
            result.rejectValue("emailLogin", "Email Invalid", "Email is incorrect!");
    		return null;
    	}
    	if (result.hasErrors()) {
        	return null;
        }
    	
    	User user = potentialUser.get();

    	if (!BCrypt.checkpw(passwordEntered, user.getPassword())) {
    		result.rejectValue("passwordLogin", "Matches", "Invalid Password!");
    	}
    	return user;
    }
    
    public User findById(Long id) {
    	Optional<User> user = userRepo.findById(id);
    	if (user == null) {
    		return null;
    	}
    	return user.get();    	}
}

