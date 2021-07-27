<template>
  <div>
      <nav class="container  flex items-center py-4 mt-4 sm:mt-12">
          <div class="py-1 flex flex-1 justify-start items-center gap-12">
                <img class="rounded-lg"
                    src="img/comingSoon/logo.jpg"
                    height="35px" width="35px"
                    alt="brand_logo" 
                />
                <span class="text-xl " style="font-family: 'Raleway';">
                    UpWrit Solutions
                </span>
            </div>
            <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-upwrit-blue uppercase text-sm">
                <li class="cursor-pointer">Features</li>
                <li class="cursor-pointer">Pricing</li>
                <li class="cursor-pointer">Contact</li>
                <button type="button" class="bg-upwrit-red text-white rounded-md px-7 py-3 uppercase">
                    Login
                </button>
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