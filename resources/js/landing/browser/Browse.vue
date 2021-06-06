<template>
    <div>
        <topics></topics>

        <main class="container-fluid m-0 p-0">
            <div class="pt-4 px-4 text-center">
                <browse-search></browse-search>
            </div>
        </main>
    </div>
</template>

<script>
import Topics from "../main/Topics.vue";
import BrowseSearch from "./BrowseSearch.vue";

export default {
    components: {
        Topics,
        BrowseSearch,
    },
    
}
</script>
<style >
</style>