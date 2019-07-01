<template>
    <div class="container">

        <div class="total">{{total}}</div>
        <template v-for="item in food">
            <FoodComponent @click="onCLick(item.title)" :title="item.title" :count="item.count"></FoodComponent>
        </template>

        <button @click="reset">Reset</button>

        <hr/>
        <ul>
            <li v-for="item in log">{{item}}</li>
        </ul>

        <pre>{{ $data }}</pre>
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import FoodComponent from '@/components/FoodComponent.vue';

    @Component({
        components: {FoodComponent},
    })
    export default class FoodView extends Vue {

        private log: string[] = [];

        private food: Array<{title: string, count: number}> = [{
            title: 'Chicken',
            count: 1,
        }, {
            title: 'Beef',
            count: 0,
        }, {
            title: 'Pork',
            count: 10,
        }];

        private get total(): number {
            return this.food.reduce((a, b) => {
                return a + b.count;
            }, 0);
        }

        private onCLick(title: string): void {
            // this.total++;
            this.food.filter((i) => i.title === title).map((i) => i.count++);
            this.log.push(title + ' got a point');
            // this.food.filter((f) => f.title === title).map((f) => f.count = e);
        }

        private reset(): void {
            // this.total = 0;
            this.food.map((i) => i.count = 0);
            this.log = [];
        }
    }
</script>


<style lang="less" scoped>
    .total {
        font-weight: bold;
        font-size: 1em;
    }

</style>
