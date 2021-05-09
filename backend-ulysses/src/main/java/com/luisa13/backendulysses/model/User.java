package com.luisa13.backendulysses.model;

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
	
	public User(String name, String surname) {
		this.name = name;
		this.surname = surname;
	}
	
	
}
