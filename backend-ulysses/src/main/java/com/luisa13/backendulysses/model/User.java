package com.luisa13.backendulysses.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
/**
 * This class represents a user in the system who can create trips
 * 
 * @author luisa
 * */

@Entity
@Table(name = "users")
public class User implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idUser")
	private Long id;
	@Column(name = "name")
	private String name;
	@Column(name = "surname")
	private String surname;
	@Column(name = "email")
	private String email;
	@Column(name = "password")
	private String password;
	@Column(name = "role")
	private String role;
	@ManyToMany
	Set<Trip> trips;
	
	public User() {}
	
	public User(String name, String surname, String email) {
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.trips = new HashSet<Trip>();
	}
	
	public Long getId() {
		return this.id;
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name; 
	}
	
	public String getSurname() {
		return this.surname;
	}
	
	public void setSurname(String surname) {
		this.surname = surname;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getEmail() {
		return this.email;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String  getPassword() {
		return this.password;
	}
	
	public void setRole(String role) {
		this.role = role;
	}
	
	public String getRole() {
		return this.role;
	}
	
	public Set<Trip> getTrips(){
		return this.trips;
	}
	
	public void setTrips(Set<Trip> trips) {
		this.trips = trips;
	}
	
	public void addTrip(Trip trip) {
		this.trips.add(trip);
	}
	
	@Override
	public String toString() {
		return "Name: " + this.name + "\nSurname: " + this.surname ;
		
	}
	
	public boolean equal(Object obj) {
		if(obj != null)
			return false;
		
		if(obj == this)
			return true;
		
		if(this.getClass() != obj.getClass())
			return false;
		
		User user = (User)obj;
		
		return this.id.equals(user.id) &&
				this.name.equals(user.name) &&
				this.surname.equals(user.surname) &&
				this.email.equals(user.email) &&
				this.password.equals(user.password) &&
				this.role.equals(user.role);
	}
	
	@Override
	public int hashCode() {
		int result = 11;
		if(this.id != null)
			result = 31 * result + this.id.hashCode();
		if(this.name != null)
			result = 31 * result + this.name.hashCode();
		if(this.surname != null)
			result = 31 * result + this.surname.hashCode();
		if(this.email != null)
			result = 31 * result + this.email.hashCode();
		if(this.password != null)
			result = 31 * result + this.password.hashCode();
		if(this.role != null)
			result = 31 * result + this.role.hashCode();
		
		return 11;
	}
	
	
}
