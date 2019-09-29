<template>
    <div class="ll-body">
        <input type="text" v-model="sizeList" @input="createdLinkedList($event.target.value)"/>

        <div>Result: <button @click="resultPrint">PRINT</button> {{resultList}}</div>
        <pre>
            {{list}}
        </pre>
    </div>
</template>


<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {LinkedList} from '@/services/LinkedList';

    @Component
    export default class LinkedListView extends Vue {
        @Prop({default: () => 0})
        private size!: number;

        private list: LinkedList<number> = new LinkedList<number>();
        private sizeList: number = this.size;
        private resultList: string = '';

        private resultPrint(): void {
            this.resultList = this.list.printList();
            // console.log(this.list.getLength());
            // console.log(this.list.peek());
        }

        private created(): void {
            this.createdLinkedList(this.sizeList);
        }

        private createdLinkedList(size: number): void {
            const ll: LinkedList<number> = new LinkedList<number>();
            for (let i = 1; i <= size; i++) {
                ll.addAtEnd(i);
            }
            this.list = ll;
        }
    }
</script>


<style lang="less" scoped>
    .ll-body {
        border: 1px solid #5b6fa3;
        min-width: 300px;
    }

</style>
