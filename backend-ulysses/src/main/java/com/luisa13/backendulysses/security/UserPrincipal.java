package com.luisa13.backendulysses.security;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

//import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.luisa13.backendulysses.model.User;

/**
 * Wrapper to be returned for UserDetailService. The info stored here is used to 
 * perform authentication and authorization.
 * 
 * */
public class UserPrincipal implements UserDetails{
	
	public UserPrincipal(Long id, String username, String email, String password, Collection<? extends GrantedAuthority> authorities) {
		
	}
	
	public static UserPrincipal create(User user) {
		List<GrantedAuthority> authorities = user.getRoles()
				.stream()
				.map(role -> new SimpleGrantedAuthority(role))
				.collect(Collectors.toList());
		
		return new UserPrincipal(
				user.getId(), 
				user.getName(), 
				user.getEmail(), 
				user.getPassword()
				user.getRoles()
				);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return false;
	}

}
