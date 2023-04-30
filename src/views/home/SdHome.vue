<template>
    <div id="home" class="home">
        <!-- image-product ............... -->
        <section class="image-product">
            <div class="background img-fluid">
                <div class="container">
                    <div class="title" v-for="(product, index) in aboutProduct" :key="'product-' + index">
                        <h5 class="text"> {{product.title}} </h5>
                        <h2 class="dis fw-bold mt-3">{{product.text}}</h2>
                        <router-link to="/about-contact" aria-current="page">
                            <button type="button" class="btn mt-4" autocomplete="off">{{product.btn}}</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <!-- ............... -->

        <!-- form-title ............... -->
        <section class="form-title container">
            <div class="row row-cols-md-2 text-center jd-flex" v-for="(safety, index) in aboutSafety" :key="'safety-' + index">
                <div class="title d-flex">
                    <div class="card-body content-title justify-content-center align-items-center align-middle m-auto">
                        <h1 class="card-title animated bounceInDown fw-bold">{{safety.title}}</h1>
                        <div class="card-text mt-3 animated bounceInLeft">{{safety.description}}</div>
                        <router-link to="/quality" class="btn mt-4">{{safety.btn}}</router-link>
                    </div>
                </div> 
                <figure class="image">
                    <img class="img-fluid" :src="safety.src" alt="...">
                </figure>
            </div>
        </section>
        <!-- ............... -->

        <!-- about-information ........... -->
        <section class="about-information">
            <!-- content-body .............. -->
            <div class="content-body container" v-for="(information, index) in Information" :key="'information-' + index">
                <div class="row">
                    <div class="col-md-6 mt-5">
                        <figure class="image">
                            <img class="img-fluid" :src="information.image"  alt="...">
                        </figure>
                    </div>

                    <div class="col-md-6 mt-5" v-for="(list, index) in information.ListsInformation" :key="index">
                        <h3 class="title mt-3 mt-3"> {{list.title}} </h3>
                        <p class="phara"> <strong>&#10003;</strong> {{list.description}}</p> 
                    </div>
                </div>
            </div>
            <!-- ............... -->
        </section>
        <!-- ............................. -->

        <!-- model of product ................. -->
        <section class="model container" v-for="(model, index) in Model" :key="'model-' + index">
            <h2 class="content-head fw-bold text-center mt-5 mb-5">{{model.title}}</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4 mt-6">
                <div class="col-md-4"  v-for="(list, index) in model.ListsModel" :key="index">
                    <div class="card">
                        <img class="image img-fluid" :src="list.image" alt="...">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">{{list.title}}</h5>
                            <p class="card-text mt-3">{{list.description}}</p>
                            <h4 class="price">
                                <small>{{list.text}}</small>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ......................... -->

        <!-- click on the image show world............ -->
        <section class="group-card container">
            <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
                <div class="col" v-for="(click, index) in ClickImage" :key="'click-' + index">
                    <div class="image">
                        <figure class="snip0016">
                            <img class="img-fluid animated bounceInRight" :src="click.image" alt="...">
                            <figcaption>
                                <h3 class="text pt-4">{{click.price}}</h3>
                                <h2 class="para p-3">{{click.type}}</h2>
                            </figcaption>
                        </figure>
                    </div> 
                </div>
            </div>
        </section>  
        <!-- ........................ -->

        <!-- background  ................. -->
        <section class="parallax mt-5" style="background-image: url(https://9to5mac.com/wp-content/uploads/sites/6/2020/04/The-Rewind-Mac-mini-2018-Standing.jpg?quality=82&strip=all&w=1000)">
            <div class="container">
                <div class="row" v-for="(background, index) in Background" :key="'background-' + index">
                    <div class="col-12 text-center">
                        <h2 class="section-title title"> {{background.title}} </h2>
                        <p class="text-light"> {{background.description}} </p>
                        <input name="email" type="text" class="form" placeholder="Your email address">
                    </div>
                </div>
            </div>
        </section>
        <!-- ...................... -->
    </div>
