// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.length = 0;
    }
    push(value){
        let newNode = new Node(value);
        let oldTop = this.top;
        newNode.next = oldTop;
        this.top = newNode;
        this.length++;
        return this.length;
    }
    pop(){
        if(this.length === 0) return null;
        let oldValue = this.top.value;
        if(this.length === 1) {this.top = null;
        }else{
            this.top = this.top.next;
        }
        this.length--;
        return oldValue;

    }

    size(){
        return this.length;
    }


}

exports.Node = Node;
exports.Stack = Stack;
