export class NodeEl {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.data = val;
    }
    getNode() {
        return this.data;
    }
    setNode(el) {
        this.data = el;
        return this;
    }
    setNext(el) {
        this.next = el;
        return this;
    }
    print() {
        // console.log(this.data);
    }
}
//# sourceMappingURL=NodeEl.js.map