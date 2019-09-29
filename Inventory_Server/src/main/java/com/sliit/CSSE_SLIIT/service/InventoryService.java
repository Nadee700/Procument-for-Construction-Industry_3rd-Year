package com.sliit.CSSE_SLIIT.service;

import java.util.List;

import com.sliit.CSSE_SLIIT.mapping.Inventory;


public interface InventoryService {
	public Inventory create(Inventory inventory);

	public Inventory find(Long id);

	public Inventory update(Long id, Inventory inventory);

	public Boolean delete(Long id);

	List<Inventory> getAll();
}
