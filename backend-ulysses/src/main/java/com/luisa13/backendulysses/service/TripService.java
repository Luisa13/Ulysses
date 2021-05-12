package com.luisa13.backendulysses.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.luisa13.backendulysses.model.Trip;
import com.luisa13.backendulysses.repository.TripRepository;

@Component
public class TripService implements ITripService{
	
	@Autowired
	TripRepository tripRepo;

	@Override
	public Trip addTrip(Trip trip) {
		return this.tripRepo.save(trip);
	}

	@Override
	public void deleteTrip(Trip trip) {
		this.tripRepo.delete(trip);
	}

	@Override
	public void updateTrip(Trip trip) {
		this.tripRepo.findById(trip.getId()).orElseThrow();
		this.tripRepo.save(trip);
	}

	@Override
	public Trip findTripById(Long id) {
		return this.tripRepo.findById(id).get();
	}

	@Override
	public List<Trip> getAllTrips() {
		return this.tripRepo.findAll();
	}

	@Override
	public void deleteTripById(Long id) {
		this.tripRepo.deleteById(id);
		
	}

}
