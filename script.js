var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var list = [[3,3],[5,2],[10,4/3],[20,8/9],[40,16/27],[80,32/81]] // div, period
var toDraw = [];
var lines = true;
let w = canvas.width;
let h = canvas.height;
drawShape = time => {
    let x = 0;
    let y = 0;
    let line = [];
    //ctx.clearRect(0,0,w,h);
    for(let i = 0; i < list.length; i++){
        //ctx.beginPath();
        //ctx.moveTo(w/2-w/2*x, h/2-h/2*y);
        ox = x;
        oy = y;
        x = Math.cos(Math.PI/list[i][1]*time/1000)/list[i][0];
        y = Math.sin(Math.PI/list[i][1]*time/1000)/list[i][0];
        //ctx.lineTo((w/2-w/2*(x+ox)), (h/2-h/2*(y+oy)));
        //ctx.stroke();
        x = x+ox;
        y = y+oy;
        line.push(x,y);
    }
    ctx.rect(w/2-w/2*x, h/2-h/2*y, 0.5,0.5)
    ctx.stroke();
    window.requestAnimationFrame(draw);
}

drawShape = time => {
    let x = 0;
    let y = 0;
    let line = [];
    //ctx.clearRect(0,0,w,h);
    for(let i = 0; i < list.length; i++){
        //ctx.beginPath();
        //ctx.moveTo(w/2-w/2*x, h/2-h/2*y);
        ox = x;
        oy = y;
        x = Math.cos(Math.PI/list[i][1]*time/1000)/list[i][0];
        y = Math.sin(Math.PI/list[i][1]*time/1000)/list[i][0];
        //ctx.lineTo((w/2-w/2*(x+ox)), (h/2-h/2*(y+oy)));
        //ctx.stroke();
        x = x+ox;
        y = y+oy;
        line.push(x,y);
    }
    ctx.rect(w/2-w/2*x, h/2-h/2*y, 0.5,0.5)
    ctx.stroke();
    window.requestAnimationFrame(drawShape);
}

drawLines = time => {
    let x = 0;
    let y = 0;
    let line = [];
    ctx.clearRect(0,0,w,h);
    for(let i = 0; i < list.length; i++){
        ctx.beginPath();
        ctx.moveTo(w/2-w/2*x, h/2-h/2*y);
        ox = x;
        oy = y;
        x = Math.cos(Math.PI/list[i][1]*time/1000)/list[i][0];
        y = Math.sin(Math.PI/list[i][1]*time/1000)/list[i][0];
        ctx.lineTo((w/2-w/2*(x+ox)), (h/2-h/2*(y+oy)));
        ctx.stroke();
        x = x+ox;
        y = y+oy;
        line.push(x,y);
    }
    window.requestAnimationFrame(drawLines);
}

if(lines){
    window.requestAnimationFrame(drawLines);
}else{
    window.requestAnimationFrame(drawShape);
}
