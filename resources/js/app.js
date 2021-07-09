require('./bootstrap');

import "tailwindcss/tailwind.css"
import router from "./routes";
import VueRouter from "vue-router";
import Vue from "vue";
import Index from "./Index";
import ComingSoon from "./ComingSoon";

window.Vue = require('vue');
VueScrollTo = require('vue-scrollto');

Vue.use(VueRouter);

Vue.use(VueScrollTo, {
    container: "body",
    duration: 1000,
    easing: [.84,.01,.74,.99],
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": Index,
        "comingsoon" : ComingSoon
    }
});