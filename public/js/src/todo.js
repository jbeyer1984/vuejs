import t from './templates/todo.js';
// import Vue from '../lib/vue';
let me;
export default {
    name: 'Todo',
    data()
    {
        return {
            newTask: '',
            tasks: []
        }
    },
    beforeCreate()
    {
        me = this;
    },
    methods: {
        addTask: function (text) {
            if ('' === text) {
                return;
            }
            me.tasks.push(text);
        }
    },
    template: `
        <div id="content">
            <h1>TODO TASK</h1>
            <input type="text" value="" v-model="newTask"/>
            <input type="button" id="add" value="add task" @click.prevent="addTask(newTask)">
            <ul>
                <li v-for="task in tasks">
                    {{ task }}
                </li>
            </ul>
        </div>
    `
};