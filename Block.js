class Block {
    constructor(x, y, width, height) {
      var options = {
        'restitution': 0.4,
        'friction': 0.0
      }
        this.image = loadImage("block.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world, this.body);
      }
      
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        console.log(this.body.speed)
        if(this.body.speed < 3){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y);
        
        }
        else {
        World.remove(world, this.body); 
        push();
        this.Visibility = this.Visibility-5;
        tint(255,this.Visibility);
        image(this.image,this.body.position.x, this.body.position.y);
        pop();
        }
      }
}