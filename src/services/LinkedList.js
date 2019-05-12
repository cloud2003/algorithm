import { NodeEl } from '@/services/NodeEl';
/*
- Реверс связанного списка
- Определение цикла в связанном списке
- Возврат N элемента из конца в связанном списке
- Удаление дубликатов из связанного списка
*/
export class LinkedList {
    constructor() {
        this.length = 0;
        this.header = null;
        // Search — возвращает заданный элемент из списка
        // searchNode(pos: number): NodeEl<V> | null {
        //     let current: NodeEl<V> | null = this.header;
        //     let count: number = 1;
        //
        //     if (current) {
        //         if (pos > this.length || pos < 1 || this.length === 0) {
        //             throw new Error('Wrong position');
        //         } else {
        //             while (count < pos) {
        //                 count++;
        //                 console.log(current);
        //
        //                 current = current ? current.next : null;
        //             }
        //             return current;
        //         }
        //     } else {
        //         return null;
        //     }
        // }
    }
    // public getValue(pos: number = 1): NodeEl<V> | null {
    //     if (this.header === null) {
    //         throw new Error('list is empty');
    //     }
    //     let current: NodeEl<V> | null = this.header;
    //     let currPos: number = 1;
    //
    //     while (pos > currPos) {
    //         ++currPos;
    //         const next: NodeEl<V> |null = current ? current.next : null;
    //         current = next;
    //         console.log(current ? current.getNode() : null);
    //     }
    //     // console.log(current.getNode());
    //     return current;
    // }
    peek() {
        if (!this.header) {
            throw new Error('List is Empty');
        }
        return this.header.getNode();
    }
    // addAtHead - Вставка элемента в начало списка
    addAtHead(el) {
        const node = new NodeEl(el);
        if (this.header) {
            node.next = this.header;
        }
        this.header = node;
        this.length++;
        return node;
    }
    // addAtEnd - Вставка заданного элемента в конец списка
    addAtEnd(el) {
        const node = new NodeEl(el);
        let currentNode = this.header;
        if (!currentNode) {
            this.header = node;
            this.length++;
            return node;
        }
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this.length++;
        return node;
    }
    // DeleteAtHead — удаляет первый элемент списка
    deleteAtHead() {
        let current = this.header;
        if (current) {
            this.header = current.next;
            current = null;
            this.length--;
        }
    }
    // Delete — удаляет заданный элемент из списка
    // public delete(pos: number) {}
    // isEmpty — возвращает True, если связанный список пуст
    isEmpty() {
        return this.length < 1;
    }
    getLength() {
        return this.length;
    }
    printList(val = this.header) {
        const current = val;
        if (!current) {
            return;
        }
        else {
            current.print();
            this.printList(current.next);
        }
    }
}
const linkedList = new LinkedList();
for (let i = 1; i <= 5; i++) {
    linkedList.addAtEnd(i);
}
// linkedList.addAtHead(888);
// linkedList.addAtHead(777);
// linkedList.deleteAtHead();
// const xxx = linkedList.getValue(5);
// console.log(xxx);
// linkedList.printList();
// linkedList.searchNode(2);
//# sourceMappingURL=LinkedList.js.map