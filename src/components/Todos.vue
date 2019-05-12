<template>
    <div class="todos">
        {{msg}}
        <div class="todos_input">
            <input type="text" @keyup.enter="addTask" v-model="task" placeholder="Введите задачу.."/>
        </div>
        <div class="todos_list">
            <div class="todos_item" :key="index"
                 v-for="(item, index) in todoList"
                 :class="{done: item.done}"
                 @dblclick="editTask(item)">
                <div class="view" v-if="!item.edit">
                    {{item.value}}<i class="icon" @click="changeTask(item)"></i>
                </div>
                <input type="text" class="edit"
                       v-if="item.edit"
                       v-model="item.value"
                       @keyup.enter="doneEdit(item)"
                       @blur="doneEdit(item)"/>
            </div>
        </div>
        <div class="todos_footer">
            <div class="todos_footer_item">Tasks: {{tasks}}</div>
            <div class="todos_footer_item">Done: {{tasksDone}}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    interface Todo {
        done: boolean;
        value: string;
        edit: boolean;
    }

    @Component
    export default class Todos extends Vue {
        @Prop() private msg!: string;

        private task: string = '';

        private todoList: Todo[] = [
            // {
            //     value: 'The first task',
            //     done: true,
            //     edit: false,
            // },
            // {
            //     value: 'The second task!',
            //     done: false,
            //     edit: false,
            // },
            // {
            //     value: 'The third task!',
            //     done: false,
            //     edit: false,
            // },
        ];

        private STORAGE_KEY: string = 'todos-storage';

        private get tasks(): number {
            return this.todoList.length;
        }

        private get tasksDone(): number {
            return this.todoList.filter((i) => i.done).length;
        }

        private mounted(): void {
            const item: string | null = localStorage.getItem(this.STORAGE_KEY);
            this.todoList = item ? JSON.parse(item) : [];
        }

        private editTask(item: Todo): void {
            item.edit = true;
            this.saveTask();
        }

        private changeTask(item: Todo): void {
            item.done = !item.done;
            this.saveTask();
        }

        private doneEdit(item: Todo): void {
            item.edit = false;
            this.saveTask();
        }

        private addTask() {
            const task: Todo = {
                value: this.task,
                done: false,
                edit: false,
            };
            this.todoList.push(task);
            this.task = '';
            this.saveTask();
        }

        private saveTask(): void {
            const result = JSON.stringify(this.todoList);
            localStorage.setItem(this.STORAGE_KEY, result);
        }
    }
</script>

<style lang="less" scoped>
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    .todos {
        width: 500px;
        margin: 0 auto;
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
        text-align: left;
        &_input {
            margin-bottom: 15px;

            input {
                width: 100%;
                padding: 5px;
            }
        }
        &_item {
            margin-bottom: 5px;
            &:last-child {
                margin-bottom: 20px;
            }

            .icon {
                position: relative;
                font-style: normal;
                cursor: pointer;
            }
            .icon::after {
                position: absolute;
                left: 0;
                top: 0;
                content: '\2715';
                display: inline-block;
                vertical-align: middle;
                margin-left: 10px;
            }

            &.done {
                text-decoration: line-through;

                && .icon::after {
                    content: '\21BA';
                }
            }
        }
        &_footer {
            padding-top: 10px;
            border-top: 1px solid #ccc;
            &_item {
                display: inline-block;
                margin-right: 15px;
            }
        }
    }
</style>