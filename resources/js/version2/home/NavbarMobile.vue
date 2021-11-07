<template>
    <div id="navigation-mobile">
        <div class="mx-0 px-0">
            <a href="/">
                <h1 class="mx-4 px-5 py-5 my-4 text-3xl text-bold text-gray-600 border-b-1" 
                    style="font-family: Raleway;">
                    UpWrit <span class="text-lg"> Solutions</span>
                </h1>
            </a>
            <ul class="flex flex-col flex-row list-none mr-auto justify-end">
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
            </ul>
        </div>
    </div>
</template>