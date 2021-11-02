<template>
<div>
    <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                    
        <!-- Image -->
        <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
                class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4"  
                src="img/v2/new/17.svg" 
                alt="ecommerce-image"
                data-aos="fade-left">
        </div>

        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-end px-12"
            data-aos="fade-right">
            <h1 class="text-4xl text-upwrit-blue text-center lg:text-right sm:w-3/4 lg:w-full">
                E-commerce
            </h1>
            <p class="text-4xl text-upwrit-black mt-8 my-4 text-center sm:w-3/4 lg:w-full italic" style="font-family: 'Caveat', cursive;">
                "Enrich your shopping list wisely" 
            </p>
            <p class="text-xl text-upwrit-grey my-4 text-justify lg:text-justify sm:w-3/4 lg:w-full">
                Elevate your shop with a trusted ecommerce solution that your customers will love.
                Built with a renowned, intuitive team of designers, content writers and developers, 
                we manage your online presence with an upwrit guarantee.
            </p>
            <router-link to="/ecommerce">
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
            rounded-l-full 
            absolute 
            h-80 
            w-2/4 
            -bottom-24
            -right-0"
        data-aos="fade-left"
    >
    </div>
</div>
</template>