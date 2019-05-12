<template>
    <div class="about">
        <h1>This is an about page</h1>
        <Todos msg="Print task:"/>

        <Smth msg="123" />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Todos from '@/components/Todos.vue'; // @ is an alias to /src
    import Smth from '@/components/Smth.vue';

    @Component({
        components: {
            Todos, Smth,
        },
    })
    export default class About extends Vue {
    }
</script>