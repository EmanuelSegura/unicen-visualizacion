class player{



	constructor(){
		this.x = 30; //x del personaje
		this.y =125;//y del personaje
		this.div = document.getElementById('bill');
		this.state = 'quieto';  //Arranca quieto

		//Cuadrado del div para colisiones del player
		this.left = this.x;
    	this.top = this.y;
    	this.right = this.x + this.div.offsetWidth;
		this.bottom = this.y + this.div.offsetHeight;
		this.puntaje = 0;
		this.divPuntaje = document.getElementById('puntaje');

	}


	draw(state){
		this.div.style.left = this.x.toString() + 'px';
		this.div.style.top = this.y.toString() + 'px';
		this.state = state;
		this.div.className = state;
		this.divPuntaje.innerHTML = this.puntaje;

	}

	moveBackground() {
    	document.getElementById('background1').style.animationPlayState = 'running';
  	}

	 stopBackground() {
	    document.getElementById('background1').style.animationPlayState = 'paused';
	}

	colision(enem){
		let enemLeft = enem.left;
   		let enemRight = enem.right;
    	let enemTop = enem.top;
    	let enemBottom = enem.bottom;
		return !(this.left > enemRight || this.right < enemLeft || this.top > enemBottom || this.bottom < enemTop);
	}



};


