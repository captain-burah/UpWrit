<template>
<div class="h-5/6 mt-0 mb-auto mx-auto px-0 items-center bg-center bg-cover bg-no-repeat w-full "
        style="background-image: url('img/landing/7.jpeg');">

    <div class="grid grid-rows-6 grid-flow-col min-h-screen bg-center bg-cover bg-no-repeat my-auto mx-auto items-center"
        >
        <div class="row-span-4 grid row md:grid-cols-5 md:mb-32 mb-auto mt-auto flex mx-auto px-0 md:pt-5">
            
            <div class="md:col-span-3 flex w-full  bg-white rounded-xl"> 
                
                <div  
                    class=" w-full my-auto md:pl-16 md:pr-8 md:py-8 px-8 pt-8 pb-4 mx-auto space-y-4 
                            ">
                    
                    <div class="w-full">

                        <carousel :autoplay="true" :nav="false" :items="1" :margin="20" :dots="false"
                            :responsive="{0:{items:1,nav:false},600:{items:3,nav:true}}"
                            class="md:max-w-full max-w-md">
                            <div >
                                <p class="text-gray-400 md:text-xl text-lg text-left pl-4 pb-2">
                                    We Make IT Happen.
                                </p>
                                <div class="border-l-4 border-pink-400 pl-4 pr-4 pb-4 pt-1 ">
                                    
                                    <h1 class="md:text-7xl text-6xl text-gray-600 font-bold pb-4">
                                        Where do you want to go today? 
                                    </h1>
                                    <p class="text-gray-500 md:text-2xl text-xl pt-4 text-justify">
                                        We at UpWrit, deliver innovations that drive stronger administration, management and support our clients need.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p class="text-gray-400 md:text-xl text-lg text-left pl-4 pb-2">
                                    Your potential. Our passion.
                                </p>
                                <div class="border-l-4 border-blue-400 pl-4 pr-4 pb-4 pt-1 ">
                                    <h1 class="md:text-7xl text-6xl text-gray-600 font-bold pb-4">
                                        Are you looking for a Brand recognition?
                                    </h1>
                                    <p class="text-gray-500 md:text-2xl text-xl pt-4 text-justify">
                                        Sometimes, the best laid-out plans go awry and you tend to wonder - why?
                                        <br>
                                        That is precisely what we deliver, a driving force creating, designing 
                                        and developing your needs to the extent of first success.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p class="text-gray-400 md:text-xl text-lg text-left pl-4 pb-2">
                                    Can You Hear Me Now? Good.
                                </p>
                                <div class="border-l-4 border-blue-400 pl-4 pr-4 pb-4 pt-1 ">
                                    <h1 class="md:text-7xl text-6xl text-gray-600 font-bold pb-4">
                                        Want to take your Business online?
                                    </h1>
                                    <p class="text-gray-500 md:text-2xl text-xl pt-4 text-justify">
                                        Get yourself a customized, user friendly and responsive website by defining your standards, to be followed
                                        and craft a unique intuitive digital experience for your business.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p class="text-gray-400 md:text-xl text-lg text-left pl-4 pb-2">
                                    A Virtual World of Live Pictures.
                                </p>
                                <div class="border-l-4 border-blue-400 pl-4 pr-4 pb-4 pt-1 ">
                                    <h1 class="md:text-7xl text-6xl text-gray-600 font-bold pb-4">
                                        Yes, we design all Graphical contents.
                                    </h1>
                                    <p class="text-gray-500 md:text-2xl text-xl pt-4 text-justify">
                                        When you turn to craft a face for a brand or product, you need someone who can 
                                        visualize the unpredictable and that's where we come in to play, narrating stories through simple strokes 
                                        of brush and paint in digital space.
                                    </p>
                                </div>
                            </div>
                        </carousel>    
                    </div>

                </div>

            </div>

            <div class="hidden relative md:block md:col-span-2 md:max-w-full px-8">
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
        <div class="grid row-span-2 grid-cols-6 w-full items-center h-auto mx-auto my-0 py-0 bottom-0 cursor-pointer"
            v-scroll-to="'#feature1'">
            <div class="col-span-2"></div>
            <div class="col-span-2 my-0 p-7 bottom-0 rounded-2xl shadow-lg bg-white opacity-90 text-center">
                <a href="#" 
                    
                    class="text-7xl bottom-0  mx-auto text-center">
                    <i class="fas fa-arrow-down text-gray-500"></i>
                </a>
            </div>
            <div class="col-span-2"></div>
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