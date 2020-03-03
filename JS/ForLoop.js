let fruits=['apple','banana','grapes'];
let x;
 for(x in fruits)
 {
      console.log(fruits[x]); //it will display the fruits name
    //  console.log(x); // it will display the index
 }  


 for(x of fruits)
 {
     console.log(x); // it won't display the index directoly it will show fruits names
 }