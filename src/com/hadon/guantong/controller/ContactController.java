package com.hadon.guantong.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.hadon.guantong.model.Contact;
import com.hadon.guantong.service.ContactService;

/*
Ĭ��Ϊsingleton����ģʽ����Ӧ�����е�<bean scope="prototype"/>
 */
@Scope(value = "prototype")
/*
����ӳ�䣬���ӵ�ַ��һ������ָ����value���������������еķ���
 */
@RequestMapping(value = "/contacts")
/*
ָ����ǰ��Ϊ�����࣬value�������������޷��Զ�װ�䣩
��ʹ��ע��ʱ����ʵ��org.springframework.web.servlet.mvc.Controller�ӿ�
 */
@Controller
public class ContactController {
	@Resource(name = "ContactService")
    private ContactService contactService;
	
	
	@RequestMapping(value = "/show", method = RequestMethod.GET)
    public String showContacts(HttpServletRequest request) {
		List<Contact> contacts = contactService.showContacts();
		request.setAttribute("contacts", contacts);
        return "index";
    }
}
