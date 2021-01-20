class Ball {
    constructor(x, y, width, height,angle) {
      var options = {

        density : 1.0,
        

          frictionAir : 0.005
         
      }
      SuperheroImage = loadImage("Superhero-01.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
    
      var angle = this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      
      strokeWeight(4);
      stroke("black");
      fill(255);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  