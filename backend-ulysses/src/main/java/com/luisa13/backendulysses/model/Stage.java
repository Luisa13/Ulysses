package com.luisa13.backendulysses.model;

import java.util.Date;
import javax.persistence.*;

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
	
	@Column(name = "image")
	private byte[] image;
	
	@Column(name = "description")
	private String description;
	
	public Stage(String place, Date startDate, Date endDate) {
		this.place = place;
		this.startDate = startDate;
		this.endDate = endDate;
	}
	
	
}
