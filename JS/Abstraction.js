function Employee(name,age,basesalary)
{
    this.name=name;
    this.age=age;
    this.basesalary=basesalary;
    let monthlybonus=2500;

    let calculateFinalSalary=function()
    {
        let finalsalary=basesalary+monthlybonus;
        console.log('Final salary is '+finalsalary);
    }
    this.getEmpDetails = function()
    {
        console.log('name: '+this.name+' | age '+this.age);
        calculateFinalSalary();
    }
}

let E1=new Employee('vishwa',24,25000);
E1.getEmpDetails();

