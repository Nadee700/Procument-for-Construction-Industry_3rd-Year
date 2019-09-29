package com.sliit.CSSE_SLIIT.service.impl;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sliit.CSSE_SLIIT.mapping.Inventory;
import com.sliit.CSSE_SLIIT.repository.InventoryRepository;
import com.sliit.CSSE_SLIIT.service.InventoryService;

@Service
public class InventoryServiceImpl implements InventoryService {

	@Autowired
	private InventoryRepository inventoryRepository;

	@Override
	public Inventory find(Long id) {
		Inventory inventory = inventoryRepository.findById(id).orElse(null);
		return inventory;
	}

	@Override
	public Inventory create(Inventory inventory) {
		return inventoryRepository.save(inventory);
	}

	@Override
	public Inventory update(Long id, Inventory inventory) {
		Inventory invent = inventoryRepository.findById(id).orElse(null);
		if (Objects.nonNull(invent)) {
			invent.setDetail(inventory.getDetail());
			invent.setName(inventory.getName());
			invent.setQuantity(inventory.getQuantity());
			return inventoryRepository.save(inventory);
		}
		return null;
	}

	@Override
	public Boolean delete(Long id) {
		boolean result = false;
		try {
			inventoryRepository.deleteById(id);
			result = true;
		} catch (Exception e) {
			throw e;
		}
		return result;
	}

	@Override
	public List<Inventory> getAll() {
		return inventoryRepository.findAll().stream().map(r -> r).collect(Collectors.toList());
	}

}