class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
        }

//creation of the main body of this class...

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

//adding the body to the world...

        World.add(world, this.body);
      }
      
//the display function to be mentoined in sketch.js to get displayed accordingly...

      display(){

//the abbreviation variables for the angles and positions of the class...

        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}