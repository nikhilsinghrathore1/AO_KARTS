function rev(stack) {
  if (stack.length === 0) return;

  const top = stack.pop();

  rev(stack);

  insert_At_last(stack, top);
}

function insert_At_last(stack, element) {
  if (stack.length === 0) {
    stack.push(element);
    return;
  }

  const top = stack.pop();

  insert_At_last(stack, element);

  stack.push(top);
}



let name = ["sdf" , "llm" , "ao_learn" , "arweave" , "hacker house"]


let stack = [2, 3,4,5,6]; 

console.log("before reversing\n"+ name)
rev(name)
console.log("after reversing\n"+ name)