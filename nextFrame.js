//Opera mini looped setTimeout test
var f = false;

function vid(){
	renderFrame(f);
  setTimeout(function(){
  	vid();
  },1000);
 }

function renderFrame(frm){
	if(frm == false){
  	f = true;
    document.write("1");
  }else{
  	f = false;
    document.write("0");
  }
}

vid();
