<template>
<div class="w-full bg-white">
     

        <div v-if="loading">
            <section class="absolute flex h-screen w-full bg-upwrit-white">
                <div class="m-auto flex justify-center items-center align-middle my-auto py-auto">
                    <div style="border-top-color:transparent;"
                        class="animate-spin rounded-full h-40 w-40
                            border-b-8 border-r-4 border-l-4 border-dotted border-upwrit-info"
                    ></div>
                </div>
            </section>
        </div>

        
        <div v-else>
            <!-- Hero -->
            <section class=" relative">
                <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 pt-14 lg:pt-52">
                    <!-- Content -->
                    <div class="flex flex-1 flex-col lg:items-start leading-tight md:mx-60">
                        <h2 class="text-upwrit-blue w-full text-4xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6" >
                            Join The World of Learners
                        </h2>
                        <p class="text-upwrit-grey w-full text-4xl text-right md:text-right mb-6 mt-10" style="font-family: 'Caveat', cursive;">
                            "Together, we write the next chapter of modern history"
                        </p>
                        <p class="text-upwrit-grey w-full text-2xl text-center lg:text-left mb-6 mt-10" style="font-family: 'Zen Kurenaido', sans-serif;">
                            We invest in training and developing our collegues to empower them with the skills and knowledge they need to excel
                            and grow professionally. Our unique culture is distinguished by a collaborative environment that supports open dialogue,
                            candid feedback and enduring relationships while acquiring standards form of professional ethics set forth by the distinct founders.
                        </p>
                        <div class="flex justify-center gap-4 w-full mt-10">
                            <a href="https://forms.gle/FZaMPA9KcCSxLuTFA">
                                <button type="button" class="btn btn-black hover:bg-white hover:text-black">
                                    <i class="fas fa-briefcase"></i>&nbsp;
                                    Apply Now!
                                </button>
                            </a>
                        </div>
                        <p class="flex justify-center w-full mt-3 text-upwrit-grey text-center">
                            Fill out this form behind the button.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Intro -->
            <section class="w-full mt-20 lg:mt-32">
                <div class="container ">
                    
                    <div class="sm:w-3/4 lg:w-3/4 mx-auto px-12">
                        <h1 class="text-5xl text-center text-upwrit-blue leading-tight" style="font-family: 'Caveat', cursive;">
                            WHY JOIN UPWRIT?
                        </h1>
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
                            lg:mb-16 h-auto ">
                            <div class="p-6 flex flex-col items-center my-auto">
                                <img 
                                    class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                                    src="img/v2/new/ethos/upwrit-aim.svg" 
                                    alt="ceo_img"
                                />
                                <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                    Impact
                                </h3>
                                <p class="text-justify text-upwrit-grey text-md group-hover:text-gray-600">
                                    We empower our customers to drive real progress in the world, help organizations
                                    achieve their goals and support individual's success at every step from education to career.
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
                            <div class="p-6 flex flex-col items-center my-auto">
                                <img 
                                    class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                                    src="img/v2/new/ethos/upwrit-ethos.svg" 
                                    alt="ceo_img"
                                />
                                <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                    Community
                                </h3>
                                <p class="text-justify text-upwrit-grey text-md group-hover:text-gray-600">
                                    We foster an inclusive environment where we welcome and learn from each other's unique 
                                    voices - advancing our culture, community and individual careers.
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
                            <div class="p-6 flex flex-col items-center my-auto">
                                <img 
                                    class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                                    src="img/v2/new/ethos/upwrit-mission2.svg" 
                                    alt="ceo_img"
                                />
                                <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                    Learn
                                </h3>
                                <p class="text-justify text-upwrit-grey text-md group-hover:text-gray-600">
                                    Working at Upwrit gives you access to a vast network of knowledge and connections.
                                </p>
                            </div>
                        </div>
                    </div>           

                </div>
            </section>

            <section class="w-full mt-20 lg:mt-32">
                <div class="sm:w-3/4 lg:w-5/12 mx-auto px-12">
                    <h1 class="text-5xl text-center text-upwrit-blue leading-tight pt-16" style="font-family: 'Caveat', cursive;">
                        Careers 
                    </h1>
                </div>
                <career-types></career-types>
            </section>

            <!-- Contact -->
            <section class="py-20">
                <div class="container ">
                    <div class="sm:w-3/4 lg:w-3/4 mx-auto px-12">
                        <h1 class="text-5xl text-center text-upwrit-blue leading-tight">
                            Contact Us
                        </h1>
                            <p class="mt-4 text-upwrit-grey text-xl text-center mb-6">
                                You can reach us via Email, WhatsApp, Facebook Messenger, Instagram Direct Message or just one phone call away.
                                Once you fill the Google sheet behind the button below, we will notify you immediately about your application.
                                It won't be long until you recieve your first project. 
                        </p>
                    </div>
                    <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-8 mx-auto text-xl">
                        <div class="flex items-center vorder-b mb-6 cursor-pointer">
                            <div class="flex justify-center gap-x-4 w-full">
                                <a href="https://forms.gle/FZaMPA9KcCSxLuTFA" class="animate-pulse">
                                <button type="button" class="btn btn-black hover:bg-white hover:text-black">
                                    <i class="fas fa-briefcase"></i>&nbsp;
                                    Apply Now!
                                </button>
                            </a>
                            </div>
                        </div>
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
            
            <footerview></footerview>
        </div>
        
</div>
</template>

<script>
import Navbar from "../navbar/Navbar.vue";
import Industries from "../components/Industries.vue";
import Footerview from "../components/Footer.vue";
import ContactUs from "../components/ContactUs.vue";
import CareerTypes from "./CareerTypes.vue";

// import countdown from "./Countdown.vue";

export default {
    components: {
        Navbar,
        Industries,
        Footerview,
        ContactUs,
        CareerTypes,
    },
    data() {
        return {
            loading: true,
        };
    },
    created() {
        setTimeout(() => (this.loading = false), 1500);

    },
}
</script>