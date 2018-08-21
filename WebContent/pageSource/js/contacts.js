/**
 * 
 */

//页面初始化
$("#wd").val("");
//easydropdown.all();
/*let show = $("[name='dept']");
let words = $("[name='selectdept']");
show.click(function(){
	words.attr("style","display:block");//style.display = 'block';
});

words.click(function(){
	var option = $(this).children("selected");
	show.val(words.val());
	words.attr("style","display:none");
});*/

$.ajax({
	url :"/Contacts/show",
	async :true,
	type :"get",
	datatype :"json",
	data :{},
	contentType : "application/json; charset=utf-8",
	success :function(data){
		var tableList = $("#tableList");
		buildTable(data, tableList);
	}
});

//查找
function findContacts(wd){
	wd = wd.value;
	$.ajax({
		url :"/Contacts/find",
		async :true,
		type :"get",
		datatype :"json",
		data :{keyWord : wd},
		success :function(data){
			var tableList = $("#tableList");
			console.log(JSON.stringify(data));
			tableList.empty();
			$(".pagination").empty();
			if(data.length==0){
				tableList.append("<p>无搜索结果</p>");
				console.log("无搜索结果");
			} else {
				buildTable(data, tableList);
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

//新增联系人
function addContact(){
	/*$("[contenteditable]").removeAttr("contenteditable");
	currentTable = $("#table" + activePage);
	currentTable.children("tbody").append("<tr contenteditable>" +
		"<td>姓名</td>" +
		"<td>性别</td>" +
		"<td>部门</td>" +
		"<td>职务</td>" +
		"<td>手机</td>" +
		"<td>邮箱</td>" +
	"</tr>");*/
	//获取前端输入
	contact=new Object();
	contact.name=$("#addModal [name='name']").val();
	contact.sex=$("#addModal [name='sex']:checked").val()!=0;
	contact.dept=$("#addModal [name='dept']").val();
	contact.post=$("#addModal [name='post']").val();
	contact.mobile=$("#addModal [name='mobile']").val();
	contact.email=$("#addModal [name='email']").val();
	$.ajax({
		url :"/Contacts/add",
		async :true,
		type :"post",
		datatype :"json",
		data :JSON.stringify(contact),
		contentType : "application/json; charset=utf-8",
		success :function(data){
			body=$("body");
			body.empty();
			delay=5;
			body.append('<div class="alert alert-success">' +
				'<strong>新增成功!</strong> 页面将在&nbsp;<b id="time" >' + delay +'</b>&nbsp;秒后自动跳转，若没有跳转，请点击<a href="http://localhost:8080/Contacts/">此处</a> 。' +  
			'</div>' +
			'<script>' + 
				'delayURL("http://localhost:8080/Contacts/");' + 
			'</script>');
		},
		error :function(XMLHttpRequest, textStatus){
			console.log(textStatus);
		},
		complete :function(XMLHttpRequest,textStatus){
			console.log(textStatus);
		}
	});
}

//修改联系人
function updateContact(){
	//获取前端输入
	contact=new Object();
	contact.id=$("tr.table-primary [name='id']").text();
	contact.name=$("#updateModal [name='name']").val();
	contact.sex=$("#updateModal [name='sex']:checked").val()!=0;
	contact.dept=$("#updateModal [name='dept']").val();
	contact.post=$("#updateModal [name='post']").val();
	contact.mobile=$("#updateModal [name='mobile']").val();
	contact.email=$("#updateModal [name='email']").val();
	$.ajax({
		url :"/Contacts/update",
		async :true,
		type :"post",
		datatype :"json",
		data :JSON.stringify(contact),
		contentType : "application/json; charset=utf-8",
		success :function(data){
			body=$("body");
			body.empty();
			delay=5;
			body.append('<div class="alert alert-success">' +
				'<strong>修改成功!</strong> 页面将在&nbsp;<b id="time" >' + delay +'</b>&nbsp;秒后自动跳转，若没有跳转，请点击<a href="http://localhost:8080/Contacts/">此处</a> 。' +  
			'</div>' +
			'<script>' + 
				'delayURL("http://localhost:8080/Contacts/");' + 
			'</script>');
		},
		error :function(XMLHttpRequest, textStatus){
			console.log(textStatus);
		},
		complete :function(XMLHttpRequest,textStatus){
			console.log(textStatus);
		}
	});
}

//构建表格
function buildTable(data, tableList){
	var table;
	activePage = "1";
	pageNum = Math.floor((data.length - 1) / 10 + 1);
	$.each(data,function(n,obj){
		//当n为10的倍数时,新建一张表
		if(!(n%10)){			
			table = $("<table class='table table-hover'></table>");
			table.attr("id", "table"+(n/10+1));
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
			if(table.attr("id")!="table1"){
				table.hide();
			}
		}
		var tr = "<tr id='tr"+n+"'>";
		$.each(obj,function(name,value){
			var td;
			if(name=="id"){
				tr += "<td name='id' hidden>" + value + "</td>";return true;//联系人的id被隐藏
			} 
			if(name=="sex") {
				value=value?"男":"女";
			}
			td = "<td name='"+name+"'>" + value + "</td>";
			tr += td;
		});
		tr += "</tr>";
		table.append(tr);
		//表中每满10条记录或数据读完时，将表加入tableList
		if(n%10==9 || n==data.length-1){
			table.append("</tbody>");
			tableList.append(table);
		}
	});
	
	//当表格中某行被点击时，启用修改和删除按钮
	$("tbody tr").click(function(){
		console.log( $(this).attr("id")+" be clicked");		
		$("tr.table-primary").removeClass("table-primary");
		$(this).addClass("table-primary");
		$("#modify").attr("disabled", false);
		$("#remove").attr("disabled", false);
		//模态框中预加载原始数据
		$("#updateModal [name='name']").val($(this).children("[name='name']").text());
		$("#updateModal [value='" + (($(this).children("[name='sex']").text()=="男")?"1":"0") + "']").attr("checked", true);
		$("#updateModal ul li:contains(" + $(this).children("[name='dept']").text() + ")").click();//由于使用了easydropdown，通过li的click事件完成加载
		$("#updateModal [name='post']").val($(this).children("[name='post']").text());
		$("#updateModal [name='mobile']").val($(this).children("[name='mobile']").text());
		$("#updateModal [name='email']").val($(this).children("[name='email']").text());
	});
	if(pageNum){
		initPaging();
	}
}