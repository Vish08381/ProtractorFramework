// let numbers=[1,2,3,4,5];
// console.log(numbers);

// let fruits=['Apple','Banana','Mango'];
// console.log(fruits);
// console.log(fruits[1]);

let car= new Array('Ford','Toyota','Mercedes');
console.log(car);
 console.log(car[2]);
 car[1]='new model';
 console.log(car); 
  car.push('xyz');  // push will add element
  console.log(car);
  console.log(car.length);
  car.pop();  // pop will remove last element
  console.log(car);
  car.shift(); // shift will remove the first element
  console.log(car); 
  car.unshift('bkt');// unshift will add element at the first place
  console.log(car);

  delete car[1]; // it will remove the index 1 element but in that place item will empty we can add later but that index won't delete
  console.log(car);
  car[1]='abcd';
  console.log(car);

  car.splice(1,2); // splice will remove element there splice(1(index),2(the num of elements to removed from mention index))
  console.log(car);
    
  car.splice(2,0,'vvv','aaa'); //splice here i.e splice(2(index num),0(total num of elements to remove,'vvv'(add this element into array),'aaa'(add this element into array))) 
  console.log(car); 

  let myCars=car.slice(0,2);  // myCars is a new Array where adopted from car array with conditions (0(from index),2(total num of elements to adapt to myCar Array))
  console.log(car);
  console.log(myCars);

  let evenNumbers=[2,4,6,8];
  let oddNumbers=[3,5,7,9];
  let primeNumbers=[2,3,5,7];
  let numbers=evenNumbers.concat(oddNumbers,primeNumbers);
  console.log(numbers);

  



