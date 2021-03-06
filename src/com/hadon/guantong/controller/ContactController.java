package com.hadon.guantong.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

import javax.annotation.Resource;
//import javax.servlet.http.HttpServletRequest;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hadon.guantong.model.Contact;
import com.hadon.guantong.service.ContactService;

/*
默认为singleton单例模式，对应配置中的<bean scope="prototype"/>
 */
@Scope(value = "prototype")
/*
请求映射，链接地址第一层满足指定的value则进入这个控制类中的方法
 */
//@RequestMapping(value = "/contacts")
/*
指定当前类为控制类，value可以重命名（无法自动装配）
不使用注解时，需实现org.springframework.web.servlet.mvc.Controller接口
 */
@Controller
public class ContactController {
	@Resource(name = "ContactService")
    private ContactService contactService;
	
	
	@RequestMapping(value = "/show")
    public @ResponseBody List<Contact> showContacts() {
		List<Contact> contacts = contactService.showContacts();
        return contacts;
    }
	
	@RequestMapping(value = "/find")
	public @ResponseBody List<Contact> findContacts(String keyWord) {
		List<Contact> contacts = new ArrayList<>();
		 Pattern pattern = Pattern.compile("^[\\d]+$");  
		if (pattern.matcher(keyWord).matches()) {
			contacts.add(contactService.findContactByMobile(keyWord));
		} else {
			contacts = contactService.findContactsByName(keyWord);
		}
		contacts.remove(null);
        return contacts;
    }
	
	@RequestMapping(value = "/add")
    public @ResponseBody String addContact(@RequestBody Contact contact) {
		contactService.addContact(contact);
        return "{\"Msg\":\"插入成功\"}";
    }
	
	@RequestMapping(value = "/update")
    public @ResponseBody String updateContact(@RequestBody Contact contact) {
		contactService.updateContact(contact);
        return "{\"Msg\":\"修改成功\"}";
    }
	
	@RequestMapping(value = "/delete")
    public @ResponseBody String deleteContact(int id) {
		contactService.deleteContact(id);
        return "{\"Msg\":\"删除成功\"}";
    }
}
