<template>
    <header id='header' class="navbar navbar-expand-lg navbar-light img-fluid" style="background-image: url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v915-techi-061-l_1_1.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=5d3467aa5492e265314ef72d70073bd8);">
        <div class="container">
            <router-link class="navbar-brand" to="/">
                <img class="logo" src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-latest-apple-logo-icon-gif-15.png" alt="logo">
            </router-link>
            <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about-desktops" class="nav-link" aria-current="page">Desktops</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about-laptop" class="nav-link" aria-current="page">Laptops</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about-iphones" class="nav-link" aria-current="page">iPhones</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about-ipads" class="nav-link" aria-current="page">iPads</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>


<script>
  export default {
    name: 'Header',
    data() {
      return {
        
      };
    },
  };
</script>


<style  lang="scss">
 
</style>
