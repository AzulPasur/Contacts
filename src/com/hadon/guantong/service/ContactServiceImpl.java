package com.hadon.guantong.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hadon.guantong.dao.ContactDAO;
import com.hadon.guantong.model.Contact;

@Service(value = "ContactService")
public class ContactServiceImpl implements ContactService {

	@Resource
	private ContactDAO contactDAO;
	
	@Override
	public int addContact(Contact contact) {
		// TODO Auto-generated method stub
		return contactDAO.addContact(contact);
	}

	@Override
	public List<Contact> findContactsByName(String name) {
		// TODO Auto-generated method stub
		return contactDAO.findContactsByName(name);
	}

	@Override
	public Contact findContactByMobile(String mobile) {
		// TODO Auto-generated method stub
		return contactDAO.findContactByMobile(mobile);
	}

	@Override
	public List<Contact> showContacts() {
		// TODO Auto-generated method stub
		return contactDAO.findContacts();
	}

	@Override
	public int updateContact(Contact contact) {
		// TODO Auto-generated method stub
		return contactDAO.updateContact(contact);
	}

	@Override
	public int deleteContact(int id) {
		// TODO Auto-generated method stub
		return contactDAO.deleteContact(id);
	}

}
