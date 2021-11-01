<template>
<div class="w-full">

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
            <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <!-- Content -->
                <div class="flex flex-1 flex-col items-center lg:items-start">
                    <h2 class="text-upwrit-blue text-4xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
                        Digital Marketing
                    </h2>
                    <p class="text-upwrit-grey text-2xl text-center lg:text-left mb-6" style="font-family: 'Zen Kurenaido', sans-serif;">
                        Armed with diverse perspectives and experiences, our high-energy
                        teams unite to develop world-class digital experiences that grow
                        companies. From brand strategy to web development to digital
                        marketing, beautiful design isn’t just what we do; it’s our life’s work.
                    </p>
                    <div class="flex justify-center flex-wrap gap-4 mt-16">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScltdehM_hjc0t1PX4mjP6aUMugrWuxOCQb8I3-kGvhvDoeGw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link" target="_blank">
                            <button type="button" class="btn btn-yellow hover:bg-upwrit-info hover:text-white text-black">
                                <i class="fas fa-quote-right"></i>&nbsp;
                                Get a Quotation
                            </button>
                        </a>
                        <button type="button" class="btn btn-info hover:bg-upwrit-yellow hover:text-black">
                            <i class="far fa-calendar-check"></i>&nbsp;
                            Schedule an Appointment
                        </button>
                        <button type="button" class="btn btn-black hover:bg-white hover:text-black">
                            <i class="fas fa-briefcase"></i>&nbsp;
                            Work with us
                        </button>
                    </div>
                </div>

                <!-- Image -->
                <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 imageContainer">
                    <img
                        class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4" 
                        src="img/v2/new/16.svg" 
                        alt="upwrit-digital-marketing"
                    />
                </div>
            </div>

            <!-- Rounded Rectangle -->
            <div class="hidden md:block overflow-hidden bg-upwrit-black rounded-l-full absolute 
                        h-80 w-2/4 top-60 right-0 lg:-bottom-28 lg:-right-0">
            </div>
        </section>

        <!-- Features -->
        <section class="bg-upwrit-white w-full py-20 mt-20 lg:mt-60">

            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mt-16">
                
                <!-- Card #1 -->
                <div class="group flex flex-col rounded-xl bg-white shadow-sm border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:mb-16 h-auto ">
                    <div class="p-6 flex flex-col items-center my-auto">
                        <img 
                            class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                            src="img/v2/new/DM/upwrit-se.svg" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                            Search Engine Optimization (SEO)
                        </h3>
                    </div>
                </div>

                <!-- Card #2 -->
                <div class="group flex flex-col rounded-xl shadow-sm bg-white border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:my-8 h-auto">
                    <div class="p-6 flex flex-col items-center my-auto">
                        <img 
                            class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                            src="img/v2/new/DM/upwrit-email.svg" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                            Email Marketing
                        </h3>
                    </div>
                </div>

                <!-- Card #3 -->
                <div class="group flex flex-col rounded-xl shadow-sm bg-white border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:mt-8 h-auto">
                    <div class="p-6 flex flex-col items-center my-auto">
                        <img 
                            class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                            src="img/v2/new/DM/upwrit-sm.svg" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                            Social Media Marketing
                        </h3>
                    </div>
                </div>
            </div>

            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mt-8">
                
                <!-- Card #1 -->
                <div class="group flex flex-col rounded-xl shadow-sm bg-white border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:mb-16 h-auto">
                    <div class="p-6 flex flex-col items-center my-auto">
                        <img 
                            class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                            src="img/v2/new/DM/upwrit-design.svg" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                            Design Planning
                        </h3>
                    </div>
                </div>

                <!-- Card #2 -->
                <div class="group flex flex-col rounded-xl shadow-sm bg-white border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:my-8 h-auto">
                    <div class="p-6 flex flex-col items-center my-auto">
                        <img 
                            class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                            src="img/v2/new/DM/upwrit-da.svg" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                            Display Advertising
                        </h3>
                    </div>
                </div>

                <!-- Card #3 -->
                <div class="group flex flex-col rounded-xl shadow-sm bg-white border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:mt-8 h-auto">
                    <div class="p-6 flex flex-col items-center my-auto">
                        <img 
                            class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"
                            src="img/v2/new/DM/upwrit-report.svg" 
                            alt="ceo_img"
                        />
                        <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                            Measures & Reports Performance (ROI & KPI's)
                        </h3>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Industries -->
        <section class="py-20">
            <industries></industries>
        </section>
        
        <footerview></footerview>
    </div>
</div>
</template>

<script>
import Navbar from "../navbar/Navbar.vue";
import Industries from "../components/Industries.vue";
import Footerview from "../components/Footer.vue";
// import countdown from "./Countdown.vue";

export default {
    components: {
        Navbar,
        Industries,
        Footerview,
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