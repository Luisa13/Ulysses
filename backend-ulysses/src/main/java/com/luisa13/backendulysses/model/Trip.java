package com.luisa13.backendulysses.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * This class represents a trip created by a user
 * 
 * @author luisa
 * */

@Entity
@Table(name = "trips")
public class Trip {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idTrip")
	private Long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "date")
	private Date date;
	
	@ManyToMany(mappedBy = "trips")
	private Set<User>users = new HashSet<User>();

	
	public Trip() {}
	
	public Trip(String name) {
		this.name = name;
	}

	public Long getId() {
		return this.id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public Date getDate() {
		return this.date;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}
	
	
	@Override
	public boolean equals(Object obj) {
		if(obj == null)
			return false;
		
		if(obj == this)
			return true;
		
		if(this.getClass() != obj.getClass())
			return false;
		
		Trip trip = (Trip)obj;
		return this.id.equals(trip.id) && 
				this.date.equals(trip.date) && 
				this.name.equals(trip.name) && 
				this.users.equals(trip.users);
	}
	
	@Override
	public int hashCode() {
		int result = 11;
		if(this.id != null) 
			result = 31 * result + this.id.hashCode();
		if(this.date != null)
			result = 31 * result + this.date.hashCode();
		if(this.name != null)
			result = 31 * result + this.name.hashCode();
				
		
		return result;
	}

}
