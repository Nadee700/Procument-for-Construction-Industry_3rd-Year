package com.sliit.CSSE_SLIIT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.sliit.CSSE_SLIIT.mapping.Inventory;


@Repository
public interface InventoryRepository extends MongoRepository<Inventory, Long>{

}
