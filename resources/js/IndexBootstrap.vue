<template>
    <div class="container">
        <div class="px-3">
            <header>
                <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light shadow-sm">

                    <div class="container">
                        <img src="img/landing/upwrit-(logo-large-800x800).jpg" 
                            class="rounded" 
                            alt="..."
                            height="50px" width="50px">
                        <a class="navbar-brand" style="font-family: Raleway; font-weight: 700">
                            UpWrit
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" 
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" 
                            aria-expanded="false" aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" 
                            id="navbarCollapse" 
                            style="font-family: Raleway; font-weight: 700">
                            
                            <router-link class=" nav-link pl-0 ml-auto px-4"
                                :to="{name: 'landing'}">
                                <a>Home</a>
                            </router-link>
                            <router-link class=" nav-link pl-0 mx-4" 
                                :to="{name: 'landingabout'}">
                                About
                            </router-link>
                            <router-link class=" nav-link pl-0 mx-4" 
                                :to="{name: 'landingservices'}">
                                Services
                            </router-link>
                            <router-link class=" nav-link pl-0 mx-4" 
                                :to="{name: 'landingfaqs'}">
                                FAQs
                            </router-link>
                            <router-link class=" nav-link pl-0 mx-4" 
                                :to="{name: 'landingcontact'}">
                                Contact
                            </router-link>
                        </div>
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
    .nav-link{
        color: black;
    }
</style>