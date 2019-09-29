package com.sliit.CSSE_SLIIT.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sliit.CSSE_SLIIT.mapping.Inventory;
import com.sliit.CSSE_SLIIT.service.InventoryService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/inventory")
public class InventoryController {
	@Autowired
	InventoryService inventoryService;

	@GetMapping("")
	public ResponseEntity<?> getAllInventory() {
		ResponseEntity<?> responseEntity = null;
		try {
			responseEntity = new ResponseEntity<>(inventoryService.getAll(), HttpStatus.OK);
		} catch (Exception e) {
			responseEntity = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_GATEWAY);
		}
		return responseEntity;
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getInventoryById(@PathVariable("id") Long id) {
		ResponseEntity<?> responseEntity = null;
		try {
			responseEntity = new ResponseEntity<>(inventoryService.find(id), HttpStatus.OK);
		} catch (Exception e) {
			responseEntity = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_GATEWAY);
		}
		return responseEntity;
	}

	@PostMapping("")
	public ResponseEntity<?> saveInventory(@RequestBody Inventory inventory) {
		ResponseEntity<?> responseEntity = null;
		try {
			responseEntity = new ResponseEntity<>(inventoryService.create(inventory), HttpStatus.OK);
		} catch (Exception e) {
			responseEntity = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_GATEWAY);
		}
		return responseEntity;
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteInventory(@PathVariable("id") Long id) {
		ResponseEntity<?> responseEntity = null;
		try {
			responseEntity = new ResponseEntity<>(inventoryService.delete(id), HttpStatus.OK);
		} catch (Exception e) {
			responseEntity = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_GATEWAY);
		}
		return responseEntity;
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateInventory(@PathVariable("id") Long id, @RequestBody Inventory inventory) {
		ResponseEntity<?> responseEntity = null;
		try {
			responseEntity = new ResponseEntity<>(inventoryService.update(id, inventory), HttpStatus.OK);
		} catch (Exception e) {
			responseEntity = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_GATEWAY);
		}
		return responseEntity;
	}
	
}
