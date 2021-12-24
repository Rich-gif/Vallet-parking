canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


rover_width = 100;
rover_height = 90;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

green_car_x = 10;
green_car_y = 10;
function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    green_car_imgTag = new Image();
    green_car_imgTag.onload = uploadgreen_car;
    green_car_imgTag.src = green_car_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(green_car_imgTag, green_car_x, green_car_y, green_car_width, green_car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (green_car_y >= 0) {
        green_car_y = green_car_y - 10;
        console.log("When up arrow is pressed, x=" + green_car_x + "| y= " + green_car_y);
        uploadBackground();
        uploadgreen_car();
    }
}

function down()
{
	if (green_car_y >= 0) {
        green_car_y = green_car_y - 10;
        console.log("When up arrow is pressed, x=" + green_car_x + "| y= " + green_car_y);
        uploadBackground();
        uploadgreen_car();
    }
}

function left()
{
	if (green_car_y >= 0) {
        green_car_y = green_car_y - 10;
        console.log("When up arrow is pressed, x=" + green_car_x + "| y= " + green_car_y);
        uploadBackground();
        uploadgreen_car();
    }
}

function right()
{
	if (green_car_y >= 0) {
        green_car_y = green_car_y - 10;
        console.log("When up arrow is pressed, x=" + green_car_x + "| y= " + green_car_y);
        uploadBackground();
        uploadgreen_car();
    }
}
