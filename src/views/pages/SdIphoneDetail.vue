<template>
    <div id="iphone-detail">
        <div class="container">
            <div class="iframe">
                <iframe class="youtube mt-5" src="https://www.youtube.com/embed/4nk6bje2gGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="image mt-3">
                    <img class="img-fluid" :src="require('../../assets/images/pages/iphone-detail/1.jpg')" alt="...">
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <div class="card-body">
                        <h4 class="card-title">New</h4>
                        <h5 class="card-text">iPhone 13 Pro</h5>
                        <p class="card-price">Price: <strong class="text-decoration-line-through">$ 1500</strong> &nbsp;&nbsp; <strong>$ 1000</strong></p>
                        <div class="form-group text-center">
                            <img class="img-fluid mt-3" :src="require('../../assets/images/pages/iphone-detail/2.jpg')" alt="...">
                            <p class="phara mt-2">Pro camera system</p>

                            <img class="img-fluid mt-3" :src="require('../../assets/images/pages/iphone-detail/5.jpg')" alt="...">
                            <p class="phara mt-2">Up to 28 hours video playback⁴</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card-body">
                        <h4 class="card-title">New</h4>
                        <h5 class="card-text">inPhoe 13</h5>
                        <p class="card-price">Price: <strong class="text-decoration-line-through">$ 1200</strong> &nbsp;&nbsp; <strong>$ 890</strong></p>
                        <div class="form-group text-center">
                            <img class="img-fluid mt-3" :src="require('../../assets/images/pages/iphone-detail/3.jpg')" alt="...">
                            <p class="phara mt-2">A15 Bionic chip</p>

                            <img class="img-fluid mt-3" :src="require('../../assets/images/pages/iphone-detail/4.jpg')" alt="...">
                            <p class="phara mt-2">Superfast 5G cellular³</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Iphone-Detail',
        data() {
           return {
               
           };
        },
    };
</script>


<style lang="scss">
   
</style>

