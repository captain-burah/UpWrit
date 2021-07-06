<template>
    <div 
        class="bg-fixed bg-center" 
        style="background-image: url('img/comingSoon/blur3.jpg');"
    >   
        <home></home>
        
    </div>
</template>

<script>
import Home from "./official/home/home.vue";

export default {
    components: {
        Home
    }
}
</script>
<style>
.image{
    background: bottom center no-repeat;
    background-size: cover;
}
    .navbar {
        backdrop-filter: saturate(130%) blur(3px);
    }
    .nav-link{
        color: black;
    }
</style>