<template>
    <div class="todos">
        {{msg}}

    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component // this shit is TOO important!!!
    export default class Smth extends Vue {
        @Prop() private msg!: string;

    }
</script>
