<template>
    <div class="bg-gray-900"  style="z-index: -1;">   
        
        <navibar-mobile class="menubar md:hidden"></navibar-mobile>

        <div class="bg-fixed bg-center relative mainBody w-screen mx-auto" 
            style="background-image: url('img/comingSoon/blur3.jpg'); z-index: 1"
            :class="{'open':showNav}">
            
            <div class="container w-screen flex flex-wrap items-center justify-between mx-0" >
                <navibar v-if="!mobileView"></navibar>

                <div class="container w-screen px-4 py-3 mx-auto flex flex-wrap items-center justify-between 
                        bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400" 
                    v-if="mobileView"
                    >

                    <div class="w-full relative flex justify-between lg:w-auto  px-4 items-center"
                        @click="showNav = !showNav">

                        <div class="cursor-pointer text-xl leading-none px-3 py-1 
                                border border-solid border-transparent rounded bg-transparent block 
                                md:hidden outline-none focus:outline-none " 
                                
                                id="burger">
                            <span class="block relative w-6 h-px rounded-sm bg-white"></span>
                            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        </div>
                        <a class="text-3xl font-medium leading-relaxed inline-block mx-5 
                                whitespace-nowrap text-white tracking-wider items-center flex"
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
import Home from "./official/home/home.vue";
import Navibar from "./official/home/Navbar.vue";
import NavibarMobile from "./official/home/NavbarMobile.vue";

export default {
    data: () => {
        return {
            mobileView: true,
            showNav: false
        }
    },
    methods: {
        handleView() {
            this.mobileView = window.innerWidth <= 990;
        }
    },
    components: {
        Home,
        Navibar,
        NavibarMobile,
    },
    created() {
        this.handleView();
        window.addEventListener('resize', this.handleView);
    }

}
</script>
<style>
.image{
    background: bottom center no-repeat;
    background-size: cover;
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