require('./bootstrap');

import router from "./routes";
import VueRouter from "vue-router";
import Vue from "vue";
import Index from "./Index";
import ComingSoon from "./ComingSoon";

window.Vue = require('vue');

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": Index,
        "comingsoon" : ComingSoon
    }
});