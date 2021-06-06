<template>
    <div>
        
        <main>            
            <div class="container-flex"><!-- Cover -->
              <cover></cover>
            </div><!-- /Cover -->

            <topics></topics>

            <div class="container-flex mb-5 pt-4">
                <classes></classes>
                <div class="row mx-3">
                    <!-- <h1 >Popular Ongoing Lectures</h1> -->
                    <h2 class="ml-auto my-auto">
                        <a href="" class="text-muted nav-link py-0">see more</a>
                    </h2>
                </div>
            </div>

            <div class="container-flex">
                <h1 class="container text-right">Most Outstanding Lecturers</h1>
            </div>
        </main>

        <footer>

        </footer>
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
