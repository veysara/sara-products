<template>
    <div class="laptop" id="laptop">
        
        <background :title="TitlePage" :image="BackgroundImage" />
        
        <!-- form laptop ................ -->
        <div class="form-laptop container mb-5" v-for="(labtop, index) in Labtop" :key="'labtop-' + index">
            <h3 class="title-one mt-5 text-center">{{labtop.title}}</h3>
            <div class="row">
                <div class="col-md-4 col-sm-6" v-for="(list, index) in labtop.ListsLabtop" :key="index">
                    <div class="box">
                        <router-link to="/about-laptop-detail" class="nav-link" aria-current="page">
                            <img class="mt-2 mb-2" :src="list.img" alt="...">
                            <div class="box-content">
                                <h5 class="name">{{list.title}}</h5>
                                <span class="post"> {{list.text}}</span>
                            </div>
                        </router-link> 
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

    
<script>
    import Background from '../../components/SdBackground.vue'

    export default {
        name: 'Laptop',

        components: {
           Background
        },

        data() {
            return {
                TitlePage: 'Laptops',
                BackgroundImage: require('../../assets/images/pages/laptop/bg-img.jpg'),

                Labtop: [
                    {
                        title: "MacBook Pro 14",
                        ListsLabtop: [
                            {
                                img: require('../../assets/images/pages/laptop/9.png'),
                                title: "Laptop",
                                text: "MacBook Pro 14"
                            },
                            {
                                img: require('../../assets/images/pages/laptop/5.png'),
                                title: "Laptop",
                                text: "MacBook Pro 14"
                            },
                            {
                                img: require('../../assets/images/pages/laptop/3.png'),
                                title: "Laptop",
                                text: "MacBook Pro 14"
                            },
                            {
                                img: require('../../assets/images/pages/laptop/12.png'),
                                title: "Laptop",
                                text: "MacBook Pro 14"
                            },
                            {
                                img: require('../../assets/images/pages/laptop/10.png'),
                                title: "Laptop",
                                text: "MacBook Pro 14"
                            },
                            {
                                img: require('../../assets/images/pages/laptop/6.png'),
                                title: "Laptop",
                                text: "MacBook Pro 14"
                            },
                        ]
                    },
                    {
                        title: "Mac Book Air",
                        ListsLabtop: [
                            {
                                img: require('../../assets/images/pages/laptop/14.png'),
                                title: "Laptop",
                                text: "Mac Book Air"
                            },
                            {
                                img: require('../../assets/images/pages/laptop/8.png'),
                                title: "Laptop",
                                text: "iMac Book Air"
                            },
                            {
                                img: require('../../assets/images/pages/laptop/15.png'),
                                title: "Laptop",
                                text: "Mac Book Air"
                            },
                        ]
                    },
                    {
                        title: "Mac Pro 13",
                        ListsLabtop: [
                            {
                                img: require('../../assets/images/pages/laptop/11.png'),
                                title: "Laptop",
                                text: "Mac Pro 13"
                            },
                            {
                                img: require('../../assets/images/pages/laptop/4.png'),
                                title: "Laptop",
                                text: "Mac Pro 13"
                            },
                            {
                                img: require('../../assets/images/pages/laptop/13.png'),
                                title: "Laptop",
                                text: "Mac Pro 13"
                            },
                            {
                                img: require('../../assets/images/pages/laptop/6.png'),
                                title: "Laptop",
                                text: "Mac Pro 13"
                            },
                            {
                                img: require('../../assets/images/pages/laptop/7.png'),
                                title: "Laptop",
                                text: "Mac Pro 13"
                            },
                            {
                                img: require('../../assets/images/pages/laptop/1.jpg'),
                                title: "Laptop",
                                text: "Mac Pro 13"
                            },
                        ]
                    },
                ]
            }
        },
    }
    
</script>


<style  lang="scss">
    
</style>




