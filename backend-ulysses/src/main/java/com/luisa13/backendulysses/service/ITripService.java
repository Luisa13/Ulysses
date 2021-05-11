package com.luisa13.backendulysses.service;

import java.util.List;

import com.luisa13.backendulysses.model.Trip;

public interface ITripService {
	public Trip addTrip(Trip trip);
	public void deleteTrip(Trip trip);
	public void updateTrip(Trip trip);
	public Trip findTripById(Long id);
	public List<Trip> getAllTrips();
	
}
