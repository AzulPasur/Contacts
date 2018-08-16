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
			if(data.length==0){
				table.empty();
				table.append("<tr><td>无搜索结果</td></tr>");
				return;
			}
			$("tbody").remove();
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
		},
		error :function(XMLHttpRequest, textStatus){
			console.log(textStatus);
		},
		complete :function(XMLHttpRequest,textStatus){
			console.log(textStatus);
		}
	});
}