<template>
    <ul>
        <li>Связный список (Linked List)
            <ul>
                <li><u>Односвязный список</u></li>
                <li>Двусвязный список</li>
                <li>Кольцевой список</li>
            </ul>
        </li>
        <li>Массив (Array)</li>
        <li>Стек (Stack) <input type="text" v-model="arrayOfBraces"
                                @input="changeStr($event.target.value)"
                                :class="{green: flag, red: !flag}"/></li>
        <li>Очередь (Queue)</li>
        <li>Дерево (Tree)</li>
        <li>Граф (Graph)</li>
        <li>Префиксное дерево (Trie)</li>
        <li>Хэш-Таблица (Hash Table)</li>
    </ul>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {Stack} from '../services/stack';

    interface Brace {
        type: string;
        left: string;
        right: string;
    }

    @Component({})
    export default class DataStructures extends Vue {

        private arrayOfBraces: string = '';
        private flag: boolean = false;

        private changeStr(str: string): void {
            this.flag = this.isBalance(str);
        }

        private isBalance(str: string): boolean {
            const stack: Stack<string> = new Stack();
            const arr: string[] = str.split('');

            const braces: Brace[] = [
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
                if (braces.find((el: Brace) => value === el.left)) {
                    stack.push(value);
                } else {
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

        private getType(arr: Brace[], val: string): string {
            return arr.filter((el: Brace) => el.left === val || el.right === val).map((el: Brace) => el.type).concat()[0];
        }
    }
</script>


<style lang="less" scoped>
    ul {
        text-align: left;
    }

    * {
        outline: 0;
    }

    &.green {
        border-color: #19ff18;
    }

    &.red {
        border-color: #ff1c21;
    }

</style>
