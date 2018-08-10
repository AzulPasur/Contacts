package com.hadon.guantong.service;

import java.util.List;

import com.hadon.guantong.model.Contact;

public interface ContactService {
	//增加联系人信息
    public int addContact(Contact contact);
    //通过姓名查找联系人信息
    public List<Contact> findContactsByName(String name);
	//通过手机号查找联系人信息
    public Contact findContactByMobile(String mobile);
	//显示所有联系人信息
    public List<Contact> showContacts();
    //修改联系人信息
    public int updateContact(Contact contact);
    //通过id删除联系人
    public int deleteContact(int id); 
}
