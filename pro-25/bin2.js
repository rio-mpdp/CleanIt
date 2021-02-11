class Bin2{
    constructor(x,y,w,h){
        this.w=20
        this.h=120
    this.body=Matter.Bodies.rectangle(x,y,this.w,this.h,{
        isStatic:true
     })
         
    Matter.World.add(myworld,this.body)
    
    }
    display(){
    push()
    fill("#ffffff00")
    stroke("#ffffff00")
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.w,this.h)
    
    pop()
    }
    }