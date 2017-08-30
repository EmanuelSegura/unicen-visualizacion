var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.onclick = pintarOnClick;
canvas.ondblclick = pintarOnDoubleClick;
canvas.onmouseout = pintarOnMouseOut;
canvas.onmouseover = pintarOnMouseOver;

function pintarClick(){
ctx.fillStyle = "#FFD5B2";
ctx.fillRect(0,0,300,300);
}

function pintarMouseOut(){
ctx.fillStyle = "#F6B782";
ctx.fillRect(0,0,300,300);
}

function pintarMouseOver(){
ctx.fillStyle = "#B0682D";
ctx.fillRect(0,0,300,300);
}

function pintarDoubleClick(){
ctx.fillStyle = "#894710";
ctx.fillRect(0,0,300,300);
}
