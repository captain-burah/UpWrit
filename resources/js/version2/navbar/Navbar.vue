<template>
  <div>
      <nav class="container  flex items-center py-4 mt-4 sm:mt-4">
          <div class="py-1 flex flex-1 justify-start items-center gap-12">
                <img class="rounded-lg"
                    src="img/comingSoon/logo.jpg"
                    height="35px" width="35px"
                    alt="brand_logo" 
                />
                <router-link to="/">
                    <span class="text-2xl " style="font-family: 'Raleway';">
                        UpWrit Solutions
                    </span>
                </router-link>
            </div>
            <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-upwrit-blue uppercase text-md">
                <li class="cursor-pointer">(+94) 76 769 8844</li>
                <li class="cursor-pointer">Services</li>
                <li class="cursor-pointer">About</li>
                <li class="cursor-pointer">JOBS</li>
                <li class="cursor-pointer">Contact</li>
                <!-- <button type="button" class="bg-upwrit-red text-white rounded-md px-7 py-3 uppercase">
                    Login
                </button> -->
            </ul>

            <div class="flex sm:hidden flex-1 justify-end">
                <i class="text-2xl fas fa-bars"></i>
            </div>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>