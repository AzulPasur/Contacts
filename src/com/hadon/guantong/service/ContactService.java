package com.hadon.guantong.service;

import java.util.List;

import com.hadon.guantong.model.Contact;

public interface ContactService {
	//������ϵ����Ϣ
    public int addContact(Contact contact);
    //ͨ������������ϵ����Ϣ
    public List<Contact> findContactsByName(String name);
	//ͨ���ֻ��Ų�����ϵ����Ϣ
    public Contact findContactByMobile(String mobile);
	//��ʾ������ϵ����Ϣ
    public List<Contact> showContacts();
    //�޸���ϵ����Ϣ
    public int updateContact(Contact contact);
    //ͨ��idɾ����ϵ��
    public int deleteContact(int id); 
}
