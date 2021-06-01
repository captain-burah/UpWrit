<template>
    <div class="container-flex">
        <div class="shadow px-3">
            <header>
                <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
                    <a href="/" class="navbar-brand">LaravelVLE</a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarCollapse" aria-controls="navbarCollapse" 
                        aria-expanded="false" aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Eng <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">සිංහල</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">தமிழ்</a>
                            </li>
                        </ul>
                        <router-link class="text-dark nav-link pl-0" 
                            :to="{name: ''}">
                            Browse Classes
                        </router-link>
                        <router-link class="text-dark nav-link pl-0" 
                            :to="{name: 'classes'}">
                            Sign up / Log in
                        </router-link>
                        <router-link class="text-dark btn nav-button btn-outline-success" 
                            :to="{name: 'classes'}">
                            Become an Instructor
                        </router-link>
                    </div>
                </nav>
            </header>
        </div>
        <div class="container-flex mt-5 pt-2">
            <router-view></router-view>
        </div>
        
    </div>
</template>
<script>
import Landing from "./landing/Landing";
export default {
    components: {
        Landing
    }
}
</script>
<style>
    .navbar {
        backdrop-filter: saturate(130%) blur(3px);
    }
</style>