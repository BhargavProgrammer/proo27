class Rope {

    constructor(bodyA,pointB){
        //this.offsetX=offsetX
        //this.offsetY=offsetY
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:400
            //pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.pointB = pointB
        this.rope = Constraint.create(options)
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        
        strokeWeight(4)
       /* var anchor1x=pointA.x
        var anchor1y=pointA.y
        var anchor2x=pointB.x
        var anchor2y=pointB.y*/
        line(pointA.x, pointA.y,pointB.x,pointB.y )
        
    }

    
}