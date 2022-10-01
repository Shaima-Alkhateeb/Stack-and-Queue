class Queue {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to the queue
    enqueue(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`);
        this.count += 1;
        return this.count - 1;
    }

    // Return and remove the first element in the queue
    // Return undefined if queue is empty
    dequeue() {
        if (this.count == 0) return undefined;
        let deleteItem = this.items[0];
        this.items = this.items.slice(1);
        this.count -= 1;
        console.log(`${deleteItem} removed`);
        return deleteItem;
    }

    // Check the first element in the queue
    peek() {
        console.log(`First element is ${this.items[0]}`);
        return this.items[0];
    }

    // Check if queue is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Queue is empty' : 'Queue is NOT empty');
        return this.count == 0;
    }

    // Check size of queue
    size() {
        console.log(`${this.count} elements in queue`);
        return this.count;
    }

    // Print elements in queue
    print() {
        let str = '';
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }
        return str;
    }


}

const queue = new Queue();

// Testing
queue.isEmpty();

queue.enqueue(100);
queue.peek();
queue.enqueue(200);
queue.enqueue(300);

queue.size();

console.log('The Queue :', queue.print());


queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.isEmpty();

// to run this code => node Queue

