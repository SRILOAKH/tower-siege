class RedBox extends Box{
    constructor(x, y){
        super(x,y,20,30);
        this.Visibility = 255;
      }
    display(){
    console.log(this.body.speed);
    
    if(this.body.speed < 3){
      super.display();
    
    }
    else{
      //do nothing
      World.remove(world,this.body);
      push();
    this.Visibility=this.Visibility - 5;
    tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
    
    
    
    
    }
    };