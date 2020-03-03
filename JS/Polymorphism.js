class Animal{
   
    constructor(name){
        this.name=name;
    }

    eats()
    {
        console.log('Animals eats food')
    }

};

class Alligator extends Animal
{
    eats(){
    //super.eats();   //this will call super class 
    console.log('Animal eats fish');
    }
}
let l1=new Alligator('wale');
l1.eats();