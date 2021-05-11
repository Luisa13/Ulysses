package com.luisa13.backendulysses.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.luisa13.backendulysses.model.Trip;
import com.luisa13.backendulysses.service.TripService;

@RestController
@RequestMapping("/trip")
public class TripController {
	
	@Autowired
	private TripService tripService;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Trip addTrip(@RequestBody Trip trip) {
		return this.tripService.addTrip(trip);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteTrip(@PathVariable Long id){
		HttpStatus response;
		try {
			this.tripService.deleteTripById(id);
			response = HttpStatus.OK;
		}catch(RuntimeException ex) {
			System.out.println(ex.getMessage());
			response = HttpStatus.NOT_FOUND;
		}
		
		return new ResponseEntity<String>(response);
	}
	
	@PostMapping("/updatetrip")
	public ResponseEntity<String> updateTrip(@RequestBody Trip trip){
		HttpStatus response;
		
		try {
			this.tripService.updateTrip(trip);
			response = HttpStatus.OK;
		}catch(RuntimeException ex) {
			System.out.println(ex.getMessage());
			response = HttpStatus.NOT_FOUND;
		}
		
		return new ResponseEntity<String>(response);
	}
	
	@GetMapping("/alltrips")
	public List<Trip> getAllTrip(){
		return this.tripService.getAllTrips();
	}

}
