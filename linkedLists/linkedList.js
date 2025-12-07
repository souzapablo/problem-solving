class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head;
        this.lenght = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.lenght++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.lenght++;
    }

    insert(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index === this.lenght - 1) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);
        const targetNode = this.traverseToindex(index - 1);
        newNode.next = targetNode.next;
        targetNode.next = newNode;
        this.lenght++;
    }

    remove(index) {
        const leader = this.traverseToindex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.lenght--;
    }

    traverseToindex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let linkedList = new LinkedList(5);
linkedList.append(8);
linkedList.prepend(1);
linkedList.insert(22, 0);
linkedList.insert(10, 4);
linkedList.remove(2);

console.log(linkedList.printList())
