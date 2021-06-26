package com.luisa13.backendulysses.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
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
	
	private Long id;
	private String username;
	private String email;
	private String password;
	private Collection<? extends GrantedAuthority> authorities;
	
	
	public UserPrincipal(Long id, String username, String email, String password, Collection<? extends GrantedAuthority> authorities) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.authorities = authorities;
	}
	
	public static UserPrincipal create(User user) {
		List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
	    authorities.add(new SimpleGrantedAuthority(user.getRole()));
		
		return new UserPrincipal(
				user.getId(), 
				user.getName(), 
				user.getEmail(), 
				user.getPassword(),
				authorities
				);
	}
	public String getEmail() {
		return this.email;
	}
	
	public Long getId() {
		return this.id;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.authorities;
	}

	@Override
	public String getPassword() {
		return this.password;
	}

	@Override
	public String getUsername() {
		return this.username;
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
