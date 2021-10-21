<template>
  <div class="w-full">

        <!-- <div class="bg-upwrit-info text-white py-6">
            <h1 class="text-xl text-center">
                Our website is currenytly under construction. Sorry for any inconveniences caused.
                
            </h1>
        </div> -->

        <!-- Header -->
        <header class="container">
            <navbar></navbar>
        </header>

        <!-- Hero -->
        <section class=" relative">
            <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <!-- Content -->
                <div class="flex flex-1 flex-col items-center lg:items-start">
                    <h2 class="text-upwrit-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
                        Your Premium Tailor in Business Solutions
                    </h2>
                    <p class="text-upwrit-grey text-lg text-center lg:text-left mb-6">
                        We are a young, enthusiastic group of professionals, postgrads and undergrads 
                        working towards the future of a modern society, embracing a strong professional 
                        code of ethics certifying our trustworthy services.
                    </p>
                    <div class="flex justify-center flex-wrap gap-6">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScltdehM_hjc0t1PX4mjP6aUMugrWuxOCQb8I3-kGvhvDoeGw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link" target="_blank">
                        <button type="button" class="btn btn-yellow hover:bg-upwrit-info hover:text-white text-black">
                            Get a Quote 
                        </button></a>
                        <button type="button" class="btn btn-info hover:bg-upwrit-yellow hover:text-black">
                            Schedule an Appointment
                        </button>
                    </div>
                </div>

                <!-- Image -->
                <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                    <img
                        class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4" 
                        src="img/v2/new/10.svg" 
                        alt="hero_img"
                    />
                </div>
            </div>

            <!-- Rounded Rectangle -->
            <div class="hidden md:block overflow-hidden bg-upwrit-yellow rounded-l-full absolute 
                        h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-0 opacity-80">
            </div>
        </section>

        <!-- Features -->
        <section class="bg-upwrit-white w-full py-20 mt-20 lg:mt-60">

            <!-- Heading -->
            <div class="sm:w-3/4 lg:w-5/12 mx-auto px-12">
                <h1 class="text-5xl text-center text-upwrit-blue">
                    Our  Services
                </h1>
                <p class=" text-xl text-center text-upwrit-grey mt-4">
                    Our aim is to make it quick and easy for you to grow your company. 
                    You can find what you want and reach us with just a click of a button.
                </p>
            </div>

            <!-- Feature #1  Graphic -->
            <div class="relative mt-20 lg:mt-24  my-60">
                <digital-marketing></digital-marketing>
            </div>

            <!-- Feature #2 WEB -->
            <div class="relative mt-20 lg:mt-52  my-60">
                <web-design></web-design>
            </div>

            <!-- Feature #3 Marketing -->
            <div class="relative mt-20 lg:mt-52 my-60">
                <graphic-designing></graphic-designing>
            </div>

            <!-- Feature #4 Financial Accounting -->
            <div class="relative mt-20 lg:mt-52  my-60">
                <financial-accounting></financial-accounting>
            </div>

        </section>

        <!-- Authors -->
        <section class="py-20 mt-20">
            
            <!-- Heading -->
            <div class="sm:w-3/4 lg:w-5/12 mx-auto px-12">
                <h1 class="text-5xl text-center text-upwrit-blue">
                    Who are <sapn class="bg-upwrit-yellow text-blue" style="font-family: Raleway;"> we</sapn>?
                </h1>
            </div>

            <!-- Cards -->
            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
                
                <!-- Card #1 -->
                <div class="flex flex-col rounded-xl shadow-md lg:mb-16">
                    <div class="p-6 flex flex-col items-center">
                        <img 
                            class="rounded-full w-1/2 h-3/4 sm:w-1/2 sm:h-3/4"
                            src="img/v2/dp/hanii4.jpg" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-5 mb-2 text-upwrit-blue text-lg">
                            Hansaka Chathuranga 
                        </h3>
                        <p class="mb-2 text-upwrit-grey font-light">
                            Director of Operations & Finance
                        </p>
                        <p class="mb-2 text-upwrit-grey font-light text-center">
                            CBA
                        </p>
                    </div>
                    <hr class="border-b border-upwrit-white"/>
                    <div class="flex p-6">
                        <button type="button" class="flex-1 btn btn-info hover:bg-upwrit-yellow hover:text-black">
                            Contact
                        </button>
                    </div>
                </div>

                <!-- Card #2 -->
                <div class="flex flex-col rounded-xl shadow-md lg:my-8">
                    <div class="p-6 flex flex-col items-center">
                        <img 
                            class="rounded-full w-1/2 h-3/4 sm:w-1/2 sm:h-3/4"
                            src="img/v2/dp/khaazen2.jpg" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-5 mb-2 text-upwrit-blue text-lg">
                            Tuan Burah 
                        </h3>
                        <p class="mb-2 text-upwrit-grey font-light">
                            Founder & CEO
                        </p>
                        <p class="mb-2 text-upwrit-grey font-light text-center">
                            Reading M.Sc. in IT, Pg.D. in IT, <br> AMBCS - Royal Charter
                        </p>
                    </div>
                    <hr class="border-b border-upwrit-white"/>
                    <div class="flex p-6">
                        <button type="button" class="flex-1 btn btn-info hover:bg-upwrit-yellow hover:text-black">
                            Contact
                        </button>
                    </div>
                </div>

                <!-- Card #3 -->
                <div class="flex flex-col rounded-xl shadow-md lg:mt-16">
                    <div class="p-6 flex flex-col items-center">
                        <img 
                            class="rounded-full w-1/2 h-3/4 sm:w-1/2 sm:h-3/4"
                            src="img/v2/dp/yosh2.png" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-5 mb-2 text-upwrit-blue text-lg">
                            Yoshell Delile 
                        </h3>
                        <p class="mb-2 text-upwrit-grey font-light">
                            Director of Operations & Strategy
                        </p>
                        <p class="mb-2 text-upwrit-grey font-light">
                            B.Sc. (Hons) Agriculture
                        </p>
                    </div>
                    <hr class="border-b border-upwrit-white"/>
                    <div class="flex p-6">
                        <button type="button" class="flex-1 btn btn-info hover:bg-upwrit-yellow hover:text-black">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <!-- <section class="bg-upwrit-white py-20">
            <div class="container ">
                
                <div class="sm:w-3/4 lg:w-5/12 mx-auto px-12">
                    <h1 class="text-5xl text-center text-upwrit-blue leading-tight">
                        Frequently Asked Questions
                    </h1>
                     <p class="mt-4 text-upwrit-grey text-xl text-center mb-6">
                        Here are some of our FAQs.If you have any other questions 
                        you'd like answered please feel free to email us.
                    </p>
                </div>

                
                <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                    <div class="flex items-center vorder-b py-4 cursor-pointer">
                        <span class="flex-1">What is a bookmark?</span>
                        <i class="text-upwrit-purple fas fa-chevron-down"></i>
                        
                    </div>

                    <button type="button" class="flex self-center mt-12 btn btn-purple hover:bg-upwrit-white hover:text-upwrit-purple">
                        More info
                    </button>
                </div>

            </div>
        </section> -->

        <!-- Container -->
        <!-- <section class="bg-upwrit-purple text-white py-20">
            <div class="container ">
                <div class="sm:w-3/4 lg:w-2/4 mx-auto">
                    <p class="font-light uppwercase text-center mb-8">
                        Over 10+ Projects Completed
                    </p>
                    <h1 class="text-3xl text-center">
                        Stay up-to-date with what we're doing
                    </h1>
                    <div class="flex flex-col sm:flex-row gap-6 mt-8">
                        <input type="text" placeholder="Enter your email address"
                            class="focus:outline-none flex-1 px-2 py-3 rounded-lg text-black"
                        />
                        <button type="button" class="btn bg-upwrit-red hover:bg-upwrit-white hover:text-upwrit-blue">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section> -->

        <footer class="bg-upwrit-blue pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20">
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
                                href="#">
                                LinkedIn
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-gray-900 transition-colors duration-200" 
                                href="#">
                                Facebook
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-gray-900 transition-colors duration-200" 
                                href="#">
                                Instagram
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-gray-900 transition-colors duration-200" 
                                href="#">
                                Twitter
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-gray-900 transition-colors duration-200" 
                                href="#">
                                GitHub
                                </a>
                            </li>
                            
                        </ul> 
                    </li>
                </ul>
            </div>
        </footer>
  </div> 
</template>

<script>
import Footer from '../../comingSoon/Footer.vue';

import Navbar from "../navbar/Navbar.vue";
import DigitalMarketing from "../services/DigitalMarketing.vue";
import GraphicDesigning from "../services/GraphicDesigning.vue";
import WebDesign from "../services/WebDesign.vue";
import FinancialAccounting from "../services/FinancialAccounting.vue";

// import countdown from "./Countdown.vue";

export default {
    components: {
        Navbar,
        DigitalMarketing,
        GraphicDesigning,
        WebDesign,
        FinancialAccounting,
    }
}
        Footer
</script>

<style>

</style>