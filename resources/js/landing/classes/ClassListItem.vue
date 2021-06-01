<template>
    <div class="card w-100 mt-3" >
        <div class="card-body" >
            <router-link :to="{ name: 'classroom', params: {id } }">
                <h5 class="card-title">{{ title }}</h5>
            </router-link>
            <h4 class="card-text m-0">{{ instructor }}</h4>
            <p class="card-text">Starting from January onwards</p>
        </div>
    </div>
</template>
<script>

export default {
    props: {'title': String, 'instructor': String}
    };
</script>
<style scoped>
    .card{
        background: rgba(255,255,255,0.2);
        backdrop-filter: saturate(150%) blur(12px);
    }
</style>