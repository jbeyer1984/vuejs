export const VueRoot = function () {
    let me;
    return new Vue({
        el: '#content',
        data: {
            newTask: '',
            tasks: []
        },
        beforeCreate: function() {
            me = this;
        },
        created: function() {
        },
        methods: {
            addTask: function(text) {
                if ('' === text) {
                    return;
                }
                me.tasks.push(text);
            }
        }
    });
};
VueRoot();
