<template>
<div id="navigation">
    <nav class="md:fixed relative w-screen flex flex-wrap items-center justify-between py-4
            backdrop-filter backdrop-sepia-0 backdrop-blur-md backdrop-contrast-200 mb-0 z-10 shadow-lg mx-0">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto px-4 md:static md:block 
                    md:justify-start items-center">
                <div class="block px-3 flex">
                    <a class="text-3xl font-medium leading-relaxed inline-block mx-5 
                            whitespace-nowrap text-gray-600 tracking-wider items-center flex" 
                        href="/"
                        style="font-family: Raleway">
                        UpWrit &nbsp;| <span class="text-lg">&nbsp;solutions</span>
                    </a>
                </div>
            </div>

            <div class="lg:flex md:block hidden flex md:justify-end" id="menu">

                <ul class="flex flex-col lg:flex-row list-none mr-auto md:justify-end">
                    <li class="cursor-pointer">
                        <a class="px-5 mx-4 py-2 flex items-center text-md  
                                leading-snug text-gray-600 hover:opacity-75" 
                            style="font-family: Raleway;">
                            <i class="fa fa-phone-alt text-lg leading-lg text-gray-600 opacity-75" /> 
                            <span class="ml-2" style="font-family: 'Verdana', sans-serif">(+94) 76 769 8844</span>
                        </a>
                    </li>
                    <li class="nav-item cursor-pointer">
                        <router-link :to="{name: 'home', hash: '#services'}" 
                            class="px-5 mx-4 py-2 flex items-center text-lg  
                                leading-snug text-gray-600 hover:opacity-75">
                            Services
                        </router-link>
                    </li>
                    <li class="nav-item cursor-pointer">
                        <router-link :to="{name: 'home', hash: '#about'}"
                            class="px-5 mx-4 py-2 flex items-center text-lg  
                                leading-snug text-gray-600 hover:opacity-75">
                            About Us
                        </router-link>
                    </li>
                    <li class="nav-item cursor-pointer">
                        <router-link :to="{name: 'home', hash: '#contact'}" 
                            class="px-5 mx-4 py-2 flex items-center text-lg  
                                leading-snug text-gray-600 hover:opacity-75">
                            Contact
                        </router-link>
                    </li>
                    <li class="nav-item cursor-pointer">
                        <router-link to="careers" 
                            class="px-5 mx-4 py-2 flex items-center text-lg  
                                leading-snug text-gray-600 hover:opacity-75">
                            Careers
                        </router-link>
                    </li>
<!--                     
                    <li class="nav-item">
                        <a class="px-5 mx-4 py-2 flex items-center text-lg  
                                leading-snug text-gray-600 hover:opacity-75" 
                            href="#pablo"
                            style="font-family: Raleway;">
                            <i class="fab fa-twitter text-lg leading-lg text-gray-600 opacity-75" /> 
                            <span class="ml-2">Home</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-5 mx-4 py-2 flex items-center text-lg  
                                leading-snug text-gray-600 hover:opacity-75" 
                            href="#pablo"
                            style="font-family: Raleway;">
                            <span class="ml-2">About</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-5 mx-4 py-2 flex items-center text-lg  
                                leading-snug text-gray-600 hover:opacity-75" 
                            href="#pablo"
                            style="font-family: Raleway;">
                            <span class="ml-2">Services</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-5 mx-4 py-2 flex items-center text-lg  
                                leading-snug text-gray-600 hover:opacity-75" 
                            href="#pablo"
                            style="font-family: Raleway;">
                            <span class="ml-2">Talk to Us</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-5 mx-4 py-2 flex items-center text-lg  
                                leading-snug text-gray-600 hover:opacity-75" 
                            href="#pablo"
                            style="font-family: Raleway;">
                            <span class="ml-2">FAQs</span>
                        </a>
                    </li> -->
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