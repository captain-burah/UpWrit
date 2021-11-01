<template>
<div class="w-full">
     <!-- Header -->
        <header class="container">
            <navbar></navbar>
        </header>

        <!-- Hero -->
        <section class="container relative mx-auto py-20">
            <div class="flex flex-col mb-8">
                <h1 class="order-1 text-gray-900 text-3xl font-extrabold tracking-tight mt-2">
                    Sri Lanka National Intellectual Property Law
                </h1>
                <nav aria-label="Breadcrumb" class="flex items-center text-gray-500 text-sm font-medium space-x-2 whitespace-nowrap">
                    <router-link to="/" class="hover:text-gray-900">
                        Home
                    </router-link>
                    <svg aria-hidden="true" width="24" height="24" fill="none" class="flex-none text-gray-300">
                    <path d="M10.75 8.75l3.5 3.25-3.5 3.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span class="truncate hover:text-gray-900">
                        Sri Lanka Intellectual Property Law
                    </span>
                </nav>
            </div>


            <!-- Preview -->
            <div class="space-y-20">
      
                <section aria-labelledby="heading-04740945117f4ec46b10f866630a6347">
                    <div class="flex flex-wrap md:flex-nowrap items-center mb-3 py-1.5 whitespace-nowrap">
                        <div class="min-w-0 flex items-center">
                            <h2 class="font-medium text-gray-900 truncate">
                                <span class="mr-1">Sri Lanka Intellectual Property Regulation</span>
                            </h2>
                            <span class="flex-none uppercase bg-gray-200 text-gray-600 text-xs tracking-wide font-semibold px-2 py-1 rounded-md ml-3">
                                PDF Preview
                            </span>
                        </div>
                    </div>
                    <div class="rounded-lg ring-1 ring-gray-900 ring-opacity-5 overflow-hidden bg-white">
                        <embed src="pdf/IPL.pdf" width="1100" height="680" type="application/pdf">
                    </div>
                </section>

                <section aria-labelledby="heading-04740945117f4ec46b10f866630a6347">
                    <div class="flex flex-wrap md:flex-nowrap items-center mb-3 py-1.5 whitespace-nowrap">
                        <div class="min-w-0 flex items-center">
                            <h2 class="font-medium text-gray-900 truncate">
                                <span class="mr-1">Sri Lanka Intellectual Property Act No.36 of 2003</span>
                            </h2>
                            <span class="flex-none uppercase bg-gray-200 text-gray-600 text-xs tracking-wide font-semibold px-2 py-1 rounded-md ml-3">
                                PDF Preview
                            </span>
                        </div>
                    </div>
                    <div class="rounded-lg ring-1 ring-gray-900 ring-opacity-5 overflow-hidden bg-white">
                        <embed src="pdf/IPL-Full.pdf" width="1100" height="680" type="application/pdf">
                    </div>
                </section>

            </div>
        </section>
        
        <footerview></footerview>
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
    }
}
</script>