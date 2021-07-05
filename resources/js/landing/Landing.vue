<template>
    <div>
        <main>
            <!-- <carousel :items="2" :autoplay="true" :nav="false">
                <img class="img-fluid" src="img/2.jpg">
                <img class="img-fluid" src="img/2.jpg">
                <img class="img-fluid" src="img/2.jpg">
                <img class="img-fluid" src="img/2.jpg">
                <img class="img-fluid" src="img/2.jpg">
            </carousel> -->
        </main>

        <footer>

        </footer>
    </div>
</template>

<script>
import Cover from "./main/Cover.vue";
import carousel from 'vue-owl-carousel2'
export default {
    components: {
        carousel,
        Cover,
    }
}
</script>
