<template>
<div>
    <footer class="bg-gray-800 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20">
        <div class="container mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">

            <ul class="text-sm font-medium pb-14 sm:pb-20 
                grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
                
                <li class="col-span-2 space-y-5 row-span-2">
                    <div class="col-span-2 flex flex-1 justify-start gap-12">
                        <img class="rounded-2xl w-40 h-40 md:w-32 md:h-32 my-0"
                            src="img/comingSoon/19.jpg"
                            
                            alt="brand_logo" 
                        />
                        <div class="grid grid-rows-2 gap-2 my-auto">
                            <div class="my-auto">
                                <span class="md:text-5xl text-2xl text-white" style="font-family: 'Raleway';">
                                    UpWrit™ Solutions  
                                </span>
                            </div>
                            <div class="my-auto">
                                <span class="text-md text-white" style="font-family: 'Raleway';">
                                    &copy; Copyright 2021. All Rights Reserved.
                                </span>
                            </div>
                        </div>
                    </div> 
                </li>

                <li class="space-y-5 row-span-2 text-white">
                    <h2 class="text-xl font-semibold tracking-wide text-white uppercase">
                        Services
                    </h2>
                    <ul class="space-y-4">
                        <li>
                            <router-link to="graphic-design" class="hover:text-gray-900 transition-colors duration-200"> 
                                Graphic Design
                            </router-link>
                        </li>
                        <li>
                            <router-link to="web-design-development" class="hover:text-gray-900 transition-colors duration-200">
                                Web Creation
                            </router-link>
                        </li>
                        <li>
                            <router-link to="digital-marketing" class="hover:text-gray-900 transition-colors duration-200">
                                Digital Marketing
                            </router-link>
                        </li>
                        <li>
                            <router-link to="financial-accounting" class="hover:text-gray-900 transition-colors duration-200">
                                Financial Accounting
                            </router-link>
                        </li>
                        
                    </ul> 
                </li>

                <li class="space-y-5 row-span-2 text-white">
                    <h2 class="text-xl font-semibold tracking-wide text-white uppercase">
                        Community
                    </h2>
                    <ul class="space-y-4">
                        <li>
                            <a class="hover:text-gray-900 transition-colors duration-200" 
                            href="https://www.linkedin.com/company/upwrit-solutions">
                            LinkedIn
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-gray-900 transition-colors duration-200" 
                            href="https://www.facebook.com/upwrit">
                            Facebook
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-gray-900 transition-colors duration-200" 
                            href="https://www.instagram.com/up_writ/">
                            Instagram
                            </a>
                        </li>                            
                    </ul> 
                </li>
            </ul>
        </div>
        <div class="container text-center text-white text-2xl" style="font-family: 'Caveat', cursive;">
            <a href="http://www.upwritsolutions.com">
                <p>a work of UpWrit</p>
            </a>
        </div>
    </footer>
</div>
</template>