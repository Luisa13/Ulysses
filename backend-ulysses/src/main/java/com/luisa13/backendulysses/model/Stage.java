package com.luisa13.backendulysses.model;

import java.util.Date;
import javax.persistence.*;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * This class represents a stage within a specific trip.
 * 
 * @author luisa
 * */


@Entity
@Table(name = "stages")
public class Stage {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idStage")
	private Long id;
	
	@Column(name = "place")
	private String place;
	
	@Column(name = "startDate")
	private Date startDate;
	
	@Column(name = "endDate")
	private Date endDate;
	
	@Column(name = "accomodation") //NEW
	private String accomodation;
	
	@Column(name = "phone") //NEW
	private String phone;
	
	@Column(name = "email") //NEW
	private String email;
	
	@Column(name = "image", columnDefinition = "BINARY(100000)", length = 100000)
	private byte[] image;
	
	@Column(name = "description")
	private String description;
	
	//@ManyToOne(targetEntity =  Trip.class,  fetch = FetchType.LAZY)
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "idTrip")
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private Trip trip;
	
	public Stage() {}
	
	public Stage(String place, Trip trip) {
		this.place = place;
	}
	
	public Stage(String place, Date startDate, Date endDate) {
		this.place = place;
		this.startDate = startDate;
		this.endDate = endDate;
	}
	
	public Long getId() {
		return this.id;
	}
	
	public String getPlace() {
		return this.place;
	}
	
	public void setPlace(String place) {
		this.place = place;
	}
	
	public Date getStartDate() {
		return this.startDate;
	}
	
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	
	public Date getEndDate() {
		return this.endDate;
	}
	
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	
	public String getAccomodation(){
		return this.accomodation;
	}	
	
	public void setAccomodation(String accomodation) {
		this.accomodation = accomodation;
	}
	
	public String getPhone(){
		return this.phone;
	}	
	
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getEmail(){
		return this.email;
	}	
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public byte[] getImage() {
		return this.image;
	}
	
	public void setImage(byte[] image) {
		this.image = image;
	}
	
	public String getDescription() {
		return this.description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Trip getTrip() {
		return this.trip;
	}
	
	public void setTrip(Trip trip) {
		this.trip = trip;
	}
	
	@Override
	public boolean equals(Object obj) {
		if(obj == null)
			return false;
		
		if(obj == this)
			return true;
		
		if(this.getClass() != obj.getClass())
			return false;
		
		Stage stage = (Stage)obj;
		
		return this.id.equals(stage.id) &&
				this.place.equals(stage.place) &&
				this.startDate.equals(stage.startDate) &&
				this.endDate.equals(stage.endDate) &&
				this.image.equals(stage.image) &&
				this.description.equals(stage.description);
	}
	
	@Override
	public int hashCode() {
		int result = 11;
		
		if(this.id != null)
			result = 31 * result + this.id.hashCode();
		if(this.place != null)
			result = 31 * result + this.place.hashCode();
		if(this.startDate != null)
			result = 31 * result + this.startDate.hashCode();
		if(this.endDate != null)
			result = 31 * result + this.endDate.hashCode();
		if(this.image != null)
			result = 31 * result + this.image.hashCode();
		if(this.description != null)
			result = 31 * result + this.description.hashCode();
		
		
		
		return result;
	}
	
	
}
