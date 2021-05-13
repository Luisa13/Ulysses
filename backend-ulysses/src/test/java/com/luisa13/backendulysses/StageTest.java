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

import com.luisa13.backendulysses.model.Stage;
import com.luisa13.backendulysses.model.Trip;
import com.luisa13.backendulysses.service.StageService;
import com.luisa13.backendulysses.service.TripService;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@ComponentScan(basePackages = {"com.luisa13.backendulysses.service"})
class StageTest {

	@Autowired
	StageService stageService;
	@Autowired
	TripService tripService;
	
	@Test
	void tesSaveStage() {
		Trip trip = new Trip("Italy - 2020");
		tripService.addTrip(trip);
		Stage stage = new Stage("firstStop", trip);
		Stage addedStage = stageService.addStage(stage);
		
		assertEquals(stage, addedStage);
	}
	
	@Test
	void findStage() {
		Trip trip = new Trip("Italy - 2020");
		tripService.addTrip(trip);
		Stage stage1 = new Stage("firstStop", trip);
		stageService.addStage(stage1);
		Stage stage2 = new Stage("secondStop", trip);
		stageService.addStage(stage2);
		
		Stage stage = stageService.findById(stage1.getId());
		assertNotNull(stage);
	}
	
	@Test
	void getAllStages() {
		Trip trip = new Trip("Italy - 2020");
		tripService.addTrip(trip);
		Stage stage1 = new Stage("firstStop", trip);
		stageService.addStage(stage1);
		Stage stage2 = new Stage("secondStop", trip);
		stageService.addStage(stage2);
		
		assertFalse(stageService.getAllStages().isEmpty());
	}
	
	@Test
	void deleteStage() {
		Trip trip = new Trip("Spain - 2020");
		tripService.addTrip(trip);
		Stage stage1 = new Stage("firstStop", trip);
		stageService.addStage(stage1);
		Stage stage2 = new Stage("secondStop", trip);
		stageService.addStage(stage2);
		
		stageService.deleteStageById(stage1.getId());
		assertTrue(stageService.getAllStages().size() <= 1);
	}

}
