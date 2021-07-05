<template>
    <div class="vh-100 text-dark image" style="background-image: url('img/comingSoon/blur3.jpg');">
        <header style="z-index: 2 ">
            <nav class="navbar navbar-expand-md navbar-light bg-transparent shadow">

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
                                :to="{name: 'comingabout'}">
                                <a>About Us</a>
                            </router-link>
                            <router-link class=" nav-link pl-0 mx-4" 
                                :to="{name: 'comingcontact'}">
                                Talk to Us
                            </router-link>
                        </div>
                    </div>
                </nav>
        </header>

        <main role="main" style="z-index: .5;" >
            <div class="row mobile-hide position-absolute mx-5 pl-5" style="height: 75vh; z-index:1; opacity: .3;">
                <img class="mt-auto animate__animated animate__fadeIn animate__delay-2s" src="svg/3.svg" height="200em">
            </div>

            <div class="container d-flex align-items-center" style="height: 80vh">
                <router-view></router-view>
            </div>
        </main>

        <footer class="footer mt-auto py-3 bg-transparent animate__animated animate__slideInUp animate__delay-1s">
            <comingfooter></comingfooter>
        </footer>        
    </div>
</template>

<script>
import ComingFooter from "./comingSoon/Footer";
export default {
    components: {
        comingfooter: ComingFooter,
    }
}

</script>

<style>
.image{
    background: bottom center no-repeat;
    background-size: cover;
}
@media screen and (min-width: 0px) and (max-width: 720px) {
    .mobile-hide{ display: none !important; } 
    .mobile-view{ display:flexbox !important; }
}

@media screen and (min-width: 720px){
    .mobile-view{ display: none !important;}
}
</style>