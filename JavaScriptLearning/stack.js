class Stack{
    constructor(){
        this.item =[]
        this.count = 0
    }
    push(element){
        this.item[this.count] = element
        this.count++
        return `Element added ${element} to position ${this.count-1}`
    }
    displayLastElement(){
        return `Elements are ${this.item}`
    }
    pop(){
        let deleteItem = this.item[this.count - 1]
        this.count-=1
        return `Element ${deleteItem} is deleted, Updated Stack is ${this.item}`
    }
    peek(){
        let elements = this.item[this.count-1]
        return `Top Element is ${elements}`
    }
}
const stack= new Stack()
console.log(stack.push(100))
console.log(stack.push(200))
console.log(stack.push(300))
console.log(stack.push(400))
// console.log(stack.displayLastElement())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.peek())
