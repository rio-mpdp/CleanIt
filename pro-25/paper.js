class Paper{
    constructor(x,y,w,h){
        this.w=50
        this.h=50
    this.body=Matter.Bodies.rectangle(x,y,this.w,this.h,{
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2

       })
    Matter.World.add(myworld,this.body)
    this.img=loadImage("paper.png")
    }
    display(){
    push()
    imageMode(CENTER) 
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    image(this.img,0,0,this.w,this.h) 
    pop()
    }
    }