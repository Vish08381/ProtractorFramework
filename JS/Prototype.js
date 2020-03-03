let EmployeeDetails = function(name,age){
    this.name=name;
    this.age=age;
    

    this.getName=function(){
        return this.name;
    }
    this.getAge=function(){
        return this.age; 
    }
}

let emp1=new EmployeeDetails('vish',24);
let emp2=new EmployeeDetails('VK',25); 

console.log(emp1.getName());
console.log(emp1.getAge());


console.log(emp2.getName()); 
console.log(emp2.getAge());
