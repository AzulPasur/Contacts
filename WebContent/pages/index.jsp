<%@ page import="java.util.List" %>
<%@ page import="com.hadon.guantong.model.Contact" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Contacts</title>
	</head>
	<body>
		<%
    		StringBuffer sb1 = new StringBuffer();
   		 	List<Contact> contacts = (List<Contact>) request.getAttribute("contacts");
    		if (contacts != null) {
        		for (Contact contact : contacts) {
            		sb1
						.append(contact.getName())
						.append("&nbsp;&nbsp;")
                    	.append(contact.isSex()?"男":"女")
                    	.append("&nbsp;&nbsp;")
                    	.append(contact.getDept())
                    	.append("&nbsp;&nbsp;")
                    	.append(contact.getPost())
                    	.append("&nbsp;&nbsp;")
                    	.append(contact.getMobile())
                    	.append("&nbsp;&nbsp;")
                    	.append(contact.getEmail())
                    	.append("<br/>");
        		}
    		}
		%><%=sb1.toString()%>
	</body>
</html>