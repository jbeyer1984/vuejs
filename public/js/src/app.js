import Todo from "/public/js/src/todo.js";
import WrapperTodo from "/public/js/src/wrapperTodo.js";

export default {
    name: 'App',
    components: {
        Todo,
        WrapperTodo
    },
    template: `
        <div>
            <Todo></Todo>
            <WrapperTodo></WrapperTodo>    
        </div>
        
    `
};