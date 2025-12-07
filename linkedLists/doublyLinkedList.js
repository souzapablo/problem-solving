class DoubleLinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head;
        this.lenght = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.lenght++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
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
        const leader = this.traverseToindex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
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
        this.prev = null;
    }
}

let doublyLinkedList = new DoubleLinkedList(5);
doublyLinkedList.append(8);
doublyLinkedList.prepend(1);
doublyLinkedList.insert(22, 0);
doublyLinkedList.insert(10, 3);
doublyLinkedList.remove(2);

console.log(doublyLinkedList)
