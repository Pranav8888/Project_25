class Ground {
    constructor(x,y,width,height) {
        
        //Other Stuff
        var options = {
            isStatic: true,
        }

        //Creates the body
        this.body = Bodies.rectangle(x,y,width,height,options);
        
        //Makes life easier!
        this.width = width;
        this.height = height;

        //Adds the Body to the World
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        
        rectMode(CENTER);

        //Coloration
        fill("brown");

        //Creating the body
        rect(pos.x, pos.y, this.width, this.height);
    }
}