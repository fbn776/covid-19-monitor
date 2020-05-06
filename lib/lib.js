function s(e){
 this.e=e;
  return document.querySelector(this.e);
}
function log(e){
 this.e=e;
  console.log(this.e);
}
function lg(w){
 this.w=w;
 var x=s(".log");
  x.innerHTML=this.w;
}
function showAlert(o,c){
  this.o=o;
   var elm=document.createElement("div");
   elm.setAttribute("class","alertBox");
   elm.innerHTML=this.o;
   document.body.appendChild(elm);
   var posW=elm.getBoundingClientRect();
   var width=posW.width;
   elm.style.left="calc(50% - "+width/2+"px)";
   elm.style.visibility="visible";
   elm.style.transform="translateY(0px)";
   elm.style.opacity=1;
    setTimeout(function(){
     elm.style.transform="translateY(40px)";
     elm.style.opacity=0;
      setTimeout(function(){
       elm.style.visibility="hiddden";
       elm.remove();
      },200);
    },2000);
}
function hasAttr(x,w){
	return x.hasAttribute(w);
}function get(x,y){
	return x.getAttribute(y);
}function small(x){
	return x.toLowerCase();
}function big(x){
	return x.toUpperCase();
}function add(x,y){
	x.classList.add(y);
}function remove(x,y){
	x.classList.remove(y);	
}function getCSS(x,y){
	return window.getComputedStyle(x).getPropertyValue(y);
}function toInt(x){
	return parseInt(x);
};function Rgb(rgb){
    if(!(this instanceof Rgb)) return new Rgb(rgb);
    var c= rgb.match(/\d+(\.\d+)?%?/g);
    if(c){
        c= c.map(function(itm){
            if(itm.indexOf('%')!= -1) itm= parseFloat(itm)*2.55;
            return parseInt(itm);
        });
    }
    this.r=c[0];
    this.g=c[1];
    this.b=c[2];
}
function invert(c){
 let x=new Rgb(c);
  var r=x.r;
  var g=x.g;
  var b=x.b;
  var cM;
     if((r * 0.299 + g * 0.587 + b * 0.114) > 186){
      cM='rgb(0,0,0)'
     }else{
      cM='rgb(255,255,255)';
     }
     return cM;
 }
function componentToHex(c) {
	var hex = c.toString(16);
 	 return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
	  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function invertColor(hex) {
	 if (hex.indexOf('#') === 0) {
 	 	hex = hex.slice(1);
 	 }
 	 if (hex.length === 3) {
 		 hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
 	 }
	  if (hex.length !== 6) {
		throw new Error('Invalid HEX color.');
	  }
 	 var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
 		 g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
		 b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
	return '#' + padZero(r) + padZero(g) + padZero(b);
}
function padZero(str, len) {
 	 len = len || 2;
 	 var zeros = new Array(len).join('0');
	return (zeros + str).slice(-len);
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function p(min,max){
	return (min*100)/max;
}
function pRev(p,max){
	return (max*p)/100;
}
function multiSplit(str, tokens){
	var tempChar=tokens[0];
        for(var i = 1; i < tokens.length; i++){
            str = str.split(tokens[i]).join(tempChar);
        }
    str = str.split(tempChar);
    return str;
}
function createWorldData(a,t,o,im){
	var m=document.createElement("div");
		a.appendChild(m);
		m.setAttribute("class","indv-cont");
	
	var imgCont=document.createElement("div");
		m.appendChild(imgCont);
		imgCont.setAttribute("class","img-cont flex");
		
	var img=document.createElement("img");
		imgCont.appendChild(img);
		img.setAttribute("src",im);
		img.setAttribute("class","indv-img");
		
	var tt=document.createElement("div");
		m.appendChild(tt);
		tt.setAttribute("class","total");
		tt.innerHTML=t;
		
	var val=document.createElement("div");
		m.appendChild(val);
		val.setAttribute("class","value");
		val.innerHTML=o;
}
function scroll(x){
 	x.scrollIntoView({ 
  		behavior:'smooth' 
 	});
}