package com.luisa13.backendulysses.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

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

	@OneToMany(mappedBy = "trip", orphanRemoval = true)
	private List<Stage>stages = new ArrayList<Stage>();
	
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
	
	public List<Stage> getStages(){
		return this.stages;
	}
	
	public void setStages(List<Stage> stages) {
		this.stages = stages;
	}
	
	
	@Override
	public boolean equals(Object o) {
		if(o == null)
			return false;
		
		if(o == this)
			return true;
		
		if(this.getClass() != o.getClass())
			return false;
		
		Trip trip = (Trip)o;
		return this.id.equals(trip.id) && 
				this.date.equals(trip.date) && 
				this.name.equals(trip.name) && 
				this.stages.equals(trip.stages) &&
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
		if(this.users != null)
			result = 31 * result + this.users.hashCode();
		if(this.stages != null)
			result = 31 * result + this.stages.hashCode();
				
		
		return result;
	}

}
