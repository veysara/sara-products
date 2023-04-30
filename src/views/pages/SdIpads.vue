<template>
    <div class="about-ipads" id="about-ipads">

        <background :title="TitlePage" :image="BackgroundImage" />

        <section class="form-ipads mt-5 mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 d-flex">
                        <div class="row justify-content-center align-items-center align-middle m-auto">
                            <div class="col-sm-6 mt-4" v-for="(form, index) in FormList" :key="'form-' + index"> 
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="title">{{form.title}}</h4>
                                      
                                        <img class="mt-2 img-fluid" :src="form.image" alt="...">
                                        <div class="mt-3 mb-3" v-for="(list, index) in form.ListsText" :key="index">
                                            <p class="card-text">{{list.text}}</p>
                                        </div>
                                        <h5 class="title-price"><strong>Price: </strong>{{form.price}}</h5>

                                        <router-link to="/buy-ipads" aria-current="page">
                                           <button type="button" class="send btn-outline-success">{{form.btn}}</button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 d-flex" v-for="(image, index) in Images" :key="'image-' + index">
                        <div class="justify-content-center align-items-center align-middle m-auto">
                            <img class="img-fluid" :src="image.img_one" alt="...">
                            <img class="mt-3 img-fluid" :src="image.img_two" alt="...">
                            <img class="mt-3 img-fluid" :src="image.img_three" alt="...">
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
        name: 'About-Ipads', 
        components: {
           Background
        },

        data() {
            return {
                TitlePage: 'iPads',
                BackgroundImage: require('../../assets/images/pages/ipad/ba2.jpg'),

                FormList: [
                    {
                        title: "Apple iPad Air 5",
                        image: require('../../assets/images/pages/ipad/1.png'),
                        ListsText: [
                            {
                                text: "ProcessorApple: M1 8 x 2.1 - 3.2 GHz"
                            },
                            {
                                text: "Graphics: adapterApple M1 8-Core GPU"
                            },
                            {
                                text: "Display: 10.90 inch 4.3:3"
                            },
                            {
                                text: "Storage: 64 GB SSD, 64 GB"
                            },
                            {
                                text: "Price: 599 Euro"
                            },
                            {
                                text: "Links: Apple homepage"
                            },
                        ],
                        btn: "Buy Now",
                        price: "$1000"
                    },
                    {
                        title: "Apple iPad Pro 11",
                        image: require('../../assets/images/pages/ipad/2.png'),
                        ListsText: [
                            {
                                text: "ProcessorApple: M1 8 x 2.1 - 3.2 GHz"
                            },
                            {
                                text: "Graphics: adapterApple M1 8-Core GPU"
                            },
                            {
                                text: "Display: 10.90 inch 4.3:3"
                            },
                            {
                                text: "Storage: 64 GB SSD, 64 GB"
                            },
                            {
                                text: "Price: 599 Euro"
                            },
                            {
                                text: "Links: Apple homepage"
                            },
                        ],
                        btn: "Buy Now",
                        price: "$1000"
                    },
                    {
                        title: "Xiaomi Pad 5 Pro",
                        image: require('../../assets/images/pages/ipad/3.png'),
                        ListsText: [
                            {
                                text: "ProcessorApple: M1 8 x 2.1 - 3.2 GHz"
                            },
                            {
                                text: "Graphics: adapterApple M1 8-Core GPU"
                            },
                            {
                                text: "Display: 10.90 inch 4.3:3"
                            },
                            {
                                text: "Storage: 64 GB SSD, 64 GB"
                            },
                            {
                                text: "Price: 599 Euro"
                            },
                            {
                                text: "Links: Apple homepage"
                            },
                        ],
                        btn: "Buy Now",
                        price: "$1000"
                    },
                    {
                        title: "Apple iPad",
                        image: require('../../assets/images/pages/ipad/4.png'),
                        ListsText: [
                            {
                                text: "ProcessorApple: M1 8 x 2.1 - 3.2 GHz"
                            },
                            {
                                text: "Graphics: adapterApple M1 8-Core GPU"
                            },
                            {
                                text: "Display: 10.90 inch 4.3:3"
                            },
                            {
                                text: "Storage: 64 GB SSD, 64 GB"
                            },
                            {
                                text: "Price: 599 Euro"
                            },
                            {
                                text: "Links: Apple homepage"
                            },
                        ],
                        btn: "Buy Now",
                        price: "$1000"
                    }
                ],
                
                Images: [
                    {
                        img_one: require('../../assets/images/pages/ipad/6.png'),
                        img_two: require('../../assets/images/pages/ipad/7.png'),
                        img_three: require('../../assets/images/pages/ipad/5.png'),
                    },
                ]
            }
        },
    } 
</script>


<style lang="scss">
   
</style>
