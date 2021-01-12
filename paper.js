class Paper{
    constructor(){
        var Options ={

            restitution :0,
            friction:0,
            density:1.2

        }
        this.body=Bodies.circle(250,500,20,Options);
        this.width=33;
        this.image = loadImage("Image/paper.png");
        World.add(world,this.body);
     }
     display(){
        var position = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        this.image(this.image,position.x,position.y,33,33);






     }


}
