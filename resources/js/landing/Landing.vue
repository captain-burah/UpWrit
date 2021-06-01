<template>
    <div>
        <topics></topics>
        <main>
            <div class="container-flex"><!-- Cover -->
              <cover></cover>
            </div><!-- /Cover -->

            <div class="container-flex mb-5">
                <h1 class="container">Popular Lecture Halls</h1>
                <classes></classes>
            </div>

            <div class="container-flex">
                <h1 class="container text-right">Most Outstanding Lecturers</h1>
            </div>
        </main>
        <footer></footer>
    </div>
</template>
<script>
import Topics from "./main/Topics.vue";
import Cover from "./main/Cover.vue";
import Classes from "./classes/Classes";

export default {
    components: {
        Topics,
        Cover,
        Classes
    }
}
</script>
