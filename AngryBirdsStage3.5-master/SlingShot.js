class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.Sling = Constraint.create(options);
        this.pointB= pointB;
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        World.add(world, this.Sling);
        
      
    }
//pointB----------------------- 

       fly(){  
           //null
        this.Sling.bodyA= null;

       }
    display(){

        image(this.image1,200,20);
        image(this.image2,170,20);
        
        if(this.Sling.bodyA ){

            var pointA = this.Sling.bodyA.position;          
            var pointB = this.pointB;
    
            push();
            strokeWeight(4);           
            line(pointA.x, pointA.y,pointB.x-20,pointB.y);
            line(pointA.x,pointA.y,pointB.x+30,pointB.y-3)
            image(this.image3,pointA.x-20,pointA.y-10,18,30)
            pop();
        }
     
            
    }
    
}