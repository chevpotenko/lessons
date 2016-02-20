var test1={
	
	createOverlay:function(){
		var overlay = document.createElement('div');
		overlay.setAttribute('class','overlay');
		document.querySelector('body').appendChild(overlay);
		return overlay;
	},
	
	methodTest:function(a,b){
		var c=a+b;
		return c;
	}
	
}
try{
	module.exports = test1;
}catch(e){}

