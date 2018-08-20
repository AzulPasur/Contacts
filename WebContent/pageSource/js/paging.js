/**
 * 
 */

var activePage = $(".active").attr("id");
var pageNum;

//下一页
function nextPage(){
	if(hasNext()) goToPage(activePage*1+1);
}

//末页
function lastPage(){
	goToPage(pageNum);
}

//上一页
function prevPage(){
	if(hasPrev()) goToPage(activePage*1-1);
}

//首页
function homePage(){
	goToPage(1);
}

function hasNext(){
	return (activePage*1) < pageNum;
}

function hasPrev(){
	return (activePage*1) > 1;
}
//跳转指定页
function goToPage(n){
	$(".active").removeClass("active");
	$("#page"+n).addClass("active");
	$("table").each(function(){
		table = $(this);//获取当前元素
		if(table.attr("id")==("table"+n)){
			table.show();
		} else {
			table.hide();
		}
	});
	activePage = n;
}

//初始化
function initPaging(){
	ul = $(".pagination");
	ul.append('<li class="page-item"><a class="page-link" href="#" onclick="homePage()">首页</a></li>');
	ul.append('<li class="page-item"><a class="page-link" href="#" onclick="prevPage()">上一页</a></li>');
	for(var i=0; i<pageNum; i++){
		currentNum=i+1;
		var active = "active";
		if(!i){
			active="active";
		} else {
			active="";
		}
		ul.append('<li class="page-item '+active+'" id="page'+currentNum+'">' +
			'<a class="page-link" href="#" onclick="goToPage('+currentNum+')">'+currentNum+'</a>' +
		'</li>');
	}
	ul.append('<li class="page-item"><a class="page-link" href="#" onclick="nextPage()">下一页</a></li>');
	ul.append('<li class="page-item"><a class="page-link" href="#" onclick="lastPage()">尾页</a></li>');
}