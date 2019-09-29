package com.sliit.CSSE_SLIIT.mapping;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "inventory")
public class Inventory {
	private Long inventoryid;
	private String name;
	private String detail;
	private String quantity;

	public Inventory(Long inventoryid, String name, String detail, String quantity) {
		super();
		this.inventoryid = inventoryid;
		this.name = name;
		this.detail = detail;
		this.quantity = quantity;
	}

	public Long getInventoryid() {
		return inventoryid;
	}

	public void setInventoryid(Long inventoryid) {
		this.inventoryid = inventoryid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

}