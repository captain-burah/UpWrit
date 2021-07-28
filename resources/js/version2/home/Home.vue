<template>
  <div class="w-full">
      
        <!-- Header -->
        <header class="container">
            <div class="bg-upwrit-blue text-white py-6">
                <h1 class="text-xl text-center">
                    Our website is currenytly under construction.
                    <countdown></countdown>
                </h1>
            </div>
            <navbar></navbar>
        </header>

        <!-- Hero -->
        <section class=" relative">
            <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <!-- Content -->
                <div class="flex flex-1 flex-col items-center lg:items-start">
                    <h2 class="text-upwrit-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
                        Your Premium Tailor in Software Products
                    </h2>
                    <p class="text-upwrit-grey text-lg text-center lg:text-left mb-6">
                        We are a young, enthusiastic group of professionals, postgrads and undergrads 
                        working towards the future of our modern society, embracing a strong professional 
                        code of ethics certifying our trustworthy services.
                    </p>
                    <div class="flex justify-center flex-wrap gap-6">
                        <button type="button" class="btn btn-purple hover:bg-upwrit-white hover:text-black">
                            Make an appointment
                        </button>
                        <button type="button" class="btn btn-white hover:bg-upwrit-purple hover:text-white">
                            Learn more
                        </button>
                    </div>
                </div>

                <!-- Image -->
                <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                    <img
                        class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4" 
                        src="img/v2/hero-bg.png" 
                        alt="hero_img"
                    />
                </div>
            </div>

            <!-- Rounded Rectangle -->
            <div class="hidden md:block overflow-hidden bg-upwrit-blue rounded-l-full absolute 
                        h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-0">
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
            <div class="relative mt-20 lg:mt-24 ">
                <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    
                    <!-- Image -->
                    <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img
                            class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"  
                            src="img/v2/undraw_Tabs_re_a2bd.svg" 
                            alt="feature1_image">
                    </div>

                    <!-- Content -->
                    <div class="flex flex-1 flex-col items-center lg:items-start px-12">
                        <h1 class="text-4xl text-upwrit-blue">
                            Graphic Design
                        </h1>
                        <p class="text-2xl text-upwrit-grey my-4 text-center sm:w-3/4 lg:w-full italic">
                            "Organize your life & work however you like with the right design" 
                        </p>
                        <p class="text-xl text-upwrit-grey my-4 text-justify lg:text-justify sm:w-3/4 lg:w-full">
                            UpWrit has an offshore graphic design team based in Colombo, who invests their creativity, 
                            imagination, and technology at the helm of its graphic designers, with sheer will & focus on achieving 
                            our client's objectives.
                            <br>
                            <br>
                            Our simple process in graphical and visual designing
                            gives you a competetive nature to you and your business. 
                        </p>
                        <button type="button" class="btn btn-purple hover:bg-upwrit-white hover:text-upwrit-purple">
                            More info
                        </button>
                    </div>
                </div>
                <!-- Rounded Rectangle -->
                <div 
                    class="
                        hidden 
                        lg:block 
                        overflow-hidden 
                        bg-upwrit-purple 
                        rounded-r-full 
                        absolute 
                        h-80 
                        w-2/4 
                        -bottom-24
                        -left-0"
                >
                </div>
            </div>

            <!-- Feature #2 WEB -->
            <div class="relative mt-20 lg:mt-52 ">
                <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                    
                    <!-- Image -->
                    <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img
                            class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"  
                            src="img/v2/undraw_web_shopping_dd4l.svg" 
                            alt="feature1_image">
                    </div>

                    <!-- Content -->
                    <div class="flex flex-1 flex-col items-center lg:items-end px-12">
                        <h1 class="text-4xl text-upwrit-blue text-center lg:text-right sm:w-3/4 lg:w-full">
                            Web Creation
                        </h1>
                        <p class="text-2xl text-upwrit-grey my-4 text-center sm:w-3/4 lg:w-full italic">
                            "If you can dream it, we can design it" 
                        </p>
                        <p class="text-xl text-upwrit-grey my-4 text-justify lg:text-justify sm:w-3/4 lg:w-full">
                            Elevate your business with a trusted website that your customers will love.
                            Build with a renowned, intuitive team of designers, content writers and developers, manage your 
                            brand from one place and grow your online presence.
                        </p>
                        <button type="button" class="btn btn-purple hover:bg-upwrit-white hover:text-upwrit-purple">
                            More info
                        </button>
                    </div>
                </div>
                <!-- Rounded Rectangle -->
                <div 
                    class="
                        hidden 
                        lg:block 
                        overflow-hidden 
                        bg-upwrit-blue 
                        rounded-l-full 
                        absolute 
                        h-80 
                        w-2/4 
                        -bottom-24
                        -right-0"
                >
                </div>
            </div>

            <!-- Feature #3 Marketing -->
            <div class="relative mt-20 lg:mt-52 ">
                <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    
                    <!-- Image -->
                    <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img
                            class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"  
                            src="img/v2/undraw_Social_media_re_w12q.svg" 
                            alt="feature1_image">
                    </div>

                    <!-- Content -->
                    <div class="flex flex-1 flex-col items-center lg:items-start px-12">
                        <h1 class="text-4xl text-upwrit-blue">
                            Digital Marketing
                        </h1>
                        <p class="text-2xl text-upwrit-grey my-4 text-center sm:w-3/4 lg:w-full italic">
                            "Its a new age for advertising; digital marketing" 
                        </p>
                        <p class="text-xl text-upwrit-grey my-4 text-justify lg:text-justify sm:w-3/4 lg:w-full">
                            orem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium nunc non euismod imperdiet. 
                            Cras rhoncus tellus at dui finibus, et gravida turpis dictum. Praesent pellentesque, 
                            risus in faucibus vulputate, purus leo elementum enim, et placerat ipsum nisl id magna. 
                            Proin eu fringilla quam, quis euismod sapien. Pellentesque euismod nibh velit, vestibulum luctus dolor dignissim ac. 
                            Proin in neque nibh. Duis in odio placerat urna dapibus lacinia. 
                            Mauris ultrices risus eget elementum consectetur. Integer in volutpat sem.
                        </p>
                        <button type="button" class="btn btn-purple hover:bg-upwrit-white hover:text-upwrit-purple">
                            More info
                        </button>
                    </div>
                </div>
                
                <!-- Rounded Rectangle -->
                <div 
                    class="
                        hidden 
                        lg:block 
                        overflow-hidden 
                        bg-upwrit-red 
                        rounded-r-full 
                        absolute 
                        h-80 
                        w-2/4 
                        -bottom-36
                        -left-0"
                >
                </div>
            </div>

            <!-- Feature #4 Financial Accounting -->
            <div class="relative mt-20 lg:mt-52 ">
                <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                    
                    <!-- Image -->
                    <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img
                            class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"  
                            src="img/v2/undraw_Finance_re_gnv2.svg" 
                            alt="feature1_image">
                    </div>

                    <!-- Content -->
                    <div class="flex flex-1 flex-col items-center lg:items-end px-12">
                        <h1 class="text-4xl text-upwrit-blue text-center lg:text-right sm:w-3/4 lg:w-full">
                            Financial Accounting
                        </h1>
                        <p class="text-2xl text-upwrit-grey my-4 text-center sm:w-3/4 lg:w-full italic">
                            "Focus on growing your business, trust the accounting to us." 
                        </p>
                        <p class="text-xl text-upwrit-grey my-4 text-justify lg:text-justify sm:w-3/4 lg:w-full">
                            Our Financial Accounting Services practice comprises of a dedicated memeber or a team providing 
                            accounting and financial reporting advice and support to clients on a wide range of transactions 
                            and events, including adherence to new or revised accounting standards and effective management 
                            of the financial reporting processes.
                        </p>
                        <button type="button" class="btn btn-purple hover:bg-upwrit-white hover:text-upwrit-purple">
                            More info
                        </button>
                    </div>
                </div>
                <!-- Rounded Rectangle -->
                <div 
                    class="
                        hidden 
                        lg:block 
                        overflow-hidden 
                        bg-upwrit-blue 
                        rounded-l-full 
                        absolute 
                        h-80 
                        w-2/4 
                        -bottom-24
                        -right-0"
                >
                </div>
            </div>

        </section>

        <!-- Authors -->
        <section class="py-20 mt-20">
            
            <!-- Heading -->
            <div class="sm:w-3/4 lg:w-5/12 mx-auto px-12">
                <h1 class="text-5xl text-center text-upwrit-blue">
                    Our Authors
                </h1>
            </div>

            <!-- Cards -->
            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
                
                <!-- Card #1 -->
                <div class="flex flex-col rounded-xl shadow-md lg:mb-16">
                    <div class="p-6 flex flex-col items-center">
                        <img 
                            class="rounded-full w-1/2 h-1/2 sm:w-1/2 sm:h-1/2"
                            src="img/v2/tkb4.jpeg" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-5 mb-2 text-upwrit-blue text-lg">
                            Tuan Burah 
                        </h3>
                        <p class="mb-2 text-upwrit-grey font-light">
                            CEO
                        </p>
                        <p class="mb-2 text-upwrit-grey font-light">
                            BCS P.G.D. in IT
                        </p>
                    </div>
                    <hr class="border-b border-upwrit-white"/>
                    <div class="flex p-6">
                        <button type="button" class="flex-1 btn btn-purple hover:bg-upwrit-white hover:text-blue">
                            Contact
                        </button>
                    </div>
                </div>

                <!-- Card #2 -->
                <div class="flex flex-col rounded-xl shadow-md lg:my-8">
                    <div class="p-6 flex flex-col items-center">
                        <img 
                            class="rounded-full w-1/2 h-3/4 sm:w-1/2 sm:h-3/4"
                            src="img/v2/marc.jpg" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-5 mb-2 text-upwrit-blue text-lg">
                            Hansaka Chathuranga 
                        </h3>
                        <p class="mb-2 text-upwrit-grey font-light">
                            Director of Operations & Strategy
                        </p>
                        <p class="mb-2 text-upwrit-grey font-light">
                            CBA
                        </p>
                    </div>
                    <hr class="border-b border-upwrit-white"/>
                    <div class="flex p-6">
                        <button type="button" class="flex-1 btn btn-purple hover:bg-upwrit-white hover:text-blue">
                            Contact
                        </button>
                    </div>
                </div>

                <!-- Card #3 -->
                <div class="flex flex-col rounded-xl shadow-md lg:mt-16">
                    <div class="p-6 flex flex-col items-center">
                        <img 
                            class="rounded-full w-1/2 h-3/4 sm:w-1/2 sm:h-3/4"
                            src="img/v2/dave.jpg" 
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
                        <button type="button" class="flex-1 btn btn-purple hover:bg-upwrit-white hover:text-blue">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section class="bg-upwrit-white py-20">
            <div class="container ">
                <!-- Heading -->
                <div class="sm:w-3/4 lg:w-5/12 mx-auto px-12">
                    <h1 class="text-5xl text-center text-upwrit-blue leading-tight">
                        Frequently Asked Questions
                    </h1>
                     <p class="mt-4 text-upwrit-grey text-xl text-center mb-6">
                        Here are some of our FAQs.If you have any other questions 
                        you'd like answered please feel free to email us.
                    </p>
                </div>

                <!-- FAQ Items -->
                <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                    <div class="flex items-center vorder-b py-4 cursor-pointer">
                        <span class="flex-1">What is a bookmark?</span>
                        <i class="text-upwrit-purple fas fa-chevron-down"></i>
                    </div>

                    <div class="flex items-center vorder-b py-4 cursor-pointer">
                        <span class="flex-1">What is a bookmark?</span>
                        <i class="text-upwrit-purple fas fa-chevron-down"></i>
                    </div>

                    <div class="flex items-center vorder-b py-4 cursor-pointer">
                        <span class="flex-1">What is a bookmark?</span>
                        <i class="text-upwrit-purple fas fa-chevron-down"></i>
                    </div>

                    <button type="button" class="flex self-center mt-12 btn btn-purple hover:bg-upwrit-white hover:text-upwrit-purple">
                        More info
                    </button>
                </div>

            </div>
        </section>

        <!-- Container -->
        <section class="bg-upwrit-purple text-white py-20">
            <div class="container ">
                <!-- Heading -->
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
        </section>

        <!-- Footer -->
        <footer class="bg-upwrit-blue py-16">
            <div class="container flex flex-col md:flex-row items-center">
                <div class="flex flex-1 flex-wrap items-center justify-center lg:justify-start gap-12">
                    <ul class="flex text-white uppercase gap-12 text-md">
                        <li class="cursor-pointer">Services</li>
                        <li class="cursor-pointer">Features</li>
                        <li class="cursor-pointer">Contact</li>
                    </ul>   
                </div>

                <div class="flex gap-10 mt-12 md:mt-0">
                     <li><i class="text-white text-2xl fab fa-twitter"></i></li>
                     <li><i class="text-white text-2xl fab fa-facebook-square"></i></li>
                     <li><i class="text-white text-2xl fab fa-twitter"></i></li>
                </div>
            </div>
        </footer>
  </div> 
</template>

<script>
import Footer from '../../comingSoon/Footer.vue';

import Navbar from "../navbar/Navbar.vue";

import countdown from "./Countdown.vue";

export default {
    components: {
        Navbar,
    }
}
        Footer
</script>

<style>

</style>