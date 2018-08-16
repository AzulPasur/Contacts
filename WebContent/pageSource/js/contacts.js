/**
 * 
 */
$("#wd").val("");
$.ajax({
	url :"/Contacts/show",
	async :true,
	type :"get",
	datatype :"json",
	data :{},
	contentType : "application/json; charset=utf-8",
	success :function(data){
		var table = $("table");
		buildTable(data, table);
	}
});
function findContacts(wd){
	wd = wd.value;
	$.ajax({
		url :"/Contacts/find",
		async :true,
		type :"post",
		datatype :"json",
		data :{keyWord : wd},
		success :function(data){
			var table = $("table");
			console.log(JSON.stringify(data));
			table.empty();
			if(data.length==0){
				table.append("<tr><td>无搜索结果</td></tr>");
			} else {
				buildTable(data, table);
			}
		},
		error :function(XMLHttpRequest, textStatus){
			console.log(textStatus);
		},
		complete :function(XMLHttpRequest,textStatus){
			console.log(textStatus);
		}
	});
}

function buildTable(data, table){
	table.append("<thead class='thead-light'>" +
		"<tr>" +
			"<th>姓名</th>" +
			"<th>性别</th>" +
			"<th>部门</th>" +
			"<th>职务</th>" +
			"<th>手机</th>" +
			"<th>邮箱</th>" +
			"</tr>" +
		"</thead>");
	table.append("<tbody>");
	$.each(data,function(n,obj){
		var tr;
		if(n<10){
			tr = "<tr>";
		} else {
			tr = "<tr hidden>"
		}						 
		$.each(obj,function(name,value){
			var td;
			if(name=="id"){
				tr += "<td hidden>" + value + "</td>";return true;
			} 
			if(name=="sex") {
				value=value?"男":"女";
			}
			td = "<td>" + value + "</td>";
			tr += td;
		});
		tr += "</tr>";
		table.append(tr);
	});
	table.append("</tbody>");
}