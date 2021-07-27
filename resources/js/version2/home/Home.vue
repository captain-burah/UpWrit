<template>
  <div>
      
        <!-- Header -->
        <header>
            <navbar></navbar>
        </header>

        <!-- Hero -->
        <section class="relative">
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

            <!-- ROunded Rectangle -->
            <div class="hidden md:block overflow-hidden bg-upwrit-purple rounded-l-full absolute 
                        h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36">

            </div>
        </section>
  </div>
</template>

<script>

import Navbar from "../navbar/Navbar.vue";

export default {
    components: {
        Navbar,
    }
}
</script>

<style>

</style>