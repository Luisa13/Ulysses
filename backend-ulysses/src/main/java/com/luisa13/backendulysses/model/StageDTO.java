package com.luisa13.backendulysses.model;

import java.util.Date;
import org.apache.tomcat.util.codec.binary.Base64;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class StageDTO {
	private Long id;
	private String place;
	private Date startDate;
	private Date endDate;
	private String imageBase64;
	private String description;
	private Trip trip;
	
	public StageDTO(Long id, String place, Date startDate, Date endDate, String description) {
		this.id = id;
		this.place = place;
		this.startDate = startDate;
		this.endDate = endDate;
		this.description = description;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public Long getId() {
		return this.id;
	}
	
	public void setPlace(String place) {
		this.place = place;
	}	
	
	public String getPlace() {
		return this.place;
	}
	
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	
	public Date getStartDate() {
		return this.startDate;
	}
	
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	
	public Date getEndDate() {
		return this.endDate; 
	}
	
	public void setImageBase64(String imageBase64) {
		this.imageBase64 = imageBase64;
	}
	
	public String getImageBase64() {
		return this.imageBase64;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getDescription() {
		return this.description;
	}

	public void setTrip(Trip trip) {
		this.trip = trip;
	}
	
	public Trip getTrip() {
		return trip;
	}
	
	@JsonIgnore
	public Stage getStageClass() {
		byte imageByte[]  = Base64.decodeBase64(this.imageBase64);
		Stage newStage = new Stage(this.place, this.startDate, this.endDate);
		newStage.setImage(imageByte);
		
		return newStage;
	}

	
	@Override
	public boolean equals(Object obj) {
		if(obj == null)
			return false;
		
		if(obj == this)
			return true;
		
		if(this.getClass() != obj.getClass())
			return false;
		
		StageDTO stage = (StageDTO)obj;
		
		return this.id.equals(stage.id) &&
				this.place.equals(stage.place) &&
				this.startDate.equals(stage.startDate) &&
				this.endDate.equals(stage.endDate) &&
				this.imageBase64.equals(stage.imageBase64) &&
				this.description.equals(stage.description);
	}
	
}
