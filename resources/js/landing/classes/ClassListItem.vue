<template>
    <div class="card w-100 mt-3" >
        <div class="card-body" >
            <router-link :to="{ name: 'classroom', params: {id } }">
                <h4 class="card-title">{{ title }}</h4>
            </router-link>
            <img src="img/3.png" class="img-thumbnail rounded mx-auto d-block mt-3" alt="loading">
            <h3 class="card-text m-0">{{ instructor }}</h3>
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
    .img-thumbnail{
        height: 200px;
        width: 200px;
    }
</style>