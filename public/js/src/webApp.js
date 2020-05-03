// import Vue from '../lib/vue';
import VueRoot from '/public/js/src/app.js';

// new Vue({
//     components: {
//         VueRoot
//     }
// });
let vueRoot = VueRoot();
new Vue({
    render: h => h(vueRoot),
}).$mount(`#app`);