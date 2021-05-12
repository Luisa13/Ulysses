package com.luisa13.backendulysses.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.luisa13.backendulysses.model.Trip;

@Service
public interface ITripService {
	public Trip addTrip(Trip trip);
	public void deleteTrip(Trip trip);
	public void deleteTripById(Long id);
	public void updateTrip(Trip trip);
	public Trip findTripById(Long id);
	public List<Trip> getAllTrips();
	
}
