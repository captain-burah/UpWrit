import VueRouter from "vue-router";
import Classes from "./landing/classes/Classes";
import Classroom from "./landing/classroom/Classroom";
import Landing from "./landing/Landing";

const routes = [
    
    {
        path: "/",
        component: Landing,
        name: "landing",
    },
    {
        path: "/classes",
        component: Classes,
        name: "classes",
    },
    {
        path: "/classroom/:id",
        component: Classroom,
        name: "classroom",
    }
];

const router = new VueRouter({
    routes, 
    mode: "history",
});

export default router;