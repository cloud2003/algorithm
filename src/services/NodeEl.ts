export class NodeEl<V> {
    public next: NodeEl<V> | null = null;
    public prev: NodeEl<V> | null = null;
    private data: V;

    constructor(val: V) {
        this.data = val;
    }

    public getNode(): V {
        return this.data;
    }

    public setNode(el: V) {
        this.data = el;
        return this;
    }

    public setNext(el: NodeEl<V>) {
        this.next = el;
        return this;
    }

    public print(): V {
        return this.data;
        // console.log(this.data);
    }
}
