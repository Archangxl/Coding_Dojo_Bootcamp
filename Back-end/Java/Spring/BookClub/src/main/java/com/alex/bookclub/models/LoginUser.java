package com.alex.bookclub.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class LoginUser {
	@NotEmpty(message="Email is required!")
    @Email(message="Please enter a valid email!")
    private String emailLogin;
    
    @NotEmpty(message="Password is required!")
    @Size(min=8, message="Password must be at least 8 characters")
    private String passwordLogin;
    
    public LoginUser() {}

	public LoginUser(String emailLogin, String passwordLogin) {
		this.emailLogin = emailLogin;
		this.passwordLogin = passwordLogin;
	}

	public String getEmailLogin() {
		return emailLogin;
	}

	public void setEmailLogin(String emailLogin) {
		this.emailLogin = emailLogin;
	}

	public String getPasswordLogin() {
		return passwordLogin;
	}

	public void setPasswordLogin(String passwordLogin) {
		this.passwordLogin = passwordLogin;
	}
	
}
