/**
 * Created by Carlos on 8/29/2017.
 */

/**
 All the elements need to be stored in an array so that we can loop through all the circles and color them
 */

var canvas; // global canvas
var context; //global context
var rect; //rect
var circArray = []; //empty array for circles

function Circle(x,y,r, color) { //circle object
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
}


Circle.prototype.drawCircle = function () { //prototype draw method
    sAngle = 0; //global sAngle
    eAngle = 2 * Math.PI; //global eAngle
    context.beginPath(); //begin to draw circle onto canvas
    context.arc(this.x, this.y, this.r, sAngle, eAngle); //create arc, reference what we want from our circle into arc
    context.fillStyle = this.color; //reference color we want
    context.fill(); //fill the circle with color
    context.stroke();//draw
};


randColor = function () {//loop through every circle in array and change the color
    for(i = 0; i < circArray.length; i++){
        circArray[i].color ="rgb("+
            Math.floor(Math.random()*256)+","+
            Math.floor(Math.random()*256)+","+
            Math.floor(Math.random()*256)+")";
        context.beginPath();
        context.arc(circArray[i].x, circArray[i].y, circArray[i].r, sAngle, eAngle);
        context.fillStyle = circArray[i].color;
        context.fill();
        context.stroke();
    }
};

/**
 Load the window and handle events with functions
 */
window.onload = function init () {

    canvas = document.getElementById("carlosCanvas"); //handle to canvas
    context = canvas.getContext("2d"); //using 2d context
    rect = canvas.getBoundingClientRect();
    canvas.addEventListener("click", function (event) {
        var circ = new Circle(event.x - rect.left, event.y - rect.top, (Math.random()+1)*10 , "black"); //create new circle
        circArray.push(circ); //push it into array
        circ.drawCircle(); //draw circle when event happens (which is a click)
        if(canvas.oncontextmenu = function () { //if user right clicks
            randColor();
            return false; //context menu doesn't appear on canvas
            });
    });
};