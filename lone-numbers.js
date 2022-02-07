let numbers = "122343566"

function loneNumber(num){
  let numSet = new Set(num)
  
  
  if(num.length == new Set(num).size){
    return "no any lone number" 
  }
  
  let res = []
  
  for (var i = 0; i < num.length; i++) {
    let arr = num.split("")
    
    arr.splice(i, 1)
   
    if(!arr.toString().includes(num[i])){
      res.push(num[i])
    }
  }
  return res
}

console.log(numbers,"---loneumbers--->",loneNumber(numbers))