// let planet1;  
// let planet2;   
// let planet3;  
// let planet4;
// let planet5;
// let planet6;

let awanku;
let awanku2;

function setup() {
  createCanvas(400, 400);
  // planet1 = new Awan(200, 90);
  // planet2 = new Awan(220, 110);
  // planet3 = new Awan(190, 110)
  // planet4 = new Awan(20, 160);
  // planet5 = new Awan(40, 180);
  // planet6 = new Awan(10, 180)
  
  
  awanku = new Awan(10, 120)
  awanku2 = new Awan(240, 150)
  

}

function draw() {
  background(134, 240, 255);


  drawMatahari(); 
  drawRumah(); 


  //Awan
  
  awanku.moveX();
  awanku.display();
  
  awanku2.moveX();
  awanku2.display();
  
  // planet1.moveX();
  // planet1.display();
  // planet2.moveX();
  // planet2.display();
  // planet3.moveX();
  // planet3.display();
  // planet4.moveX();
  // planet4.display()
  // planet5.moveX();
  // planet5.display();
  // planet6.moveX();
  // planet6.display();
}



class Awan {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.colour = color(400, 400, 400);
  }

  moveX() {
    this.x += 1;
    if (this.x > width) {
      this.x = 0;
    }
  }

  
  display() {
    noStroke()
    fill(this.colour);
    
    
    ellipse(this.x, this.y, 100, 50);
    ellipse(this.x+50, this.y+20, 100, 50);
    ellipse(this.x-40, this.y+15, 100, 50);

  }

}


//RUMAH

function drawRumah() {
  //RUMAH
  //Cerobong Asap
  fill(200, 200, 200)
  rect(100, 200, 25, 75)
  //rumah
  fill(200, 200, 300)
  rect(100, 250, 200, 100)
  //atap
  fill(100, 100, 100)
  triangle(100, 250, 300, 250, 200, 200)
  //pintu
  fill(300, 100, 0)
  rect(190, 300, 30, 50)
  //jendela kiri
  fill(100, 300, 200)
  rect(130, 290, 30, 50)
  //jendela kanan
  fill(100, 300, 200)
  rect(250, 290, 30, 50)
  //pintu
  stroke(55)
  fill(300, 100, 300)
  circle(200, 320, 10)
}

function drawMatahari() {
  //Matahari
  fill(300, 300, 100)
  ellipse(30, 30, 100)
  //Tanah
  fill(55, 235, 0)
  rect(0, 350, 400, 50)
}