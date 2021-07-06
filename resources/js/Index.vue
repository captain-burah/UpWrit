<template>
    <div class="bg-gray-100 sm:bg-yellow-400">
         <div class="px-8 py-12 space-y-6 max-w-md mx-auto sm:max-w-xl">
             <img src="img/comingSoon/19.jpg" class="h-20" alt="Logo" />
             <img src="img/comingSoon/12.jpg" class="rounded-lg shadow-xl sm:mt-8 sm:h-32 sm:w-full sm:object-cover object-center"  alt="image"/>
             <h1 class=" text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl">
                 You can work from anywhere! <span class=" text-yellow-700">Take advantage of it.</span>
            </h1>
            <p class="mt-2 text-gray-600 sm:mt-4 smLtext-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="mt-4">
                <a href="#" class=" inline-block rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm px-5 py-3 bg-indigo-500 bg-opacity-50  text-white">Book your escape!</a>
            </div>
         </div>
        
    </div>
</template>
<script>
import Landing from "./landing/Landing";
export default {
    components: {
        Landing
    }
}
</script>
<style>
    .navbar {
        backdrop-filter: saturate(130%) blur(3px);
    }
    .nav-link{
        color: black;
    }
</style>