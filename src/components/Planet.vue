<style lang="less" scoped>
    .icon {
        width: 15px;
        height: 15px;
        display: inline-block;
        padding: 1px 5px;
        border-radius: 20px;
        border: 1px solid #5b6fa3;
        background-color: #ccc;
    }
</style>

<template>
    <li>
        {{name}} -
        <button @click="maxVisite++" v-if="maxVisite < 3">Посетить</button>
        Прилетел
        <div class="icon">{{maxVisite}}</div>
    </li>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    interface PlanetI {
        name: string;
        visits: number;
    }

    @Component
    export default class Planet extends Vue {
        @Prop()
        private info!: PlanetI;

        // private maxVisite: number = 0;

        private get name(): string {
            return this.info.name;
        }

        private get maxVisite(): number {
            return this.info.visits;
        }

        private set maxVisite(i: number) {
            this.info.visits = i;
            // console.log(i);
            this.$emit('update');
        }
    }
</script>