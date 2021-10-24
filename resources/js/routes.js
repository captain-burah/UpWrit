import VueRouter from "vue-router";
import Classes from "./landing/classes/Classes";
import Classroom from "./landing/classroom/Classroom";
import DigitalMarketing from "./version2/pages/DigitalMarketing.vue";
import Browse from "./landing/browser/Browse";
import WebDesign from "./version2/pages/WebDesign.vue";
import GraphicDesign from "./version2/pages/GraphicDesign.vue";
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
    {
        path: "/graphic-design",
        component: GraphicDesign,
        name: "graphic-design"
    },
    // {
    //     path: "/",
    //     component: Landing,
    //     name: "landing",
    // },
];

const router = new VueRouter({
    routes, 
    mode: "history",
});

export default router;