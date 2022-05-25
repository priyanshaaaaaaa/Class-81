canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="green";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(546,456,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("colour").value;
console.log(color);
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
console.log("mouse_x="+mouse_x+" and mouse_y="+mouse_y);
circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();    
}
function cleararea(){
ctx.clearRect(0,0,canvas.width,canvas.height);    
}