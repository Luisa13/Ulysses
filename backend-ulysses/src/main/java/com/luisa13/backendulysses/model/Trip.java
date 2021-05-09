package com.luisa13.backendulysses.model;

import java.util.Date;
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
	
	public Trip(String name) {
		this.name = name;
	}

}
