<template>
    <div class="home">
        <ul>
            <Planet v-for="(planet, index) in planets"
                    :info="planet"
                    :key="index"
                    @update="onUndate(index)"></Planet>
        </ul>
        <!--pre>{{ $data }}</pre-->
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Question from '@/components/Question.vue';
    import Planet from '@/components/Planet.vue';

    interface PlanetI {
        name: string;
        visits: number;
    }

    @Component({
        components: {
            Question, Planet,
        },
        // filters: {
        //     snitch(value: Hero): string {
        //         return `${value.secretId} - это ${value.firstname} ${value.lastname}`;
        //     },
        // },
    })
    export default class QuestionList extends Vue {
        private planets: PlanetI[] = [
            {
                name: 'Меркурий',
                visits: 0,
            },
            {
                name: 'Венера',
                visits: 0,
            },
            {
                name: 'Марс',
                visits: 0,
            },
            {
                name: 'Юпитер',
                visits: 0,
            },
        ];

        private onUndate(i: number): void {
            // console.log(this.planets[i].name, this.planets[i].visits);
        }
    }
</script>
