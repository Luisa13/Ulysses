package com.luisa13.backendulysses;


import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;

import com.luisa13.backendulysses.model.Trip;
import com.luisa13.backendulysses.service.TripService;


@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@ComponentScan(basePackages = {"com.luisa13.backendulysses.service"})
class TripTest {

	@Autowired
	TripService tripService;
	
	@Test
	void testSaveTrip() {
		Trip trip = new Trip("Greek Holidays");
		Trip addedTrip = this.tripService.addTrip(trip);
		assertEquals(addedTrip, trip);
	}
	
	@Test
	void testFindTripThatExists() {
		Trip trip = new Trip("Kuala Lumpur");
		this.tripService.addTrip(trip);
		Trip foundTrip = this.tripService.findTripById(trip.getId());
		
		assertNotNull(foundTrip);
	}
	
	@Test
	void testGetAllTrips() {
		Trip trip1 = new Trip("Kuala Lumpur");
		Trip trip2 = new Trip("Greek Holidays");
		this.tripService.addTrip(trip1);
		this.tripService.addTrip(trip2);
		
		assertFalse(this.tripService.getAllTrips().isEmpty());
		
	}
	
	@Test
	void testDeleteTrip() {
		Trip trip1 = new Trip("Kuala Lumpur");
		this.tripService.addTrip(trip1);
		this.tripService.deleteTripById(trip1.getId());
		
		assertTrue(this.tripService.getAllTrips().isEmpty());
	}

}
