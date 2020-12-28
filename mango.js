class Mango{

    constructor(x,y,radius){

    options = {
        isStatic: true,
        restitution: 0,
        friction: 1
    }
    this.body = Matter.Bodies.circle(this.x, this.y, this.radius)

    this.image = loadImage("mango.png")

    World.add(world, mango)

}
    display(){
        var position = this.body.position
        var angle = this.body.angle
        push()

        translate(pos.x, pos.y);
        image(this.image, 0, 0, this.r, this.r);
        pop()
    }
}