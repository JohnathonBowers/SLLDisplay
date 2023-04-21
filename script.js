/*

Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!

Examples:

SLL1 = new SLL()

SLL1.addFront(76) => Node { data: 76, next: null }

SLL1.addFront(2) => Node { data: 2, next: Node { data: 76, next: null } }

SLL1.display() => "2, 76"

SLL1.addFront(11.41) => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }

SLL1.display() => "11.41, 2, 76"

*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    removeFront() {
        if(!this.head) {
            return null;
        }
        this.head = this.head.next;
        return this;
    }
    front() {
        if(this.head) {
            return this.head.data;
        }
        return null;
    }
    display() {
        if(!this.head) {
            return null;
        } else {
            let runner = this.head;
            let displayString = "";
            while(runner !== null) {
                displayString += runner.data;
                if(runner.next !== null) {
                    displayString += ", "
                }
                runner = runner.next;
            }
            return displayString;
        }
    }
}