package com.fullteaching.backend.forum;

import java.util.List;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fullteaching.backend.entry.Entry;

@Entity
public class Forum {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private boolean activated;
	
	private List<Entry> entries;
	
	public Forum(){}
	
	public Forum(boolean activated) {
		this.activated = activated;
		this.entries = new ArrayList<>();
	}

	public boolean isActivated() {
		return activated;
	}

	public void setActivated(boolean activated) {
		this.activated = activated;
	}

	public List<Entry> getEntries() {
		return entries;
	}

	public void setEntries(List<Entry> entries) {
		this.entries = entries;
	}

}
