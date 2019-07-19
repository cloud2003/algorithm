<template>
    <div>
        <div :style="{'background-color': bgColor}">
            Выбери цвет конюшни <input type="color" @change="changeColor($event)"/>
        </div>

        <!--        <ul class="stories" v-if="stories.length > 0">-->
        <!--            <li v-for="item in stories">{{item.id}} - {{item.plot}} ({{item.writer}})</li>-->
        <!--        </ul>-->

        <table class="stories">
            <tr>
                <th>#</th>
                <th>Сюжет</th>
                <th>Автор</th>
                <th>Голоса</th>
                <th>Действия</th>
            </tr>
            <tr v-for="story in stories" :key="story.id">
                <td>{{story.id}}</td>
                <td>{{story.plot}}</td>
                <td>{{story.writer}}</td>
                <td>{{story.upvotes}}</td>
                <td>
                    <button type="button" @click="upvoteStory($event, story)" title="Голосовать">&#10003;</button>
                    <button type="button" @click="deleteStory($event, story)" title="Удалить">&#10007;</button>
                    <button type="button" @click="editStory($event, story)" title="Редактировать">|</button>
                </td>
            </tr>
        </table>
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import axios, {AxiosInstance} from 'axios';


    interface ServerResponse {
        data: ServerData;
    }

    interface ServerData {
        id: number;
        plot: string;
        upvotes: string;
        writer: string;
        created_at: string;
        updated_at: string;
    }

    @Component
    export default class ChariotView extends Vue {

        private bgColor: string = '';

        private stories: ServerData[] = [];

        private client: AxiosInstance = axios.create({
            baseURL: '/api/stories',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        private changeColor(e: any): void {
            this.bgColor = e.target.value;
        }

        private upvoteStory(e: any, s: ServerData): void {

            let vote: number = Number(s.upvotes);
            s.upvotes = (++vote).toString();

            this.client
                .patch<ServerData>(`/${s.id}`, s);
            // .then((r) => {
            //     console.log(r);
            // });
        }

        private deleteStory(e: any, s: ServerData): void {

            const confirmation: boolean = confirm('Удалить?');

            if (confirmation) {
                const index = this.stories.indexOf(s);
                this.stories.splice(index, 1);

                this.client.delete(`/${s.id}`);
            }
        }

        private editStory(e: any, s: ServerData): void {
            // this.client.patch(`${s.id}`, )
        }

        private mounted(): void {

            this.client.get<ServerData[]>('').then((response) => {
                // console.log(response);
                this.stories = response.data;
            });

        }
    }
</script>


<style lang="less" scoped>
    .stories {
        text-align: left;

        td, th {
            padding: 3px 5px 10px;
        }
    }
</style>
