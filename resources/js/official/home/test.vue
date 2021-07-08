<template>
    <div class="bg-gray-300 sm:bg-blue-200">

        <div class="bg-gray-100 bg-cover bg-center grid lg:grid-cols-2 2xl:grid-cols-5">
            
            <div class="px-8 py-12 space-y-6 max-w-md mx-auto sm:max-w-xl 
                    lg:px-12 lg:py-24 lg:max-w-full xl:mx-auto 2xl:col-span-2">

                <div class="xl:max-w-xl">
                    <img src="img/comingSoon/19.jpg" class="h-20" alt="Logo"/>

                    <img src="img/comingSoon/12.jpg" 
                        class="rounded-lg shadow-xl sm:mt-8 sm:h-32 sm:w-full 
                                sm:object-cover object-center lg:hidden"  
                        alt="image"
                    />

                    <h1 class="text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl">
                        You can work from anywhere! 
                        <br class="hidden lg:inline">
                        <span class=" text-yellow-700">Take advantage of it.</span>
                    </h1>

                    <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>

                    <div class="mt-4">
                        <a href="#" class=" inline-block rounded-lg shadow-lg uppercase tracking-wider 
                        font-semibold text-sm px-5 py-3 bg-indigo-500 bg-opacity-50  text-white">
                        Book your escape!
                    </a>
                    </div>
                </div>
            </div>

            <div class="hidden relative lg:block 2xl:col-span-3">
                <img src="img/comingSoon/12.jpg" 
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    alt="image"
                />
            </div>
        </div>
    </div>
</template>