
class Stone {
constructor(){
    var options = {
        restitution : 0,
        friction : 1,
    } 
    
    this.body = Bodies.circle(80, 580, 22, options);
    World.add(world, this.body);
    this.radius = 22;
    this.image = loadImage("stone.png");
}

display(){
var pos = this.body.position;
push();
translate(pos.x,pos.y);
imageMode(RADIUS);
image(this.image,0,0,this.radius*2,this.radius*2);    
  }
}
