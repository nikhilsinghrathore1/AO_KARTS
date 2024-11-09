function reverseStack(stack) {
  if (stack.length === 0) return;

  const top = stack.pop();

  reverseStack(stack);

  insertAtBottom(stack, top);
}

function insertAtBottom(stack, element) {
  if (stack.length === 0) {
    stack.push(element);
    return;
  }

  const top = stack.pop();

  insertAtBottom(stack, element);

  stack.push(top);
}





let stack = [2,3,4,5,6]; 

console.log("before reversing"+ stack)
reverseStack(stack)
console.log("after reversing"+ stack)