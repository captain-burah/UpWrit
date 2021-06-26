<template>
    <div class="vh-100 text-dark image" style="background-image: url('img/comingSoon/15.jpg');">
        <header style="z-index: 2">
            <nav class="navbar navbar-fixed navbar-expand-lg navbar-light bg-transparent 
                    animate__animated animate__slideInDown animate__delay-1s">
                <div class="container ">
                    <a class="navbar-brand" href="/">
                        <img src="img/comingSoon/logo.jpg" width="30" height="30" 
                        class="d-inline-block align-top rounded" alt="">
                        &nbsp; UpWrit
                    </a>
                    <button 
                        class="navbar-toggler ml-auto" type="button" data-toggle="collapse" 
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto">
                            <router-link class="nav-link mx-4" :to="{name: 'comingabout'}">About</router-link>
                            <router-link class="nav-link mx-4" :to="{name: 'comingcontact'}">Contact</router-link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <main role="main" style="z-index: .5;" >
            <div class="row mobile-hide position-absolute mx-5 pl-5" style="height: 75vh;">
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
    background: center center no-repeat;
}
@media screen and (min-width: 0px) and (max-width: 720px) {
    .mobile-hide{ display: none !important; } 
    .mobile-view{ display:flexbox !important; }
}

@media screen and (min-width: 720px){
    .mobile-view{ display: none !important;}
}
</style>