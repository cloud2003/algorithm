import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { Stack } from '../services/stack';
let DataStructures = class DataStructures extends Vue {
    constructor() {
        super(...arguments);
        this.arrayOfBraces = '';
        this.flag = false;
    }
    changeStr(str) {
        this.flag = this.isBalance(str);
    }
    isBalance(str) {
        const stack = new Stack();
        const arr = str.split('');
        const braces = [
            {
                type: 'round',
                left: '(',
                right: ')',
            },
            {
                type: 'braces',
                left: '{',
                right: '}',
            },
            {
                type: 'square',
                left: '[',
                right: ']',
            },
        ];
        for (const value of arr) {
            if (braces.find((el) => value === el.left)) {
                stack.push(value);
            }
            else {
                if (stack.empty()) {
                    return false;
                }
                if (this.getType(braces, stack.top()) === this.getType(braces, value)) {
                    stack.pop();
                }
            }
        }
        return stack.empty();
    }
    getType(arr, val) {
        return arr.filter((el) => el.left === val || el.right === val).map((el) => el.type).concat()[0];
    }
};
DataStructures = tslib_1.__decorate([
    Component({})
], DataStructures);
export default DataStructures;
//# sourceMappingURL=DataStructures.vue.js.map