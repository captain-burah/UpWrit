import VueRouter from "vue-router";
import Classes from "./landing/classes/Classes";
import Classroom from "./landing/classroom/Classroom";
import DigitalMarketing from "./version2/pages/DigitalMarketing.vue";
import Browse from "./landing/browser/Browse";
import WebDesign from "./version2/pages/WebDesign.vue";
import ComingAbout from "./comingSoon/About";
import ComingContact from "./comingSoon/Contact";
import Home from "./official/home/home.vue";
import HomeV2 from "./version2/home/Home.vue";



const routes = [
    
    // {
    //     path: "/",
    //     component: ComingLanding,
    //     name: "cominglanding",
    // },
    {
        path: "/",
        component: HomeV2,
        name: "home",
    },
    {
        path: "/digital-marketing",
        component: DigitalMarketing,
        name: "digital-marketing"
    },
    {
        path: "/web-design-development",
        component: WebDesign,
        name: "web-design-development"
    },
    // {
    //     path: "/",
    //     component: Landing,
    //     name: "landing",
    // },
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