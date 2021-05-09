package com.luisa13.backendulysses.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idUser")
	private Long id;
	@Column(name = "name")
	private String name;
	@Column(name = "surname")
	private String surname;
	@ManyToMany
	Set<Trip> trips;
	
	public User(String name, String surname) {
		this.name = name;
		this.surname = surname;
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
	
	public Set<Trip> getTrips(){
		return this.trips;
	}
	
	public void setTrips(Set<Trip> trips) {
		this.trips = trips;
	}
	
	public void addTrip(Trip trip) {
		this.trips.add(trip);
	}
	
	
}
