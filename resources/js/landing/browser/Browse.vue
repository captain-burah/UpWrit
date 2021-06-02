<template>
    <div>
        <topics></topics>
        <div class="container pt-4">
            <browse-search></browse-search>
        </div>
        
        <div class="container-flex text-center">
            <div class="row">
                <div class="col-md-2" style="background-color:red;">
                    f
                </div>
                <div class="col-md-8" style="background-color:black;">
                    f
                </div>
                <div class="col-md-2" style="background-color:red;">
                    f
                </div>
            </div>
        </div>
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