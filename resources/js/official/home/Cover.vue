<template>
<div class="grid grid-rows-6 grid-flow-col h-4/6 gap-20 my-auto mx-auto px-0 items-center ">
    
    <div class="row-span-5 grid row md:grid-cols-5 my-auto flex mx-auto px-0 md:pt-5">
        
        <div class="md:col-span-2 flex"> 
            
            <div  
                class="my-auto md:px-24 md:py-8 px-8 pt-8 pb-4 mx-auto space-y-4 ">
                
                <div class="md:max-w-xl max-w-md">

                    <carousel :autoplay="true" :nav="false" :items="1" :margin="20" :dots="false"
                        :responsive="{0:{items:1,nav:false},600:{items:3,nav:true}}">
                        <div>
                            <h1 class="md:text-6xl text-6xl text-indigo-400 font-bold mb-4">
                                Headline comes here!
                            </h1>
                            <p class="text-gray-600 md:text-2xl text-xl text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>
                        <div>
                            <h1 class="md:text-6xl text-6xl text-red-400 font-bold mb-4">
                                Headline comes Two!
                            </h1>
                            <p class="text-gray-600 md:text-2xl text-xl text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>
                    </carousel>    
                </div>

            </div>

        </div>

        <div class="hidden relative md:block md:col-span-3 md:max-w-full px-8">
            <div 
                class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 
                    shadow-2xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl w-3/4 mx-auto">
            </div>
            <img src="img/comingSoon/12.jpg" 
                class="absolute rounded-2xl shadow-xl h-full
                        inset-0 w-3/4 object-cover object-center my-auto border-4 border-white mx-auto"
                alt="image"
            />
        </div>
        
    </div>
    <div class="grid row items-center h-auto mx-auto my-0 py-0 bottom-0">
        <div class=" my-0 p-7 bottom-0 rounded-full shadow-lg">
            <a href="#" 
                v-scroll-to="'#feature1'"
                class="text-7xl bottom-0">
                <i class="fas fa-arrow-down text-gray-400"></i>
            </a>
        </div>
    </div>
</div>
</template>
<script>
import carousel from 'vue-owl-carousel2';

export default {
    components: {
        carousel
    },
}
</script>