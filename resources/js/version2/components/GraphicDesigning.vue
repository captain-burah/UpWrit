<template>
<div>
    <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    
        <!-- Image -->
        <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
                class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"  
                src="img/v2/new/20.svg" 
                alt="feature1_image"
                data-aos="fade-right"
                data-aos-offset="250"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                data-aos-mirror="false"
                data-aos-once="false">
        </div>

        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start px-12"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            data-aos-mirror="false"
            data-aos-once="false">
            <h1 class="text-4xl text-upwrit-blue">
                Graphic Design
            </h1>
            <p class="text-4xl text-upwrit-black mt-8 my-4 text-center sm:w-3/4 lg:w-full italic" style="font-family: 'Caveat', cursive;">
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
            <router-link to="/graphic-design">
                <button type="button" class="btn btn-info hover:bg-upwrit-yellow hover:text-black mt-6">
                    More info
                </button>
            </router-link>
        </div>
    </div>
    
    <!-- Rounded Rectangle -->
    <div 
        class="
            hidden 
            lg:block 
            overflow-hidden 
            bg-gray-200
            opacity-50            
            border-b-4
            border-gray-500
            rounded-r-full 
            absolute 
            h-80 
            w-2/4 
            -bottom-24
            -left-0"
            data-aos="fade-right"
            data-aos-offset="250"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"
    >
    </div>
</div>
</template>