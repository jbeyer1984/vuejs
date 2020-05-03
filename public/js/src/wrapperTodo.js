import Todo from '/public/js/src/todo.js';

export default function() {
    let components = {};
    let todo = Todo();
    let objects = [todo];
    for (let obj of objects) {
        components[obj.name] = obj;
    }

    var me;
    let WrapperTodo = {
        name: 'WrapperTodo',
        components: components,
        todo: todo,
        beforeCreate: function() {
            me = this;
        },
        template: `
            <Todo></Todo>
        `
    };

    let obj = Object.create(WrapperTodo);
    obj.name = obj['name'];

    return obj;
}