<template>
<div>
    <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    
        <!-- Image -->
        <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
                class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"  
                src="img/v2/new/16.svg" 
                alt="feature1_image"
                data-aos="fade-right">
        </div>

        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start px-12"
            data-aos="fade-left">
            <h1 class="text-4xl text-upwrit-blue">
                Digital Marketing
            </h1>
            <p class="text-4xl text-upwrit-black mt-8 my-4 text-center sm:w-3/4 lg:w-full italic" style="font-family: 'Caveat', cursive;">
                "Its a new age for advertising; digital marketing" 
            </p>
            <p class="text-xl text-upwrit-grey my-4 text-justify lg:text-justify sm:w-3/4 lg:w-full">
                Armed with diverse perspectives and experiences, our high-energy
                teams unite to develop world-class digital experiences that grow
                companies. From brand strategy to web development to digital
                marketing, beautiful design isn’t just what we do; it’s our life’s work.
            </p>
            <router-link to="digital-marketing">
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
            border-b-4
            border-gray-500
            opacity-50
            rounded-r-full 
            absolute 
            h-80 
            w-2/4 
            -bottom-36
            -left-0"
            data-aos="fade-right"
    >
    </div>
</div>
</template>