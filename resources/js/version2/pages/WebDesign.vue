<template>
<div class="w-full">
     <!-- Header -->
        <header class="container">
            <navbar></navbar>
        </header>

        <!-- Hero -->
        <section class=" relative">
            <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <!-- Content -->
                <div class="flex flex-1 flex-col items-center lg:items-start">
                    <h2 class="text-upwrit-blue text-4xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
                        Web Design & Development
                    </h2>
                    <p class="text-upwrit-grey text-2xl text-center lg:text-left mb-6" style="font-family: 'Zen Kurenaido', sans-serif;">
                        Elevate your business with a trusted website that your customers will love.
                        Build with a renowned, intuitive team of designers, content writers and developers, manage your 
                        brand from one place and grow your online presence.
                    </p>
                    <div class="flex justify-center flex-wrap gap-6">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScltdehM_hjc0t1PX4mjP6aUMugrWuxOCQb8I3-kGvhvDoeGw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link" target="_blank">
                        <button type="button" class="btn btn-yellow hover:bg-upwrit-info hover:text-white text-black w-40">
                            Get a Quote 
                        </button></a>
                        <button type="button" class="btn btn-info hover:bg-upwrit-yellow hover:text-black">
                            Schedule an Appointment
                        </button>
                        <button type="button" class="btn btn-black hover:bg-white hover:text-black">
                            Work with us
                        </button>
                    </div>
                </div>

                <!-- Image -->
                <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                    <img
                        class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4" 
                        src="img/v2/new/17.svg" 
                        alt="upwrit-digital-marketing"
                    />
                </div>
            </div>

            <!-- Rounded Rectangle -->
            <div class="hidden md:block overflow-hidden bg-upwrit-info rounded-l-full absolute 
                        h-80 w-2/4 top-60 right-0 lg:-bottom-28 lg:-right-0 opacity-80">
            </div>
        </section>

        <!-- Features -->
        <section class="bg-upwrit-white w-full py-20 mt-20 lg:mt-60">

            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 max-w-screen-lg mt-16">
                
                <!-- Card #1 -->
                <div class="flex flex-col rounded-xl shadow-xl lg:mb-16 h-auto">
                    <div class="p-6 flex flex-col items-center my-auto">
                        <img 
                            class="w-3/4 h-3/4 sm:w-full sm:h-full"
                            src="img/v2/new/wd/upwrit-blog.webp" 
                            alt="upwrit_img"
                        />
                        <h3 class="mt-10 mb-2 text-upwrit-blue text-2xl text-center">
                            Blog Site
                        </h3>
                    </div>
                </div>

                <!-- Card #2 -->
                <div class="flex flex-col rounded-xl shadow-xl lg:my-8 h-auto">
                    <div class="p-6 flex flex-col items-center my-auto">
                        <img 
                            class="w-3/4 h-3/4 sm:w-full sm:h-full"
                            src="img/v2/new/wd/upwrit-landing.webp" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-10 mb-2 text-upwrit-blue text-2xl text-center">
                            Landing Page
                        </h3>
                    </div>
                </div>

                <!-- Card #3 -->
                <div class="flex flex-col rounded-xl shadow-xl lg:mt-8 h-auto">
                    <div class="p-6 flex flex-col items-center my-auto">
                        <img 
                            class="w-3/4 h-3/4 sm:w-full sm:h-full"
                            src="img/v2/new/wd/upwrit-ecommerce.webp" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-10 mb-2 text-upwrit-blue text-2xl text-center">
                            E-commerce Site
                        </h3>
                    </div>
                </div>
            </div>

            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 max-w-screen-lg mt-24">
                
                <!-- Card #1 -->
                <div class="flex flex-col rounded-xl shadow-xl lg:mb-16 h-auto">
                    <div class="p-6 flex flex-col items-center my-auto">
                        <img 
                            class="w-3/4 h-3/4 sm:w-full sm:h-full"
                            src="img/v2/new/wd/upwrit-magazine.webp" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-10 mb-2 text-upwrit-blue text-2xl text-center">
                            Magazine Site
                        </h3>
                    </div>
                </div>

                <!-- Card #2 -->
                <div class="flex flex-col rounded-xl shadow-xl lg:my-8 h-auto">
                    <div class="p-6 flex flex-col items-center my-auto">
                        <img 
                            class="w-3/4 h-3/4 sm:w-full sm:h-full"
                            src="img/v2/new/wd/upwrit-portfolio.webp" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-10 mb-2 text-upwrit-blue text-2xl text-center">
                            Portfolio Site
                        </h3>
                    </div>
                </div>

                <!-- Card #3 -->
                <div class="flex flex-col rounded-xl shadow-xl lg:mt-8 h-auto">
                    <div class="p-6 flex flex-col items-center my-auto">
                        <img 
                            class="w-3/4 h-3/4 sm:w-full sm:h-full"
                            src="img/v2/new/wd/upwrit-home.webp" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-10 mb-2 text-upwrit-blue text-2xl text-center">
                            Home Page
                        </h3>
                    </div>
                </div>
            </div>
        </section>
        
        <footer class="bg-upwrit-info pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20">
            <div class="container mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">

                <ul class="text-sm font-medium pb-14 sm:pb-20 
                    grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
                    
                    <li class="col-span-2 space-y-5 row-span-2">
                        <div class="col-span-2 flex flex-1 justify-start items-center gap-12">
                            <img class="rounded-2xl w-52 h-52 md:w-32 md:h-32"
                                src="img/comingSoon/logo.jpg"
                                
                                alt="brand_logo" 
                            />
                            <div class="grid grid-rows-2 gap-4 my-auto">
                                <div>
                                    <span class="md:text-5xl text-2xl text-white mt-8" style="font-family: 'Raleway';">
                                        UpWrit™ Solutions  
                                    </span>
                                </div>
                                <div>
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
                                <a class="hover:text-gray-900 transition-colors duration-200" 
                                href="#">
                                Graphic Design
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-gray-900 transition-colors duration-200" 
                                href="#">
                                Content Writing
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-gray-900 transition-colors duration-200" 
                                href="#">
                                Web Creation
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-gray-900 transition-colors duration-200" 
                                href="#">
                                Digital Marketing
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-gray-900 transition-colors duration-200" 
                                href="#">
                                Financial Accounting
                                </a>
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
                <p>a work of UpWrit™ Solutions</p>
            </div>
        </footer>
</div>
</template>

<script>
import Navbar from "../navbar/Navbar.vue";

// import countdown from "./Countdown.vue";

export default {
    components: {
        Navbar,
    }
}
</script>