<template>
  <div class="w-full">

        <!-- <div class="bg-upwrit-info text-white py-6">
            <h1 class="text-xl text-center">
                Our website is currently under construction. Sorry for any inconveniences caused.
                
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
                    <h2 class="text-upwrit-blue text-4xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
                        Your Premium Tailor in Business Solutions
                    </h2>
                    <p class="text-upwrit-grey text-2xl text-center lg:text-left mb-6" style="font-family: 'Zen Kurenaido', sans-serif;">
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
                        <button type="button" class="btn btn-black hover:bg-white hover:text-black">
                            Work with us
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

        <!-- Intro -->
        <section class="w-full py-20 mt-20 lg:mt-60">
            <div class="container ">
                
                <div class="sm:w-3/4 lg:w-3/4 mx-auto px-12">
                    <h1 class="text-5xl text-center text-upwrit-blue leading-tight" style="font-family: 'Caveat', cursive;">
                        OUR PROCESS
                    </h1>
                     <p class="mt-4 text-upwrit-grey text-xl text-center mb-6">
                         Our serivices are delivered to you on time, under the allocated budget, with due regard to 
                         your business name and our framework of successful business development.
                    </p>
                </div>

                <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 max-w-screen-lg mt-16">
                    
                    <!-- Card #1 -->
                    <div class="flex flex-col rounded-xl shadow-xl lg:mb-16 h-auto">
                        <div class="p-6 flex flex-col items-center my-auto">
                            <img 
                                class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                                src="img/v2/new/ethos/upwrit-aim.svg" 
                                alt="ceo_img"
                            />
                            <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center">
                                Aims
                            </h3>
                            <p class="text-justify text-upwrit-grey text-md">
                                UpWrit Solutions aims to produce the next generation of 
                                leaders in Sri Lanka. Our mission is to provide the best 
                                all-round service delivery environment for our employees & customers in 
                                a caring, disciplined and inspiring atmosphere.
                            </p>
                        </div>
                    </div>

                    <!-- Card #2 -->
                    <div class="flex flex-col rounded-xl shadow-xl lg:my-8 h-auto">
                        <div class="p-6 flex flex-col items-center my-auto">
                            <img 
                                class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                                src="img/v2/new/ethos/upwrit-ethos.svg" 
                                alt="ceo_img"
                            />
                            <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center">
                                Ethos
                            </h3>
                            <p class="text-justify text-upwrit-grey text-md">
                                True to the principles of its founders, UpWrit Solutions 
                                has always endeavoured to instill and nurture qualities such 
                                as respect, compassion, self-discipline, fairness, dignity, 
                                equity, honesty and integrity. As a business development environment 
                                but with clients from many different communities, we believe 
                                that these virtues are valued not only by our clients, but by 
                                members of all professional bodies. 
                            </p>
                        </div>
                    </div>

                    <!-- Card #3 -->
                    <div class="flex flex-col rounded-xl shadow-xl lg:mt-8 h-auto">
                        <div class="p-6 flex flex-col items-center my-auto">
                            <img 
                                class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                                src="img/v2/new/ethos/upwrit-mission2.svg" 
                                alt="ceo_img"
                            />
                            <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center">
                                Mission
                            </h3>
                            <p class="text-justify text-upwrit-grey text-md">
                                Our users should leave the VLE confident, articulate, 
                                well-balanced and able to think for themselves. They should be 
                                comfortable both in operations and in their functionality. 
                                We are ambitious and determined, yet sensitive to the needs 
                                of our users, supporting the critical and creative thinkers, 
                                who are ready to make a positive difference to their country 
                                and to the world. 
                            </p>
                        </div>
                    </div>
                </div>           

            </div>
        </section>

        <!-- Features -->
        <section class="">

            <!-- Heading -->
            <div class="sm:w-3/4 lg:w-5/12 mx-auto px-12">
                <h1 class="text-5xl text-center text-upwrit-blue leading-tight pt-16" style="font-family: 'Caveat', cursive;">
                    WHAT WE PROVIDE
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

        <!-- FAQ -->
        <section class="bg-upwrit-white py-20">
            <div class="container ">
                
                <div class="sm:w-3/4 lg:w-3/4 mx-auto px-12">
                    <h1 class="text-5xl text-center text-upwrit-blue leading-tight" style="font-family: 'Caveat', cursive;">
                        OUR INDUSTRIES
                    </h1>
                     <p class="mt-4 text-upwrit-grey text-xl text-center mb-6">
                         We work in a wide range of industries promoting equal access 
                         to our services hence our slogan can be known, "Where ever you go"
                    </p>
                </div>

                <div class="container grid grid-cols-1 md:grid-cols-3 gap-16 max-w-screen-lg">
                    <div class="flex flex-col h-auto text-xl text-left gap-y-8">
                        <p class="text-upwrit-grey ">
                            <i class="fas fa-network-wired text-upwrit-info"></i>&nbsp;
                            Technology
                        </p>
                        <p class="text-upwrit-grey ">
                            <i class="fas fa-money-check-alt text-upwrit-info"></i>&nbsp;
                            Finance & Business
                        </p>
                        <p class="text-upwrit-grey ">
                            <i class="fas fa-music text-upwrit-info"></i>&nbsp;
                            Music & Entertainment
                        </p>
                        <p class="text-upwrit-grey ">
                            <i class="fas fa-box text-upwrit-info"></i>&nbsp;
                            Wholesale & Retail (FMCG)
                        </p>
                    </div>

                    <div class="flex flex-col-reverse h-auto text-xl text-left gap-y-8">
                        <p class="text-upwrit-grey ">
                            <i class="fas fa-feather-alt text-upwrit-info"></i>&nbsp;
                            Fashion & Clothing
                        </p>
                        <p class="text-upwrit-grey ">
                            <i class="fas fa-football-ball text-upwrit-info"></i>&nbsp;
                            Sports & Outdoor
                        </p>
                        <p class="text-upwrit-grey ">
                            <i class="fas fa-briefcase-medical text-upwrit-info"></i>&nbsp;
                            Healthcare
                        </p>
                        <p class="text-upwrit-grey ">
                            <i class="fas fa-graduation-cap text-upwrit-info"></i>&nbsp;
                            Education
                        </p>
                    </div>

                    <div class="flex flex-col h-auto text-xl text-left gap-y-8">
                        <p class="text-upwrit-grey ">
                            <i class="fas fa-plane text-upwrit-info"></i>&nbsp;
                            Travel
                        </p>
                        <p class="text-upwrit-grey ">
                            <i class="fas fa-heart text-upwrit-info"></i>&nbsp;
                            Lifestyle
                        </p>
                        <p class="text-upwrit-grey ">
                            <i class="fas fa-hotel text-upwrit-info"></i>&nbsp;
                            Hospitality
                        </p>
                        <p class="text-upwrit-grey ">
                            <i class="fas fa-concierge-bell text-upwrit-info"></i>&nbsp;
                            Food & Beverages
                        </p>
                    </div>
                </div>
                

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
                <div class="flex flex-col rounded-xl shadow-xl lg:mb-16">
                    <div class="p-6 flex flex-col items-center">
                        <img 
                            class="rounded-full w-1/2 h-3/4 sm:w-1/2 sm:h-3/4"
                            src="img/v2/dp/hanii4.jpg" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-5 mb-2 text-upwrit-blue text-lg">
                            Hansaka Chathuranga 
                        </h3>
                        <p class="mb-2 text-upwrit-grey font-light text-center">
                            Co-founder & Director of Operations & Finance
                        </p>
                        <p class="mb-2 text-upwrit-grey font-light text-center">
                            CBA
                        </p>
                    </div>
                </div>

                <!-- Card #2 -->
                <div class="flex flex-col rounded-xl shadow-xl lg:my-8">
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
                            Reading M.Sc. in IT, Pg.D. in IT, <br> Associate Member of BCS - UK
                        </p>
                    </div>
                </div>

                <!-- Card #3 -->
                <div class="flex flex-col rounded-xl shadow-xl lg:mt-16">
                    <div class="p-6 flex flex-col items-center">
                        <img 
                            class="rounded-full w-1/2 h-3/4 sm:w-1/2 sm:h-3/4"
                            src="img/v2/dp/yosh2.png" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-5 mb-2 text-upwrit-blue text-lg">
                            Yoshell Delile 
                        </h3>
                        <p class="mb-2 text-upwrit-grey font-light  text-center">
                            Co-founder & Director of Operations & Strategy
                        </p>
                        <p class="mb-2 text-upwrit-grey font-light">
                            B.Sc. (Hons) Agriculture
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section class="bg-upwrit-white py-20">
            <div class="container ">
                
                <div class="sm:w-3/4 lg:w-3/4 mx-auto px-12">
                    <h1 class="text-5xl text-center text-upwrit-blue leading-tight">
                        Contact Us
                    </h1>
                     <p class="mt-4 text-upwrit-grey text-xl text-center mb-6">
                         You can reach us via Email, WhatsApp, Facebook Messenger, Instagram Direct Message or just one phone call away.
                    </p>
                </div>

                
                <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto text-xl">
                    <div class="flex items-center vorder-b py-2 cursor-pointer w-40 mx-auto text-3xl">
                        <a href="https://www.facebook.com/upwrit" target="_blank" class="text-upwrit-grey mx-auto">
                            <i class="fab fa-facebook-f text-upwrit-info"></i>
                        </a>
                        <a href="https://www.instagram.com/up_writ/" target="_blank"  class="text-upwrit-grey mx-auto">
                            <i class="fab fa-instagram text-upwrit-info"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/upwrit-solutions" target="_blank"  class="text-upwrit-grey mx-auto">
                            <i class="fab fa-linkedin-in text-upwrit-info"></i>
                        </a>
                    </div>
                    <div class="flex items-center vorder-b pt-4 pb-2 cursor-pointer">
                        <span class="text-upwrit-grey mx-auto">
                            <i class="fas fa-phone-alt text-upwrit-info"></i>
                            &nbsp;
                            (+94) 76 769 8844
                        </span>
                    </div>
                    <div class="flex items-center vorder-b py-2 cursor-pointer">
                        <span class="text-upwrit-grey mx-auto">
                            <i class="fas fa-envelope text-upwrit-info"></i>
                            &nbsp;
                            upwritsolutions@gmail.com
                        </span>
                    </div>
                </div>

            </div>
        </section>

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