<template>
    <div class="font-Poppins bg-white" style="z-index: -1;">

        
            <!-- Navbar -->
        <navibar-mobile class="menubar md:hidden"></navibar-mobile>

        <div class="bg-fixed bg-center relative mainBody w-full mx-0 px-0" 
            :class="{'open':showNav}">
            <!-- Desktop View navbar -->
            <div class="w-screen flex flex-wrap items-center justify-between mx-0" >
                
                <!-- Mobile View navbar -->
                <navibar v-if="!mobileView"></navibar>

                <!-- Mobile View Navbar Switcher -->
                <div class="w-screen py-3 mx-auto flex flex-wrap items-center justify-between 
                        bg-white shadow-md" 
                    v-if="mobileView"
                    >

                    <!-- Mobile View Navbar Switcher Items -->
                    <div class="w-full relative flex justify-between lg:w-auto  px-4 items-center"
                        @click="showNav = !showNav">

                        <div class="cursor-pointer text-xl leading-none px-3 py-1 
                                border border-solid border-transparent rounded bg-transparent block 
                                md:hidden outline-none focus:outline-none " 
                                
                                id="burger">
                            <span class="block relative w-6 h-px rounded-sm bg-gray-600"></span>
                            <span class="block relative w-6 h-px rounded-sm bg-gray-600 mt-1"></span>
                            <span class="block relative w-6 h-px rounded-sm bg-gray-600 mt-1"></span>
                        </div>
                        <a class="text-3xl font-medium leading-relaxed inline-block mx-5 
                                whitespace-nowrap text-gray-600 tracking-wider items-center flex"
                            href="/"
                            style="font-family: Raleway">
                            UpWrit
                        </a>                      
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import Navibar from "./version2/home/Navbar.vue";
import NavibarMobile from "./version2/home/NavbarMobile.vue";

// import countdown from "./Countdown.vue";

export default {
    components: {
        Navibar,
        NavibarMobile,
    },
    data() {
        return {
            mobileView: true,
            showNav: false,
        };
    },
    methods: {
        handleView() {
            this.mobileView = window.innerWidth <= 990;
        }
    },
    created() {
        this.handleView();
        window.addEventListener('resize', this.handleView);
    }
}
</script>
<style>

.imageContainer img{
    animation: kenburns 5s infinite;
}

@keyframes kenburns {
    0% {
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    95% {
        transform: scale3d(1.1, 1.1, 1.1) translate3d(-25px, 0px, 0px);
        animation-timing-function: ease-in;
        opacity: 1;
    }
    100%{
        transform: scale3d(1, 1, 1);
        opacity: 0;
    }

}

.navbar {
    backdrop-filter: saturate(130%) blur(3px);
}
.nav-link{
    color: black;
}
.open {
    transform: translateX(300px);
}
.menubar {
    position: absolute
}
.mainBody {
    transition: 0.5s transform cubic-bezier(0,.12,.14,1)
}

</style>