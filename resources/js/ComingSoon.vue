<template>
    <div class="vh-100 text-dark image" style="background-image: url('img/comingSoon/15.jpg');">
        <header style="z-index: 2">
            <nav class="navbar navbar-fixed navbar-expand-lg navbar-light bg-transparent">
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

        <main role="main" style="z-index: .5" >
            <div class="container d-flex align-items-center" style="height: 80vh">
                <router-view></router-view>
            </div>
        </main>

        <footer class="footer mt-auto py-3 bg-transparent">
            <comingfooter></comingfooter>
        </footer>
        
        <!-- For more icon options, visit https://fontawesome.com/icons?d=gallery&p=2&s=brands-->
        <!-- <div class="social-icons">
            <div class="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
                <a class="btn btn-dark m-3" href="#!"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-dark m-3" href="#!"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-dark m-3" href="#!"><i class="fab fa-instagram"></i></a>
            </div>
        </div> -->
        
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

<style scoped>
.image{
    background: center center no-repeat;
}
</style>