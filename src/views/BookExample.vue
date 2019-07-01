<template>
    <div class="container">
        <div class="list">
            <span class="list_item">
                <router-link to="/food">8.4</router-link>
            </span>
            <span class="list_item">
                <router-link to="/chariot">8.7</router-link>
            </span>
        </div>

        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class BookExample extends Vue {

    }
</script>


<style lang="less" scoped>
    .list {
        margin-bottom: 20px;

        &_item {
            margin: 0 10px;
        }
    }
</style>
