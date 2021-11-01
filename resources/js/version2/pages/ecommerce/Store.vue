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
        <section class="container relative mx-auto py-20">
            <div class="flex flex-col mb-8">
                <h1 class="order-1 text-gray-900 text-3xl font-extrabold tracking-tight mt-2">
                    Storefront Pages
                </h1>
                <nav aria-label="Breadcrumb" class="flex items-center text-gray-500 text-sm font-medium space-x-2 whitespace-nowrap">
                    <router-link to="ecommerce" class="hover:text-gray-900">
                        Ecommerce
                    </router-link>
                    <svg aria-hidden="true" width="24" height="24" fill="none" class="flex-none text-gray-300">
                    <path d="M10.75 8.75l3.5 3.25-3.5 3.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span class="truncate hover:text-gray-900">
                        Storefront pages
                    </span>
                </nav>
            </div>
            <div class="space-y-20">
    
                <section aria-labelledby="heading-04740945117f4ec46b10f866630a6347">
                    <div class="flex flex-wrap md:flex-nowrap items-center mb-3 py-1.5 whitespace-nowrap">
                        <div class="min-w-0 flex items-center">
                            <h2 class="font-medium text-gray-900 truncate">
                                <span class="mr-1">With dark nav and footer</span>
                            </h2>
                            <span class="flex-none uppercase bg-gray-200 text-gray-600 text-xs tracking-wide font-semibold px-2 py-1 rounded-md ml-3">
                                PNG Preview
                            </span>
                        </div>
                    </div>
                    <div class="rounded-lg ring-1 ring-gray-900 ring-opacity-5 overflow-hidden bg-white">
                        <img class="sm:hidden w-full h-auto" loading="lazy" src="img/v2/ecommerce/sm/storefront-pages.01-upwrit.jpg" alt="" width="375" height="5075">
                        <img class="hidden sm:block w-full h-auto" loading="lazy" src="img/v2/ecommerce/lg/storefront-pages.01-upwrit.jpg" alt="" width="1280" height="4120">
                    </div>
                </section>

                <section aria-labelledby="heading-04740945117f4ec46b10f866630a6347">
                    <div class="flex flex-wrap md:flex-nowrap items-center mb-3 py-1.5 whitespace-nowrap">
                        <div class="min-w-0 flex items-center">
                            <h2 class="font-medium text-gray-900 truncate">
                                <span class="mr-1">With offers and testimonials</span>
                            </h2>
                            <span class="flex-none uppercase bg-gray-200 text-gray-600 text-xs tracking-wide font-semibold px-2 py-1 rounded-md ml-3">
                                PNG Preview
                            </span>
                        </div>
                    </div>
                    <div class="rounded-lg ring-1 ring-gray-900 ring-opacity-5 overflow-hidden bg-white">
                        <img class="sm:hidden w-full h-auto" loading="lazy" src="img/v2/ecommerce/sm/storefront-pages.02-upwrit.jpg" alt="" width="375" height="5075">
                        <img class="hidden sm:block w-full h-auto" loading="lazy" src="img/v2/ecommerce/lg/storefront-pages.02-upwrit.jpg" alt="" width="1280" height="4120">
                    </div>
                </section>

                <section aria-labelledby="heading-04740945117f4ec46b10f866630a6347">
                    <div class="flex flex-wrap md:flex-nowrap items-center mb-3 py-1.5 whitespace-nowrap">
                        <div class="min-w-0 flex items-center">
                            <h2 class="font-medium text-gray-900 truncate">
                                <span class="mr-1">With image tiles and feature sections</span>
                            </h2>
                            <span class="flex-none uppercase bg-gray-200 text-gray-600 text-xs tracking-wide font-semibold px-2 py-1 rounded-md ml-3">
                                PNG Preview
                            </span>
                        </div>
                    </div>
                    <div class="rounded-lg ring-1 ring-gray-900 ring-opacity-5 overflow-hidden bg-white">
                        <img class="sm:hidden w-full h-auto" loading="lazy" src="img/v2/ecommerce/sm/storefront-pages.03-upwrit.jpg" alt="" width="375" height="5075">
                        <img class="hidden sm:block w-full h-auto" loading="lazy" src="img/v2/ecommerce/lg/storefront-pages.03-upwrit.jpg" alt="" width="1280" height="4120">
                    </div>
                </section>

                <section aria-labelledby="heading-04740945117f4ec46b10f866630a6347">
                    <div class="flex flex-wrap md:flex-nowrap items-center mb-3 py-1.5 whitespace-nowrap">
                        <div class="min-w-0 flex items-center">
                            <h2 class="font-medium text-gray-900 truncate">
                                <span class="mr-1">With overlapping image tiles and perks</span>
                            </h2>
                            <span class="flex-none uppercase bg-gray-200 text-gray-600 text-xs tracking-wide font-semibold px-2 py-1 rounded-md ml-3">
                                PNG Preview
                            </span>
                        </div>
                    </div>
                    <div class="rounded-lg ring-1 ring-gray-900 ring-opacity-5 overflow-hidden bg-white">
                        <img class="sm:hidden w-full h-auto" loading="lazy" src="img/v2/ecommerce/sm/storefront-pages.04-upwrit.jpg" alt="" width="375" height="5075">
                        <img class="hidden sm:block w-full h-auto" loading="lazy" src="img/v2/ecommerce/lg/storefront-pages.04-upwrit.jpg" alt="" width="1280" height="4120">
                    </div>
                </section>
                        
            </div>
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
import Navbar from "../../navbar/Navbar.vue";
import Industries from "../../components/Industries.vue";
import Footerview from "../../components/Footer.vue";
import ContactUs from "../../components/ContactUs.vue";

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