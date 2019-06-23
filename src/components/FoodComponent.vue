<template>
    <div class="food-box" @click="onClick">
        {{title}} => {{count}}
    </div>
</template>


<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class FoodComponent extends Vue {
        @Prop({default: ''})
        private title!: string;

        private count: number = 0;

        private onClick(): void {
            this.count++;
            this.$emit('click');
        }
    }
</script>


<style lang="less" scoped>
    .food-box {
        display: inline-block;
        margin: 0 10px;
        border: 1px solid slategrey;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
        /*pointer-events: none;*/
        user-select: none;
    }
</style>
