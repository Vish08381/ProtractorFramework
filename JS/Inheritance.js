class car
{
    setName(name)
    {
        this.name=name;
    }

    startEngine()
    {
        console.log('start the '+this.name+' Engine');
    }
    stopEngine()
    {
        console.log('Stop the '+this.name+' engine');
    }
}

class Toyota extends car
{
    Topspeed(speed)
    {
      console.log('Top speed for '+this.name+' is '+speed);
    }
}
let mycar= new Toyota();
mycar.setName('bmw'); 
mycar.startEngine();
mycar.stopEngine();
mycar.Topspeed(100);
