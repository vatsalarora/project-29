class Slingshot{
    constructor(BodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){

    }
    display(){
        if(this.sling.BodyA){
           var pointA = this.sling.bodyA.position;
           var pointB = this.pointB;

           strokeWeight(4);
           fill ("red")
           line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}

}
