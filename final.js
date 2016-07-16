abt = 2800;
cnt = 3600;
function onscroll(){
	var currenty=window.pageYOffset;
	if(currenty>680){
		document.getElementById('up-btn').style.display= "block";
	}
	if(currenty<680){
		document.getElementById('up-btn').style.display= "none";
	}
	
}
function portfolio(){
	var currenty=window.pageYOffset;
	if(currenty<680){
	var i=1;
		var animation=setInterval(function(){
		window.scroll(0,currenty);
		currenty=currenty+(1*i);
		i=i+0.5;
		if(currenty>680){
				
				window.scroll(0,680);
				window.clearInterval(animation);
			}
		},10);
	}else{
	var i=1;
		var animation=setInterval(function(){
		window.scroll(0,currenty);
		currenty=currenty-(1*i);
		i=i+0.5;
		if(currenty<680){
		
				window.scroll(0,680);
				window.clearInterval(animation);
			}
		},10);	
	}
}
function up(){
	var currenty=window.pageYOffset;
	if(currenty<0){
	var i=1;
		var animation=setInterval(function(){
		window.scroll(0,currenty);
		currenty=currenty+(1*i);
		i=i+0.5;
		if(currenty>0){
				
				window.scroll(0,0);
				window.clearInterval(animation);
			}
		},10);
	}else{
	var i=1;
		var animation=setInterval(function(){
		window.scroll(0,currenty);
		currenty=currenty-(1*i);
		i=i+0.5;
		if(currenty<0){
		
				window.scroll(0,0);
				window.clearInterval(animation);
			}
		},10);	
	}
}
function about(){	

	var currenty=window.pageYOffset;
	if(currenty<abt){
	var i=1;
		var animation=setInterval(function(){
		window.scroll(0,currenty);
		currenty=currenty+(1*i);
		i=i+0.5;
		if(currenty>abt){
				window.scroll(0,abt);
				window.clearInterval(animation);
			}
		},10);
	}else{
	var i=1;
		var animation=setInterval(function(){
		window.scroll(0,currenty);
		currenty=currenty-(1*i);
		i=i+0.5;
		if(currenty<abt){
				window.scroll(0,abt);
				window.clearInterval(animation);
			}
		},10);	
	}
}
function contact(){
var currenty=window.pageYOffset;
	if(currenty<cnt){
	var i=1;
		var animation=setInterval(function(){
		window.scroll(0,currenty);
		currenty=currenty+(1*i);
		i=i+0.5;
		if(currenty>cnt){
				window.scroll(0,cnt);
				window.clearInterval(animation);
			}
		},10);
	}else{
	var i=1;
		var animation=setInterval(function(){
		window.scroll(0,currenty);
		currenty=currenty-(1*i);
		i=i+0.5;
		if(currenty<cnt){
				window.scroll(0,cnt);
				window.clearInterval(animation);
			}
		},10);	
	}
}

function home(){
var currenty=window.pageYOffset;
	if(currenty<0){
	var i=1;
		var animation=setInterval(function(){
		window.scroll(0,currenty);
		currenty=currenty+(1*i);
		i=i+0.5;
		if(currenty>0){
				window.scroll(0,0);
				window.clearInterval(animation);
			}
		},10);
	}else{
	var i=1;
		var animation=setInterval(function(){
		window.scroll(0,currenty);
		currenty=currenty-(1*i);
		i=i+0.5;
		if(currenty<0){
				window.scroll(0,0);
				window.clearInterval(animation);
			}
		},10);	
	}
}
function resetScroller(el){
	var currenty=window.pageYOffset;
	var animation=setInterval(function(){
	window.scroll(0, currenty); 
	currenty=currenty-30;
	if(currenty<0){
		window.clearInterval(animation);
	}
	}
	,10);
}
window.onload = doFirst();
function doFirst(){


i=0;
 setInterval(function(){
 
 i++;
 if(i>6){i=1;}
 doThis(i);
 
 
 }, 4000);

 }
function doThis(j){
document.getElementById('box-image-'+j).checked = true;
}