</template>


<script>
    export default {
        name: 'Home',
        data() {
            return {
                aboutProduct: [
                    {
                        title: "Welsome To Sara Products",
                        text: "Upto 30% Off",
                        btn: "Contact Us"
                    }
                ],
                aboutSafety: [
                    {
                        title: "Safety And Quality",
                        description: "To deliver efficiency and effective  business solution throughout Information Technology.To help businesses stay connected,  meaningful and lasting customer relation in a new way. To support business to ensure service quality and real value to the customer.",
                        btn: "Read More",
                        src: require('../../assets/images/pages/home/1.jpg'),
                    }
                ],
                Information: [
                    {
                        image: require('../../assets/images/pages/home/2.png'),
                        ListsInformation: [
                            {
                                title: "Our Misstions",
                                description: "To deliver efficiency and effective business solution throughout Information Technology. To help businesses stay connected, and build meaningful and lasting customer relation in a new way. To support business to ensure service quality and real value to the customer. To create a common solution to support people to be more comfortable in daily life."
                            },
                            {
                                title: "Our Visions",
                                description: "To be the most prioritized technology business solutions partner in Asia."
                            },
                            {
                                title: "Our Values",
                                description: "Happy staff, happy client, Satisfied, Believe, Commitment, Learn and improve"
                            }
                        ]
                    },
                ],
                Model: [
                    {
                        title: "Type Of Products",
                        ListsModel: [
                            {
                                image: require('../../assets/images/pages/home/3.jpg'),
                                title: "Laptop: MacBook Pro",
                                description: "CPU: Apple M1, CPUGraphics: Integrated 7-core, GPURAM: 8GB, memoryScreen: 13.3-inch 2560 x 1600",
                                text: "Price: $2500"
                            },
                            {
                                image: require('../../assets/images/pages/home/4.jpg'),
                                title: "Iphone: 13 Pro",
                                description: "Brand: Apple, Operating-System: macOS, Screen-Size: 21.5 inch, Processor-Type: i3,i5, Display-Retina: 4K display",
                                text: "Price: $1200"
                            },
                            {
                                image: require('../../assets/images/pages/home/5.jpg'),
                                title: "Desktop: Computer",
                                description: "Brand: Apple, Operating-System: macOS, Screen-Size: 21.5 inch, Processor-Type: i3,i5, Display-Retina: 4K display",
                                text: "Price: $3000"
                            },
                            {
                                image: require('../../assets/images/pages/home/6.jpg'),
                                title: "Apple iPad Air 5",
                                description: "Brand: Apple, Operating-System: macOS, Screen-Size: 21.5 inch, Processor-Type: i3,i5, Display-Retina: 4K display",
                                text: "Price: $1000"
                            },
                            {
                                image: require('../../assets/images/pages/home/7.jpg'),
                                title: "Desktop: Computer",
                                description: "CPU: Apple M1, CPUGraphics: Integrated 7-core, GPURAM: 8GB, memoryScreen: 13.3-inch 2560 x 1600",
                                text: "Price: $3000"
                            },
                            {
                                image: require('../../assets/images/pages/home/8.jpg'),
                                title: "Iphone: 12",
                                description: "Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard,",
                                text: "Price: $997.50"
                            }
                        ],
                    }
                ],
                ClickImage: [
                    {
                        image: require('../../assets/images/pages/home/9.jpg'),
                        price: "$1250",
                        type: "New",
                    },
                    {
                        image: require('../../assets/images/pages/home/13.jpg'),
                        price: "$900",
                        type: "Old",
                    },
                    {
                        image: require('../../assets/images/pages/home/11.jpg'),
                        price: "$850",
                        type: "Old",
                    },
                    {
                        image: require('../../assets/images/pages/home/12.jpg'),
                        price: "$1400",
                        type: "New",
                    }
                ],
                Background: [
                    {
                        title: "Sign up for newsletter",
                        description: "We only send good news."
                    }
                ]
            };
        },
    };
</script>


<style lang="scss">
    
</style>
