<template>
<div id="navigation">
    <nav class="md:fixed relative w-screen flex flex-wrap items-center justify-between px-2 py-4 
            bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-0 z-10 shadow-lg mx-0">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto  px-4 md:static md:block 
                    md:justify-start items-center">
                <div class="block px-3 flex">
                    <img 
                        src="img/comingSoon/19.jpg" 
                        class="rounded-xl inline-block items-center mx-1 border-2 border-gray-900" 
                        height="40px" 
                        width="45px" 
                        alt="Logo"
                    />
                    <a class="text-3xl font-medium leading-relaxed inline-block mx-5 py-2 
                            whitespace-nowrap text-white tracking-wider items-center flex" 
                        href="/"
                        style="font-family: Raleway">
                        UpWrit &nbsp;| <span class="text-lg">&nbsp;solutions</span>
                    </a>
                </div>
                <div class="cursor-pointer text-xl leading-none px-3 py-1 
                        border border-solid border-transparent rounded bg-transparent block 
                        md:hidden outline-none focus:outline-none " 
                        type="button"
                        id="burger">
                    <span class="block relative w-6 h-px rounded-sm bg-white"></span>
                    <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                </div>
            </div>

            <div class="lg:flex md:block hidden flex md:justify-end" 
                id="menu"
            >

                <ul class="flex flex-col lg:flex-row list-none mr-auto md:justify-end">
                    <li class="nav-item">
                        <a class="px-5 mx-4 py-2 flex items-center text-lg font-bold 
                                leading-snug text-white hover:opacity-75" 
                            href="#pablo"
                            style="font-family: Raleway;">
                            <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /> 
                            <span class="ml-2">Home</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-5 mx-4 py-2 flex items-center text-lg font-bold 
                                leading-snug text-white hover:opacity-75" 
                            href="#pablo"
                            style="font-family: Raleway;">
                            <span class="ml-2">About</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-5 mx-4 py-2 flex items-center text-lg font-bold 
                                leading-snug text-white hover:opacity-75" 
                            href="#pablo"
                            style="font-family: Raleway;">
                            <span class="ml-2">Services</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-5 mx-4 py-2 flex items-center text-lg font-bold 
                                leading-snug text-white hover:opacity-75" 
                            href="#pablo"
                            style="font-family: Raleway;">
                            <span class="ml-2">Talk to Us</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-5 mx-4 py-2 flex items-center text-lg font-bold 
                                leading-snug text-white hover:opacity-75" 
                            href="#pablo"
                            style="font-family: Raleway;">
                            <span class="ml-2">FAQs</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>
<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        
    },
}
</script>