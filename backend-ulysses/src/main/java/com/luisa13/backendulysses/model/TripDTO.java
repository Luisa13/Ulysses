package com.luisa13.backendulysses.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


/**
 * This class is used to encapsulate Trip data and send it from the current system to the client.
 * The users are stored with their id in a list, to be searched afterwards and handle by the 
 * corresponding controller. 
 * 
 * @author luisa
 * */
public class TripDTO {
	
	private Long id;
	private String name;
	private Date date;
	private List<Long> usersId = new ArrayList<Long>();
	//private List<Stage> stages = new ArrayList<Stage>();
	

	public TripDTO(Long id, String name, Date date, List<Long> usersId) {
		this.setId(id);
		this.setName(name);
		this.setDate(date);
		this.setUsersId(usersId);
	}
	
	public Trip getTripClass() {
		
		Trip newTrip = new Trip(this.getName());
		newTrip.setDate(this.date);
		//newTrip.setStages(this.stages);
		
		return newTrip;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public List<Long> getUsersId() {
		return usersId;
	}


	public void setUsersId(List<Long> usersId) {
		this.usersId = usersId;
	}
	
	/*public List<Stage> getStages(){
		return this.stages;
	}
	
	public void setStage(List<Stage> stages) {
		this.stages = stages;
	}*/
	
}
