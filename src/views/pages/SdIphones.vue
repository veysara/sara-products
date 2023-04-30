<template>
    <div class="iphones" id="iphones">
        
        <background :title="TitlePage" :image="BackgroundImage" />

        <section class="iphone">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6" v-for="(iphone, index) in Iphone" :key="'iphone-' + index">
                        <div class="row">
                            <div class="col-sm-6 d-flex">
                                <div class="verticalLine" />
                                <figure class="image justify-content-center align-items-center align-middle m-auto">
                                    <img class="img-fluid" :src="iphone.image" alt="...">
                                </figure>
                            </div>
                            <div class="col-sm-6">
                                <h5 class="card-title">{{iphone.title}}</h5>
                                <p class="card-text">{{iphone.description}}</p>
                                <h5 class="price fw-bold">{{iphone.price}}</h5>
                                <router-link to="/about-iphone-detail" class="nav-link" aria-current="page">
                                    <button type="button" class="btn mt-2">{{iphone.btn}}</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    import Background from '../../components/SdBackground.vue'

    export default {
        name: 'Iphones',

        components: {
           Background
        },

        data() {
            return {
                TitlePage: 'Iphones',
                BackgroundImage: require('../../assets/images/pages/iphone/back.jpg'),

                Iphone: [
                    {
                        image: require('../../assets/images/pages/iphone/7.png'),
                        title: "iPhone 14 Pro",
                        description: "the iPhone 14 launch is less than six months away. Here’s what to expect, including upgrades of core features. Also: more on future Macs and iOS 15.5. Last week on Power On: A “pro mode” is the solution to Apple’s iPad software conundrum.",
                        price: "$1400 - $1800",
                        btn: "Read More"
                    },
                    {
                        image: require('../../assets/images/pages/iphone/8.png'),
                        title: "iPhone 14 Pro",
                        description: "iPhone 14 volgende maand pas zijn gezicht laat zien, en we weten wat hij te bieden heeft, ligt er al genoeg informatie “op straat”. Zo komt vandaag de mogelijke prijs van de nieuwe smartphone naar buiten. En om heel eerlijk te zijn valt het ons alles mee!",
                        price: "$1600 - $1800",
                        btn: "Read More"
                    },
                    {
                        image: require('../../assets/images/pages/iphone/5.png'),
                        title: "iPhone 13 Pro",
                        description: "iPhone 13 Pro Max pushes the boundaries of what's possible in a smartphone. it introduces a Super Retina XDR display with ProMotion featuring an adaptive refresh rate up to 120Hz, making the touch experience faster and more responsive.",
                        price: "$1099 - $1200",
                        btn: "Read More"
                    },
                    {
                        image: require('../../assets/images/pages/iphone/6.png'),
                        title: "iPhone 13",
                        description: "iPhone 13 and iPhone 13 mini do not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports. which are compatible.",
                        price: "$999 - $1100",
                        btn: "Read More"
                    },
                    {
                        image: require('../../assets/images/pages/iphone/4.png'),
                        title: "iPhone 13",
                        description: "iPhone 13 and iPhone 13 mini do not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports. which are compatible.",
                        price: "$900 - $1000",
                        btn: "Read More"
                    },
                    {
                        image: require('../../assets/images/pages/iphone/9.png'),
                        title: "iPhone 13 Pro",
                        description: "iPhone 13 Pro Max pushes the boundaries of what's possible in a smartphone. it introduces a Super Retina XDR display with ProMotion featuring an adaptive refresh rate up to 120Hz, making the touch experience faster and more responsive.",
                        price: "$1150 - $1250",
                        btn: "Read More"
                    },
                    {
                        image: require('../../assets/images/pages/iphone/1.png'),
                        title: "iPhone 13 Pro",
                        description: "iPhone 13 Pro Max pushes the boundaries of what's possible in a smartphone. it introduces a Super Retina XDR display with ProMotion featuring an adaptive refresh rate up to 120Hz, making the touch experience faster and more responsive.",
                        price: "$1100 - $1300",
                        btn: "Read More"
                    },
                    {
                        image: require('../../assets/images/pages/iphone/3.png'),
                        title: "iPhone 13",
                        description: "iPhone 13 and iPhone 13 mini do not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports. which are compatible.",
                        price: "$950 - $1050",
                        btn: "Read More"
                    },
                ]
            }
        },
    };
</script>


<style lang="scss">
  @import "../../assets/scss/pages/about-iphones";
</style>
