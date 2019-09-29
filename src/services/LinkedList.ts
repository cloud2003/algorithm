import {NodeEl} from '@/services/NodeEl';

/*
- Реверс связанного списка
- Определение цикла в связанном списке
- Возврат N элемента из конца в связанном списке
- Удаление дубликатов из связанного списка
*/


export class LinkedList<V> {
    private length: number = 0;
    private header: NodeEl<V> | null = null;

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

    public peek(): V {
        if (!this.header) {
            throw new Error('List is Empty');
        }
        return this.header.getNode();
    }

    // addAtHead - Вставка элемента в начало списка
    public addAtHead(el: V): NodeEl<V> {
        const node: NodeEl<V> = new NodeEl<V>(el);

        if (this.header) {
            node.next = this.header;
        }
        this.header = node;
        this.length++;
        return node;
    }

    // addAtEnd - Вставка заданного элемента в конец списка
    public addAtEnd(el: V): NodeEl<V> {
        const node: NodeEl<V> = new NodeEl<V>(el);
        let currentNode: NodeEl<V> | null = this.header;

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
    public deleteAtHead(): NodeEl<V> | null {
        let current: NodeEl<V> | null = this.header;
        if (current) {
            this.header = current.next;
            current = null;
            this.length--;
            return this.header;
        }
        return current;
    }

    // Delete — удаляет заданный элемент из списка
    // public delete(pos: number) {}

    // isEmpty — возвращает True, если связанный список пуст
    public isEmpty(): boolean {
        return this.length < 1;
    }

    public getLength(): number {
        return this.length;
    }

    public printList(val: NodeEl<V> | null = this.header, str: string = ''): string {
        // console.log('PRINT LL');
        const current: NodeEl<V> | null = val;

        if (!current) {
            return str;
        } else {
            str += current.print();
            if (current.next) {
                str += ' -> ';
            }
            return this.printList(current.next, str);
        }
    }

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

const linkedList = new LinkedList();
for (let i = 1; i <= 5; i++) {
    linkedList.addAtEnd(i);
}

// linkedList.addAtHead(888);
// linkedList.addAtHead(777);
// linkedList.deleteAtHead();
// const xxx = linkedList.printList();
// console.log(xxx);

// console.log(linkedList.printList());
// linkedList.searchNode(2);
