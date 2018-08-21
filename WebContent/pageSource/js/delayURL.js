/**
 * 
 */
var delay = 0;

//倒计时结束页面自动跳转
function delayURL(url) { 
	timer=$("#time")
	timer.html(delay); 
	if(delay>0){ 		
		delay--;//减一秒
	}else{ 
		window.top.location.href=url;//跳转
	} 
	//此处1000毫秒即每秒钟倒计时 
	setTimeout("delayURL('" + url + "')", 1000); 
}