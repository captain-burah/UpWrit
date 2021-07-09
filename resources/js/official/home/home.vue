<template>
    <div >
        
        <!-- Cover -->
        <div class="flex h-screen bg-white my-auto mx-0 px-0 max-w-screen">                
            <cover></cover>
            
        </div>


        <!-- Feature #1 -->
        <div class="h-screen bg-transparent" id="feature1">
            <!-- <featuretwo></featuretwo> -->
        </div>

        
        <!-- Feature #2-->
        <div class="h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            <!-- <featureone></featureone> -->
        </div>
    </div>
</template>
<script>

import Cover from "./Cover.vue";
import Navibar from "./Navbar.vue";
export default {
    components: {
        cover: Cover,
        navibar: Navibar
    }
}
</script>

<style scoped>
.featureH {
    height: 40rem;
}
</style>