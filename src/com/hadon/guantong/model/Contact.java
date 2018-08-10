package com.hadon.guantong.model;

public class Contact {
	private int id;			//主键
	private String name;	//姓名
	private boolean sex;	//性别
	private String dept;	//部门
	private String post;	//职务
	private String mobile;	//手机号
	private String email;	//邮箱
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isSex() {
		return sex;
	}
	public void setSex(boolean sex) {
		this.sex = sex;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public String getPost() {
		return post;
	}
	public void setPost(String post) {
		this.post = post;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
}
