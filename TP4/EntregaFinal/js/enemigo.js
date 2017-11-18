class enemigo{

	constructor(){
		this.x = 700; //x del personaje
		this.y =140;//y del personaje
		this.div = document.getElementById('donovan');

		//Cuadrado del div para colisiones del enemigo
		this.left = this.x;
    	this.top = this.y;
    	this.right = this.x + this.div.offsetWidth;
		this.bottom = this.y + this.div.offsetHeight;
	}


	draw(){
		this.div.style.left = this.x.toString() + 'px';
		this.div.style.top = this.y.toString() + 'px';
	}

	update(){
		this.x -= 2;
		//Cuadrado del div para colisiones del enemigo
		this.left = this.x;
    	this.top = this.y;
    	this.right = this.x + this.div.offsetWidth;
		this.bottom = this.y + this.div.offsetHeight;

		if(this.x < -100){
			this.x = 700;
		}
	}
};


