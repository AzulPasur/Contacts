/**
 * 
 */
var delay = 0;

function delayURL(url) { 
	timer=$("#time")
	timer.html(delay); 
	if(delay>0){ 		
		delay--;
	}else{ 
		window.top.location.href=url; 
	} 
	//此处1000毫秒即每一秒跳转一次 
	setTimeout("delayURL('" + url + "')", 1000); 
}