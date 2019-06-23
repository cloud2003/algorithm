<template>
    <div class="container">
        <div class="total">{{total}}</div>
        <template v-for="item in food">
            <FoodComponent @click="onCLick(item.title)" :title="item.title"></FoodComponent>
        </template>

        <ul>
            <li v-for="item in log">{{item}}</li>
        </ul>

        <button @click="reset">Reset</button>
        <pre>{{ $data }}</pre>
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import FoodComponent from '@/components/FoodComponent.vue';

    interface Food {
        title: string;
        // count: number;
    }

    @Component({
        components: {FoodComponent},
    })
    export default class BookExample extends Vue {

        private total: number = 0;
        private log: string[] = [];

        private food: Food[] = [{
            title: 'Chicken',
            // count: 1,
        }, {
            title: 'Beef',
            // count: 0,
        }, {
            title: 'Pork',
            // count: 10,
        }];

        private onCLick(title: string): void {
            this.total++;

            this.log.push(title + ' got a point');
            // this.food.filter((f) => f.title === title).map((f) => f.count = e);
        }

        private reset(): void {
            this.total = 0;
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
