let bill = new player();
let donovan = new enemigo();

function update() {
	if (bill.state != 'muerte') {
		if (bill.colision(donovan) && (bill.state == 'patada')) {
			donovan.x = -1000;
			bill.puntaje ++;
		}else if (bill.colision(donovan)){
			bill.state = 'muerte';
			bill.stopBackground();
		}
		donovan.update();
	}else{
		$('#muerte').css('z-index',7000);
	}
}

function draw() {
	switch (bill.state) {
		case 'quieto':
		bill.draw('quieto');
		break;

		case 'caminar':
		bill.draw('caminar');
		bill.y =125;
		break;

		case 'patada':
		bill.draw('patada');
		break;

		case 'muerte':
		bill.draw('muerte');
		bill.y = 160;
		break;

		default:
		bill.draw('quieto');
		break;
	}

	donovan.draw();

}

function mainLoop() {
	update();
	draw();
	requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);

document.addEventListener('keydown', function(event){
	if (bill.state != 'muerte') {
		if (event.keyCode === 39) {  
			bill.moveBackground();
			bill.state = 'caminar';
		} else if (event.keyCode === 83) { 

		}
	}
}, false);

document.addEventListener('keyup', function(event){
	if (bill.state != 'muerte') {
		if (event.keyCode === 39) {  
			bill.stopBackground();
			bill.state = 'quieto';
		} else if (event.keyCode === 65) { 
			bill.stopBackground();
			bill.state = 'patada';
		}
	}
}, false);
