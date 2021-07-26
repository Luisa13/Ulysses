package com.luisa13.backendulysses.security;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
//import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.luisa13.backendulysses.model.User;

/**
 * Wrapper to be returned for UserDetailService. The info stored here is used to 
 * perform authentication and authorization.
 * 
 * */
public class UserPrincipal implements UserDetails{
	
	
	private User user;
	
	public UserPrincipal(User user) {
		this.user = user;
	}

	
	public String getEmail() {
		return this.user.getEmail();
	}
	
	public Long getId() {
		return this.user.getId();
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		SimpleGrantedAuthority authority = new SimpleGrantedAuthority(this.user.getRole());
        return Arrays.asList(authority);
	}

	@Override
	public String getPassword() {
		final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String password = passwordEncoder.encode(this.user.getPassword());
		return password;
	}

	@Override
	public String getUsername() {
		return this.user.getName();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
