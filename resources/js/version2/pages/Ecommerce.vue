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
            <!-- Header -->
            <header class="container">
                <navbar></navbar>
            </header>

            <!-- Hero -->
            <section class=" relative">
                <div class="container flex flex-col-reverse lg:flex-row-reverse items-center gap-12 mt-14 lg:mt-28">
                    <!-- Content -->
                    <div class="flex flex-1 flex-col items-center lg:items-start">
                        <h2 class="text-upwrit-blue text-4xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
                            Ecommerce Solutions
                        </h2>
                        <p class="text-upwrit-grey text-2xl text-center lg:text-left mb-6" style="font-family: 'Zen Kurenaido', sans-serif;">
                            Elevate your shop with a trusted ecommerce solution that your customers will love.
                            Built with a renowned, intuitive team of designers, content writers and developers, 
                            we manage your online presence with an upwrit guarantee.
                        </p>
                        <div class="flex justify-center  gap-4 w-full mt-16">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScltdehM_hjc0t1PX4mjP6aUMugrWuxOCQb8I3-kGvhvDoeGw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link" 
                                target="_blank" class="flex-nowrap">
                                <button type="button" class="btn btn-yellow hover:bg-upwrit-info hover:text-white text-black flex-nowrap">
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
                            src="img/v2/new/17.svg" 
                            alt="upwrit-ecommerce"
                        />
                    </div>
                </div>

                <!-- Rounded Rectangle -->
                <div data-aos="fade-in" class="
                    hidden 
                    md:block 
                    overflow-hidden 
                    bg-upwrit-black 
                    rounded-r-full 
                    absolute 
                    h-80 w-2/4 
                    top-60 
                    left-0 
                    lg:-bottom-28 
                    lg:-left-0">
                </div>
            </section>

            <!-- Features -->
            <section class="w-full py-20 mt-20 lg:mt-60">
                <div class="sm:w-3/4 lg:w-5/12 mx-auto px-12 mb-32">
                    <h1 class="text-6xl text-center text-upwrit-blue leading-tight pt-16" style="font-family: 'Caveat', cursive;">
                        Beautiful UI designs, crafted with Passion
                    </h1>
                    <p class="text-md text-center text-upwrit-blue leading-tight pt-4" style="font-family: 'Caveat', cursive;">
                        Get started by checking out our free preview pages, 
                        or browsing all of the examples in the categories you're most curious about.
                    </p>
                </div>

                <div class="container col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-20 lg:gap-x-24"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in"
                    data-aos-mirror="false"
                    data-aos-once="false">
                    <router-link to="/storefront-pages" 
                        class="group relative bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5 border border-gray-300
                        hover:border-yellow-500 hover:bg-white hover:shadow-xl">
                        <div class=" bg-gray-100 pt-[50%] overflow-hidden">
                            <div class=" inset-0 w-full h-full rounded-t-lg overflow-hidden">
                            <img src="img/v2/ecommerce/icons/storefront-pages-upwrit.png" alt="" class=" inset-0 w-full h-full">
                            </div>
                        </div>
                        <div class="py-3 px-4">
                            <p class="text-md font-medium text-gray-900 mb-1 text-center">
                            Storefront Pages
                            </p>
                            <p class="text-sm font-medium text-gray-500 text-center">4 designs</p>
                                    <p class="absolute z-10 top-3 right-3 text-white bg-gray-900 bg-opacity-30 rounded-full flex items-center justify-center p-1">
                            <span class="sr-only">PNG previews only, upgrade to get the HTML.</span>
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                                <path d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </p>
                        </div>
                    </router-link>

                    <router-link to="product-pages" 
                        class="group relative bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5 border border-gray-300
                            hover:border-yellow-500 hover:bg-white hover:shadow-xl">
                        <div class=" bg-gray-100 pt-[50%] overflow-hidden">
                            <div class=" inset-0 w-full h-full rounded-t-lg overflow-hidden">
                            <img src="img/v2/ecommerce/icons/product-pages-upwrit.png" alt="" class=" inset-0 w-full h-full">
                            </div>
                        </div>
                        <div class="py-3 px-4">
                            <p class="text-md font-medium text-gray-900 mb-1 text-center">
                            Product Pages
                            </p>
                            <p class="text-sm font-medium text-gray-500 text-center">3 designs</p>
                                    <p class="absolute z-10 top-3 right-3 text-white bg-gray-900 bg-opacity-30 rounded-full flex items-center justify-center p-1">
                            <span class="sr-only">PNG previews only, upgrade to get the HTML.</span>
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                                <path d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </p>
                        </div>
                    </router-link>

                    <router-link to="category-pages" 
                        class="group relative bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5 border border-gray-300
                            hover:border-yellow-500 hover:bg-white hover:shadow-xl">
                        <div class=" bg-gray-100 pt-[50%] overflow-hidden">
                            <div class=" inset-0 w-full h-full rounded-t-lg overflow-hidden">
                            <img src="img/v2/ecommerce/icons/category-pages-upwrit.png" alt="" class=" inset-0 w-full h-full">
                            </div>
                        </div>
                        <div class="py-3 px-4">
                            <p class="text-md font-medium text-gray-900 mb-1 text-center">
                            Category Pages
                            </p>
                            <p class="text-sm font-medium text-gray-500 text-center">3 designs</p>
                                    <p class="absolute z-10 top-3 right-3 text-white bg-gray-900 bg-opacity-30 rounded-full flex items-center justify-center p-1">
                            <span class="sr-only">PNG previews only, upgrade to get the HTML.</span>
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                                <path d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </p>
                        </div>
                    </router-link>

                    <router-link to="shopping-cart-pages" 
                        class="group relative bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5 border border-gray-300
                            hover:border-yellow-500 hover:bg-white hover:shadow-xl">
                        <div class=" bg-gray-100 pt-[50%] overflow-hidden">
                            <div class=" inset-0 w-full h-full rounded-t-lg overflow-hidden">
                            <img src="img/v2/ecommerce/icons/shopping-cart-pages-upwrit.png" alt="" class=" inset-0 w-full h-full">
                            </div>
                        </div>
                        <div class="py-3 px-4">
                            <p class="text-md font-medium text-gray-900 mb-1 text-center">
                            Shopping Cart Pages
                            </p>
                            <p class="text-sm font-medium text-gray-500 text-center">2 designs</p>
                                    <p class="absolute z-10 top-3 right-3 text-white bg-gray-900 bg-opacity-30 rounded-full flex items-center justify-center p-1">
                            <span class="sr-only">PNG previews only, upgrade to get the HTML.</span>
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                                <path d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </p>
                        </div>
                    </router-link>

                    <router-link to="order-pages" 
                        class="group relative bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5 border border-gray-300
                            hover:border-yellow-500 hover:bg-white hover:shadow-xl">
                        <div class=" bg-gray-100 pt-[50%] overflow-hidden">
                            <div class=" inset-0 w-full h-full rounded-t-lg overflow-hidden">
                            <img src="img/v2/ecommerce/icons/order-detail-pages-upwrit.png" alt="" class=" inset-0 w-full h-full">
                            </div>
                        </div>
                        <div class="py-3 px-4">
                            <p class="text-md font-medium text-gray-900 mb-1 text-center">
                            Order Detail Pages
                            </p>
                            <p class="text-sm font-medium text-gray-500 text-center">3 designs</p>
                                    <p class="absolute z-10 top-3 right-3 text-white bg-gray-900 bg-opacity-30 rounded-full flex items-center justify-center p-1">
                            <span class="sr-only">PNG previews only, upgrade to get the HTML.</span>
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                                <path d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </p>
                        </div>
                    </router-link>
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