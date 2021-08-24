package com.luisa13.backendulysses.controller;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.luisa13.backendulysses.model.Stage;
import com.luisa13.backendulysses.model.StageDTO;
import com.luisa13.backendulysses.model.Trip;
import com.luisa13.backendulysses.repository.TripRepository;
import com.luisa13.backendulysses.service.StageService;
import com.luisa13.backendulysses.service.TripService;

@RestController
@RequestMapping("/trips/{id_trip}/stages")
public class StageController {
	
	@Autowired
	private StageService stageService;
	
	@Autowired
	private TripService tripService;
	

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Stage addStage(@PathVariable (value = "id_trip") Long idTrip, @RequestBody StageDTO stage) {
		Trip trip = tripService.findTripById(idTrip);
		Stage newStage = stage.getStageClass();
		newStage.setTrip(trip);
		return this.stageService.addStage(newStage);
	}
	
	@PutMapping("/updatestage")
	public ResponseEntity<String> updateStage(@PathVariable (value = "id_trip") Long idTrip, @RequestBody Stage stage){
		HttpStatus response;
		try {
			this.stageService.updateUser(stage);
			response = HttpStatus.OK;
		}catch(NoSuchElementException ex) {
			System.out.println(ex.getMessage());
			response = HttpStatus.NOT_FOUND;
		}
		
		return new ResponseEntity<String>(response);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> delete(@PathVariable (value = "id_trip") Long idTrip, @PathVariable Long id){
		HttpStatus response;
		try {
			Stage stage = stageService.findStageByIdAndIdTrip(id, idTrip);
			stageService.deleteStageById(stage.getId());
			response = HttpStatus.OK;
		}catch(NoSuchElementException ex) {
			System.out.println(ex.getMessage());
			response = HttpStatus.NOT_FOUND;
		}
		
		return new ResponseEntity<String>(response);
	}
	
	@GetMapping("/allstages")
	public List<StageDTO> getAllStages(@PathVariable (value = "id_trip") Long idTrip){
		//return this.stageService.getAllStages(idTrip);
		List<StageDTO> stages = new ArrayList<StageDTO>();
		List<Stage> stageList = this.stageService.getAllStages(idTrip);
		
		for(Stage stage: stageList) {
			String imageBase64 = "";
			if(stage.getImage() != null)
				imageBase64 = Base64.getEncoder().encodeToString(stage.getImage());
			StageDTO stageDTO = new StageDTO(stage.getId(), stage.getPlace(), stage.getStartDate(), stage.getEndDate(),
					stage.getDescription());
			stageDTO.setImageBase64(imageBase64);
			stages.add(stageDTO);
		}
		
		return stages;
	}
	
}
