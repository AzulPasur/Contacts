package com.hadon.guantong.dao;

import java.util.List;

import com.hadon.guantong.model.Contact;

public interface ContactDAO {
	//������ϵ����Ϣ
    public int addContact(Contact contact);
    //ͨ������������ϵ����Ϣ
    public List<Contact> findContactsByName(String name);
	//ͨ���ֻ��Ų�����ϵ����Ϣ
    public Contact findContactByMobile(String mobile);
	//����������ϵ����Ϣ
    public List<Contact> findContacts();
    //�޸���ϵ����Ϣ
    public int updateContact(Contact contact);
    //ͨ��idɾ����ϵ��
    public int deleteContact(int id); 
}
