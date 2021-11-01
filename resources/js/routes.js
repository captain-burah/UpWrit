import VueRouter from "vue-router";
import Classes from "./landing/classes/Classes";
import Classroom from "./landing/classroom/Classroom";
import DigitalMarketing from "./version2/pages/DigitalMarketing.vue";
import Browse from "./landing/browser/Browse";
import WebDesign from "./version2/pages/WebDesign.vue";
import GraphicDesign from "./version2/pages/GraphicDesign.vue";
import FinancialAccounting from "./version2/pages/FinancialAccounting.vue";
import Careers from "./version2/pages/Careers.vue";
import ComingAbout from "./comingSoon/About";
import ComingContact from "./comingSoon/Contact";
import Home from "./official/home/home.vue";
import HomeV2 from "./version2/home/Home.vue";
import Ecommerce from "./version2/pages/Ecommerce.vue";
import Store from "./version2/pages/ecommerce/Store.vue";
import Category from "./version2/pages/ecommerce/Category.vue";
import Order from "./version2/pages/ecommerce/Order.vue";
import Product from "./version2/pages/ecommerce/Product.vue";
import ShoppingCart from "./version2/pages/ecommerce/ShoppingCart.vue";
import IntellectualProperty from "./version2/pages/Law.vue";



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
        path: "/ecommerce",
        component: Ecommerce,
        name: "ecommerce",
    },
    {
        path: '/storefront-pages', 
        component: Store,
        name: "storefront-pages"
    },
    {
        path: '/category-pages', 
        component: Category,
        name: "category-pages"
    },
    {
        path: '/shopping-cart-pages', 
        component: ShoppingCart,
        name: "shopping-cart-pages"
    },
    {
        path: '/product-pages', 
        component: Product,
        name: "product-pages"
    },
    {
        path: '/order-pages', 
        component: Order,
        name: "order-pages"
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
    {
        path: "/financial-accounting",
        component: FinancialAccounting,
        name: "financial-accounting"
    },
    {
        path: "/careers",
        component: Careers,
        name: "careers"
    },
    {
        path: "/intellectual-property",
        component: IntellectualProperty,
        name: "intellectual-property"
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
    scrollBehavior (to, from, savedposition) {
        if (savedposition){
            return savedposition;
        } else {
            const position = {};
            if (to.hash) {
                position.selector = to.hash;
                if (document.querySelector(to.hash)) {
                    return position;
                }
            } else {
                return { x: 0, y: 0 };
            }
        }
    }
});

export default router;