/*export class Stack<V> {
    private arr: V[] = [];

    public push(key: V): void {
        this.arr.push(key);
    }

    public top(): V {
        return this.arr[this.arr.length - 1];
    }

    public pop(): V[] {
        this.arr.pop();
        return this.arr;
    }

    public size(): number {
        return this.arr.length;
    }

    public empty(): boolean {
        return this.arr.length === 0;
    }
}*/

import {LinkedList} from '@/services/LinkedList';

export class Stack<V> {
    private list: LinkedList<V> = new LinkedList();

    public push(key: V): void {
        this.list.addAtHead(key);
    }

    public top(): V {
        return this.list.peek();
    }

    public pop(): LinkedList<V> {
        this.list.deleteAtHead();
        return this.list;
    }

    public size(): number {
        return this.list.getLength();
    }

    public empty(): boolean {
        return this.list.getLength() === 0;
    }
}

// let st: Stack<string> = new Stack();
//
// st.push('a');
// st.push('b');
// st.push('c');
//
// let a: string = st.top();
//
// console.log(a);
// console.log(st.pop());
//
//
// let arrStr:string[] = "({[(){}]})".split('');
