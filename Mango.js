class Mango {
    constructor(x, y, radius){
      var options = {
      isStatic:true,
      restitution : 1,
      friction : 1,
    }
    
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("mango.png");
    World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image,0,0, this.radius*2,this.radius*2);

    }  
    }