// import Vue from '../lib/vue';
import VueRoot from '/public/js/src/app.js';

// new Vue({
//     components: {
//         VueRoot
//     }
// });

new Vue({
    render: h => h(VueRoot),
}).$mount(`#app`);