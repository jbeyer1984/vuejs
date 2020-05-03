import Todo from "/public/js/src/todo.js";
import WrapperTodo from "/public/js/src/wrapperTodo.js";
// console.log('** WrapperTodo', WrapperTodo);

export default function() {
    let todo = Todo();
    let wrapperTodo = WrapperTodo();

    let components = {};
    let objects = [todo, wrapperTodo];
    for (let obj of objects) {
        components[obj.name] = obj;
    }

    let me;
    let App = {
        name: 'App',
        components: components,
        // todo: todo,
        data() {
            return {
                todo: todo,
                wrapperTodo: wrapperTodo
            }
        },
        beforeCreate: function() {
            me = this;
        },
        methods: {
            showTodo: function() {
                me.todo.show();
                // me.wrapperTodo.todo.show();
            }
        },
        template: `
            <div>
                <input type="button" name="showTodo" value="show todo" @click.prevent="showTodo()"/>
                <Todo></Todo>
                <WrapperTodo></WrapperTodo>    
            </div>
        `
    };

    let obj = Object.create(App);
    obj.name = obj['name'];

    return obj;
};