<template>
    <div >

        <!-- Cover -->
        <div class="flex h-screen bg-gray-100 my-auto">
            <cover></cover>    
        </div>


        <!-- Feature #1 -->
        <div class="h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            <!-- <featureone></featureone> -->
        </div>


        <!-- Feature #2 -->
        <div class="h-screen bg-transparent">
            <!-- <featuretwo></featuretwo> -->
        </div>
    </div>
</template>
<script>

import Cover from "./Cover.vue";
export default {
    components: {
        cover: Cover    
    }
}
</script>

<style scoped>
.featureH {
    height: 40rem;
}
</style>