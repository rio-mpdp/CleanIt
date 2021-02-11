var myworld,myengine,body,ball,a,p
function preload(){
p=loadImage("class.jpg")
}
function setup(){
createCanvas(1000,700)
myengine=Matter.Engine.create()
myworld=myengine.world;
bin=new Bin(750,610)
bin2=new Bin2(640,610)
paper=new Paper(100,630)
ground=new Ground(width/2,660,1000,2)

}
function draw(){
background(p)
Matter.Engine.update(myengine)
paper.display()
bin.display()
bin2.display()
ground.display()

if(keyDown("up")){
 Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-37})   
}

}
