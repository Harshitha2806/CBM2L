class Dustbin {
    constructor(x, y) {
      var options = 
      {
          isStatic : true
      
      }

      this.x = x;
      this.y = y;
      this.dusbinWidth = 200;
      this.dustbinHeight=213;
      this.wallThickness=28;

    }
      this.image=loadImage('dustbingreen.png');
      this.body = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThikness, options);
      this.body2 = Bodies.rectangle(this.x,this. y, this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2,this.wallThickness, options);
      this.body3 = Bodies.rectangle(this.x,this. y, this.x+this.dustbinWidth, this.y-this.dustbinHeight/2, this.wallThickness,options);

      World .add(world,this.body);
      World. add(world,this.body2);
      World. add(world,this.body3);


    display(){

    var posBottom=this.bottomBody.position;
    var posLeft=this.leftWallBody.position;
    var poRight=this.rightWallBody.position;

      //var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(posLeft.x,posRight.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      Fill(225);
      rotate(angle);
      //image (this.image,0,0,this.width,this.height);
      pop ();




      push();
      translate(posRight.x,posRight.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(225)
      rotate(-1*angle)
      pop(); 


      push();
      translate(posBottom.x,posBottom.y+10);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(225);
      imageMode(CENTER);
      image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
      pop();
    }
  }
  