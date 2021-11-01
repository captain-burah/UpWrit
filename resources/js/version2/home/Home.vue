<template>
  <div class="w-full">

        <div v-if="loading">
            <section class="absolute flex h-screen w-full bg-upwrit-white bg-opacity-95 z-50">
                <div class="m-auto flex justify-center items-center align-middle my-auto py-auto">
                    <div style="border-top-color:transparent;"
                        class="animate-spin rounded-full h-40 w-40
                            border-b-8 border-r-4 border-l-4 border-dotted border-upwrit-info"
                    ></div>
                </div>
            </section>
        </div>

        <div v-else-if="welcome">
            <section class="absolute flex h-screen w-full bg-upwrit-white bg-opacity-95 z-50">
                <div class="m-auto flex justify-center items-center align-middle my-auto py-auto">
                    <h1 class="text-9xl text-upwrit-info " 
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in"
                        data-aos-mirror="false"
                        data-aos-once="false"
                        style="font-family: 'Zen Kurenaido', sans-serif;"
                    >
                        Welcome
                    </h1>
                </div>
            </section>
        </div>

            <!-- Header -->
            <header class="container">
                <navbar></navbar>
                <nav></nav>
            </header>

            <!-- Hero -->
            <section class=" relative">
                <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                    <!-- Content -->
                    <div class="flex flex-1 flex-col items-center lg:items-start">
                        <h2 class="text-upwrit-blue text-4xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6 animate-pulse">
                            Your Premium Tailor in Business Solutions
                        </h2>
                        <p class="text-upwrit-grey text-2xl text-center lg:text-left mb-6" style="font-family: 'Zen Kurenaido', sans-serif;">
                            We are a young, enthusiastic group of professionals, postgrads and undergrads 
                            working towards the future of a modern society, embracing a strong professional 
                            code of ethics certifying our trustworthy services.
                        </p>
                        <div class="flex justify-center flex-wrap gap-6">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScltdehM_hjc0t1PX4mjP6aUMugrWuxOCQb8I3-kGvhvDoeGw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link" 
                                target="_blank">
                                <button type="button" class="btn btn-yellow hover:bg-upwrit-info hover:text-white text-black ">
                                    <i class="fas fa-quote-right"></i>&nbsp;
                                    Get a Quote 
                                </button>
                            </a>

                            <button type="button" class="btn btn-info hover:bg-upwrit-yellow hover:text-black ">
                                <i class="far fa-calendar-check"></i>&nbsp;
                                Schedule an Appointment
                            </button>
                            <a href="https://forms.gle/FZaMPA9KcCSxLuTFA">
                                <button type="button" class="btn btn-black hover:bg-white hover:text-black">
                                    <i class="fas fa-briefcase"></i>&nbsp;
                                    Work with us
                                </button>
                            </a>
                        </div>
                    </div>

                    <!-- Image -->
                    <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 imageContainer">
                        <img
                            class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4" 
                            src="img/v2/new/10.svg" 
                            alt="hero_img"
                        />
                    </div>
                    
                </div>
                <div class="hidden md:block container flex w-full move-bottom items-center text-center mt-40">
                    <div class="text-center w-full">
                        <router-link :to="{hash: '#process'}">
                            <i class="fas fa-arrow-down text-center text-5xl text-gray-500 animate-bounce"></i>
                            <p class="text-gray-400 text-center text-lg" style="font-family: 'Zen Kurenaido', sans-serif;">
                                SCROLL
                            </p>
                        </router-link>
                    </div>
                </div>

                <!-- Rounded Rectangle -->
                <div 
                    class="hidden md:block overflow-hidden bg-upwrit-yellow rounded-l-full absolute 
                        h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-0 opacity-90"
                    data-aos="fade-left"
                    data-aos-offset="250"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                </div>
            </section>

            <!-- Intro -->
            <section class="w-full py-20 mt-20 lg:mt-60" id="process">
                <div class="container ">
                    
                    <div class="sm:w-3/4 lg:w-3/4 mx-auto px-12"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in"
                        data-aos-mirror="false"
                        data-aos-once="false">
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
                        <div class="group flex flex-col rounded-xl bg-white shadow-lg border 
                            transition duration-500 ease-in-out
                            transform 
                            hover:-translate-y-1 
                            hover:scale-105 
                            hover:border-yellow-500 
                            hover:bg-white 
                            hover:shadow-xl 
                            lg:mb-16 h-auto "
                            data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in"
                            data-aos-mirror="false"
                            data-aos-once="false">
                            <div class="p-6 flex flex-col items-center my-auto">
                                <img 
                                    class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                                    src="img/v2/new/ethos/upwrit-aim.svg" 
                                    alt="ceo_img"
                                />
                                <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                    Aims
                                </h3>
                                <p class="text-justify text-upwrit-grey text-md group-hover:text-gray-600">
                                    UpWrit aims to produce the next generation of 
                                    leaders in Sri Lanka. Our mission is to provide the best 
                                    all-round service delivery environment for our clients in 
                                    a caring, disciplined and inspiring atmosphere.
                                </p>
                            </div>
                        </div>

                        <!-- Card #2 -->
                        <div class="group flex flex-col rounded-xl bg-white shadow-lg border 
                            transition duration-500 ease-in-out
                            transform 
                            hover:-translate-y-1 
                            hover:scale-105 
                            hover:border-yellow-500 
                            hover:bg-white 
                            hover:shadow-xl 
                            lg:my-8 h-auto "
                            data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in"
                            data-aos-mirror="false"
                            data-aos-once="false">
                            <div class="p-6 flex flex-col items-center my-auto">
                                <img 
                                    class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                                    src="img/v2/new/ethos/upwrit-ethos.svg" 
                                    alt="ceo_img"
                                />
                                <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                    Ethos
                                </h3>
                                <p class="text-justify text-upwrit-grey text-md group-hover:text-gray-600">
                                    True to the principles of its founders, UpWrit Solutions 
                                    has always endeavoured to instill and nurture qualities such 
                                    as respect, compassion, self-discipline, fairness, dignity, 
                                    equity, honesty and integrity. As a business developer 
                                    with clients from many different communities, we believe 
                                    that these virtues are valued not only by our clients, but by 
                                    members of all professional bodies. 
                                </p>
                            </div>
                        </div>

                        <!-- Card #3 -->
                        <div class="group flex flex-col rounded-xl bg-white shadow-lg border 
                            transition duration-500 ease-in-out
                            transform 
                            hover:-translate-y-1 
                            hover:scale-105 
                            hover:border-yellow-500 
                            hover:bg-white 
                            hover:shadow-xl 
                            lg:mt-16 h-auto "
                            data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in"
                            data-aos-mirror="false"
                            data-aos-once="false">
                            <div class="p-6 flex flex-col items-center my-auto">
                                <img 
                                    class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                                    src="img/v2/new/ethos/upwrit-mission2.svg" 
                                    alt="ceo_img"
                                />
                                <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                    Mission
                                </h3>
                                <p class="text-justify text-upwrit-grey text-md group-hover:text-gray-600">
                                    Our clients should leave UpWrit confident, articulate, 
                                    well-balanced and able to think for themselves. They should be 
                                    comfortable both in operations and in their functionality. 
                                    We are ambitious and determined, yet sensitive to the needs 
                                    of our clients, supporting the critical and creative thinkers, 
                                    who are ready to make a positive difference to our future 
                                    and to the world. 
                                </p>
                            </div>
                        </div>
                    </div>           

                </div>
            </section>

            <!-- Services -->
            <section class="grid gap-y-20 grid-cols-1" id="services">

                <!-- Heading -->
                <div class="sm:w-3/4 lg:w-5/12 mx-auto px-12"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in"
                    data-aos-mirror="false"
                    data-aos-once="false">
                    <h1 class="text-5xl text-center text-upwrit-blue leading-tight pt-16" style="font-family: 'Caveat', cursive;">
                        WHAT WE PROVIDE
                    </h1>
                    <p class=" text-xl text-center text-upwrit-grey mt-4">
                        Our aim is to make it quick and easy for you to grow your company. 
                        You can find what you want and reach us with just a click of a button.
                    </p>
                </div>

                <!-- Feature #0  Ecommerce -->
                <div class="relative mt-20 lg:mt-24 "
                    >
                    <ecommerce></ecommerce>
                </div>

                <!-- Feature #1  Graphic -->
                <div class="relative mt-20 lg:mt-52 ">
                    <digital-marketing></digital-marketing>
                </div>

                <!-- Feature #2 WEB -->
                <div class="relative mt-20 lg:mt-52 ">
                    <web-design></web-design>
                </div>

                <!-- Feature #3 Marketing -->
                <div class="relative mt-20 lg:mt-52">
                    <graphic-designing></graphic-designing>
                </div>

                <!-- Feature #4 Financial Accounting -->
                <div class="relative mt-20 lg:mt-52 mb-60">
                    <financial-accounting></financial-accounting>
                </div>

            </section>

            <!-- Industries -->
            <section class="bg-upwrit-white py-20">
                <industries></industries>
            </section>

            <!-- Authors -->
            <section class="py-20 mt-20" id="about">
                
                <!-- Heading -->
                <div class="sm:w-3/4 lg:w-5/12 mx-auto px-12">
                    <h1 class="text-5xl text-center text-upwrit-blue">
                        Who are <sapn class="bg-upwrit-yellow text-blue" style="font-family: Raleway;"> we</sapn>?
                    </h1>
                </div>

                <!-- Cards -->
                <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
                    
                    <!-- Card #1 -->
                    <div class="group flex flex-col rounded-xl bg-white shadow-lg border 
                        transition duration-500 ease-in-out
                        transform 
                        hover:-translate-y-1 
                        hover:scale-105 
                        hover:border-yellow-500 
                        hover:bg-white 
                        hover:shadow-xl 
                        lg:mb-16 h-auto ">
                    
                        <div class="p-6 flex flex-col items-center">
                            <img 
                                class="rounded-full w-1/2 h-3/4 sm:w-1/2 sm:h-3/4"
                                src="img/v2/dp/hanii4.jpg" 
                                alt="ceo_img"
                            />
                            <h3 class="mt-5 mb-2 text-upwrit-blue text-lg group-hover:text-gray-500">
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
                    <div class="group flex flex-col rounded-xl bg-white shadow-lg border 
                        transition duration-500 ease-in-out 
                        transform 
                        hover:-translate-y-1 
                        hover:scale-105 
                        hover:border-yellow-500 
                        hover:bg-white 
                        hover:shadow-xl 
                        lg:my-8 h-auto ">
                        <div class="p-6 flex flex-col items-center">
                            <img 
                                class="rounded-full w-1/2 h-3/4 sm:w-1/2 sm:h-3/4"
                                src="img/v2/dp/khaazen2.jpg" 
                                alt="ceo_img"
                            />
                            <h3 class="mt-5 mb-2 text-upwrit-blue text-lg group-hover:text-gray-500">
                                Tuan Burah 
                            </h3>
                            <p class="mb-2 text-upwrit-grey font-light">
                                Founder & Chief Executive Officer
                            </p>
                            <p class="mb-2 text-upwrit-grey font-light text-center">
                                Reading M.Sc. IT, Pg.D. IT, <br> AMBCS- UK
                            </p>
                        </div>
                    </div>

                    <!-- Card #3 -->
                    <div class="group flex flex-col rounded-xl bg-white shadow-lg border 
                        transition duration-500 ease-in-out
                        transform 
                        hover:-translate-y-1 
                        hover:scale-105 
                        hover:border-yellow-500 
                        hover:bg-white 
                        hover:shadow-xl 
                        lg:mt-16 h-auto ">
                        <div class="p-6 flex flex-col items-center">
                            <img 
                                class="rounded-full w-1/2 h-3/4 sm:w-1/2 sm:h-3/4"
                                src="img/v2/dp/yosh2.png" 
                                alt="ceo_img"
                            />
                            <h3 class="mt-5 mb-2 text-upwrit-blue text-lg group-hover:text-gray-500">
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

            <!-- Contact -->
            <section class="bg-upwrit-white py-20" id="contact">
                <contact-us></contact-us>
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
        <footerview></footerview>
  </div> 
</template>

<script>

import Navbar from "../navbar/Navbar.vue";
import DigitalMarketing from "../components/DigitalMarketing.vue";
import GraphicDesigning from "../components/GraphicDesigning.vue";
import WebDesign from "../components/WebDesign.vue";
import FinancialAccounting from "../components/FinancialAccounting.vue";
import Industries from "../components/Industries.vue";
import Footerview from "../components/Footer.vue";
import ContactUs from "../components/ContactUs.vue";
import Ecommerce from "../components/Ecommerce.vue";
import Nav from "../components/Nav.vue";

// import countdown from "./Countdown.vue";

export default {
    components: {
        Navbar,
        DigitalMarketing,
        GraphicDesigning,
        WebDesign,
        FinancialAccounting,
        Industries,
        Footerview,
        ContactUs,
        Ecommerce,
        Nav,
    },
    data() {
        return {
            loading: true,
            welcome: false,
        };
    },
    created() {
        setTimeout(() => (
            this.loading = false
        ), 1500);

        setTimeout(() => (
            this.welcome = true
        ), 1500);
        
        setTimeout(() => (
            this.welcome = false
        ), 4500);
    },
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

</style>