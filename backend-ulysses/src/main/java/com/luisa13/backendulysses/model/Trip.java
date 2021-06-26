package com.luisa13.backendulysses.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "trips")
public class Trip {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idTrip")
	Long id;
	
	@Column(name = "name")
	String name;
	
	@Column(name = "date")
	Date date;
	
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

}
