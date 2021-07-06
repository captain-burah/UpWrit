import VueRouter from "vue-router";
import Classes from "./landing/classes/Classes";
import Classroom from "./landing/classroom/Classroom";
import Landing from "./landing/Landing";
import Browse from "./landing/browser/Browse";
import ComingLanding from "./comingSoon/Landing";
import ComingAbout from "./comingSoon/About";
import ComingContact from "./comingSoon/Contact";


const routes = [
    
    // {
    //     path: "/",
    //     component: ComingLanding,
    //     name: "cominglanding",
    // },
    {
        path: "/about",
        component: ComingAbout,
        name: "comingabout"
    },
    {
        path: "/contact",
        component: ComingContact,
        name: "comingcontact"
    },
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
    },
    {
        path: "/browse",
        component: Browse,
        name: "browse",
    }
];

const router = new VueRouter({
    routes, 
    mode: "history",
});

export default router;