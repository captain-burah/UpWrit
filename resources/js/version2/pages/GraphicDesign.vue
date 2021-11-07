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
                <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-60">
                    <!-- Content -->
                    <div class="flex flex-1 flex-col items-center lg:items-start">
                        <h2 class="text-upwrit-blue text-4xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
                            Graphic Design
                        </h2>
                        <p class="text-upwrit-grey text-2xl text-center lg:text-left mb-6" style="font-family: 'Zen Kurenaido', sans-serif;">
                            UpWrit has an offshore graphic design team based in Colombo, 
                            who invests their creativity, imagination, and technology at the helm of 
                            its graphic designers, with sheer will & focus on achieving our client's objectives.

                            Our simple process in graphical and visual designing gives you a competetive nature to 
                            you and your business.
                        </p>
                        <div class="flex justify-center  gap-4 w-full mt-16">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScltdehM_hjc0t1PX4mjP6aUMugrWuxOCQb8I3-kGvhvDoeGw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link" 
                                target="_blank" class="flex-nowrap">
                                <button type="button" class="btn btn-yellow hover:bg-upwrit-info hover:text-white text-black flex-nowrap">
                                    <i class="fas fa-quote-right"></i>&nbsp;
                                    Get a Quotation
                                </button>
                            </a>
                            <a href="https://forms.gle/JVuR52N4mJ2xg7Mj9">
                                <button type="button" class="btn btn-info hover:bg-upwrit-yellow hover:text-black">
                                    <i class="far fa-calendar-check"></i>&nbsp;
                                    Schedule an Appointment
                                </button>
                            </a>
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
                            src="img/v2/new/20.svg" 
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
            <section class="w-full py-20 mt-20 lg:mt-60">
                <div class="sm:w-3/4 lg:w-5/12 mx-auto px-12">
                    <h1 class="text-5xl text-center text-upwrit-blue leading-tight pt-16" style="font-family: 'Caveat', cursive;">
                        Types of Designs we do
                    </h1>
                </div>

                <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mt-8">
                    <!-- Card #1 -->
                    <div class="group flex flex-col rounded-xl bg-white shadow-sm border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:mb-16 h-auto ">
                        <div class="p-6 flex flex-col items-center my-auto">
                            <img 
                                class="w-3/4 h-3/4 sm:w-full sm:h-full"
                                src="img/v2/gd/upwrit-package-design.jpg" 
                                alt="upwri-package-design"
                            />
                            <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                Product & Packaging
                            </h3>
                        </div>
                    </div>

                    <!-- Card #2 -->
                    <div class="group flex flex-col rounded-xl bg-white shadow-sm border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:my-8 h-auto ">
                        <div class="p-6 flex flex-col items-center my-auto">
                            <img 
                                class="w-3/4 h-3/4 sm:w-full sm:h-full"
                                src="img/v2/gd/upwrit-brand-logo-design.jpg" 
                                alt="upwrit-brand-logo-design"
                            />
                            <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                Brand Identity & Logo
                            </h3>
                        </div>
                    </div>

                    <!-- Card #3 -->
                    <div class="group flex flex-col rounded-xl bg-white shadow-sm border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:mt-16 h-auto ">
                        <div class="p-6 flex flex-col items-center my-auto">
                            <img 
                                class="w-3/4 h-3/4 sm:w-full sm:h-full"
                                src="img/v2/gd/upwrit-social-meida-design.jpg" 
                                alt="upwrit-social-media-design"
                            />
                            <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                Social Media Content
                            </h3>
                        </div>
                    </div>
                </div>

                <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mt-8">
                    
                    <!-- Card #1 -->
                    <div class="group flex flex-col rounded-xl bg-white shadow-sm border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:mb-16 h-auto ">
                        <div class="p-6 flex flex-col items-center my-auto">
                            <img 
                                class="w-3/4 h-3/4 sm:w-full sm:h-full"
                                src="img/v2/gd/upwrit-advertising.jpg" 
                                alt="upwrit-advertising"
                            />
                            <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                Marketing & Advertising
                            </h3>
                        </div>
                    </div>

                    <!-- Card #2 -->
                    <div class="group flex flex-col rounded-xl bg-white shadow-sm border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:my-8 h-auto ">
                        <div class="p-6 flex flex-col items-center my-auto">
                            <img 
                                class="w-3/4 h-3/4 sm:w-full sm:h-full"
                                src="img/v2/gd/upwrit-ui&ux.jpg" 
                                alt="upwrit-ui&ux"
                            />
                            <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                Ui & Ux Design
                            </h3>
                        </div>
                    </div>

                    <!-- Card #3 -->
                    <div class="group flex flex-col rounded-xl bg-white shadow-sm border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:mt-16 h-auto ">
                        <div class="p-6 flex flex-col items-center my-auto">
                            <img 
                                class="w-3/4 h-3/4 sm:w-full sm:h-full"
                                src="img/v2/gd/upwrit-publication.jpg" 
                                alt="ceo_img"
                            />
                            <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                Layout & Publication Design
                            </h3>
                        </div>
                    </div>
                </div>


                <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mt-8">
                    
                    <!-- Card #1 -->
                    <div class="group flex flex-col rounded-xl bg-white shadow-sm border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:mb-16 h-auto ">
                        <div class="p-6 flex flex-col items-center my-auto">
                            <img 
                                class="w-3/4 h-3/4 sm:w-full sm:h-full"
                                src="img/v2/gd/upwrit-motion-graphics.jpg" 
                                alt="upwrit-motion-graphics"
                            />
                            <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                Motion Graphics
                            </h3>
                        </div>
                    </div>

                    <!-- Card #2 -->
                    <div class="group flex flex-col rounded-xl bg-white shadow-sm border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:my-8 h-auto ">
                        <div class="p-6 flex flex-col items-center my-auto">
                            <img 
                                class="w-3/4 h-3/4 sm:w-full sm:h-full"
                                src="img/v2/gd/upwrit-videography.jpg" 
                                alt="upwrit-videography"
                            />
                            <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                Videography & Animation
                            </h3>
                        </div>
                    </div>

                    <!-- Card #3 -->
                    <div class="group flex flex-col rounded-xl bg-white shadow-sm border border-gray-300 hover:border-yellow-500 hover:bg-white hover:shadow-xl lg:mt-16 h-auto ">
                        <div class="p-6 flex flex-col items-center my-auto">
                            <img 
                                class="w-3/4 h-3/4 sm:w-full sm:h-full"
                                src="img/v2/gd/upwrit-art&illustration.jpg" 
                                alt="upwrit-art&illustration"
                            />
                            <h3 class="mt-10 mb-2 text-upwrit-blue text-xl text-center group-hover:text-gray-500">
                                Art & Illustration
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Industries -->
            <section class="bg-upwrit-white py-20">
                <industries></industries>
            </section>

            <!-- Contact -->
            <section class="py-20">
                <contact-us></contact-us>
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

// import countdown from "./Countdown.vue";

export default {
    components: {
        Navbar,
        Industries,
        Footerview,
        ContactUs,
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