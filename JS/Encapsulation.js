class Employee
{
    setEmpDetails(Name,id,phnum)
    {
        this.Name=Name;
        this.id=id;
        this.phnum=phnum;
    }

    getEmpid()
    {
        return this.id;
    }
    getEmpName()
    {
        return this.Name;
    }
    getEmpphnum()
    {
        return this.phnum;
    }

}

let Emp1=new Employee();

Emp1.setEmpDetails('vish',8787,87835363636);

console.log(Emp1.getEmpName());
console.log(Emp1.getEmpid());
console.log(Emp1.getEmpphnum());