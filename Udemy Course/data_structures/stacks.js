class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top;

    }
    push(value){
        let newNode = new Node(value);
        if(this.length === 0){
            this.bottom = newNode;
        }
        newNode.next =  this.top;
        this.top = newNode;
        this.length++
        return this
    }
    pop(){
        if(!this.top){
            return null;
        }
        if(this.top == this.bottom){
            this.bottom = null;
        }
        this.top = this.top.next
        this.length--;
        return this.top
    }
    isEmpty(){
        if(this.top){
            return false
        }else{
            return true
        }

    }
  }
  
  const myStack = new Stack();
  
  myStack.push('Discord')
  myStack.push('Udemy')
  console.log(myStack.push('google'))
  console.log(myStack.peek())
  console.log(myStack.isEmpty())
  console.log(myStack.pop())
  console.log(myStack.pop())
  console.log(myStack.pop())
  console.log(myStack.isEmpty())
  //Discord
  //Udemy
  //google
  