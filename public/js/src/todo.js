import t from './templates/todo.js';
// import Vue from '../lib/vue';

export default function() {
    let me;
    let Todo = {
        name: 'Todo',
        data()
        {
            return {
                see: false,
                newTask: '',
                tasks: []
            }
        },
        beforeCreate()
        {
            me = this;
        },
        show: function() {
            me.see = true;
        },
        hide: function() {
            me.see = false;
        },
        methods: {
            shouldShow: function() {
                return true === me.see;
            },
            // show: function() {
            //     me.see = true;
            // },
            addTask: function (text) {
                if ('' === text) {
                    return;
                }
                me.tasks.push(text);
            }
        },
        template: `
        <div class="todo" v-show="shouldShow()">
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

    let obj = Object.create(Todo);
    obj.name = obj['name'];

    return obj;
}
// let Todo = Todo();
// export Todo();