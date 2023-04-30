<template>
    <div class="lp-detail">
        <div class="container">
            <div class="form-group" v-for="(labtop_detail, index) in LabtopDetail" :key="'labtop_detail-' + index">
                <h2 class="title mt-5">{{labtop_detail.title}}</h2>
                <img class="image-detail mt-3" :src="labtop_detail.image" alt="...">

                <div v-for="(list, index) in labtop_detail.ListsLabtopDetail" :key="index">
                    <h5 class="step mt-4">{{list.title}}</h5>
                    <p class="phara">{{list.descriptiom}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

    
<script>
    export default {
        name: 'Laptop-Detail',
        data () {
            return {
                LabtopDetail: [
                    {
                        title: "MacBook Pro M1 14-inch",
                        image: require('../../assets/images/pages/laptop/2.jpg'),
                        ListsLabtopDetail: [
                            {
                                title: "Step 1: Back up all your files",
                                descriptiom: "The first thing you want to do is make sure you back up everything you need. How you do this really depends on what you have on your computer. If you just need to hold onto a few files, Dropbox (or any cloud storage service) will do the trick. Alternately, you can easily back up your data to an external hard drive."
                            },
                            {
                                title: "Step 2: Deauthorize any software",
                                descriptiom: "Next, deauthorize any digital software or files you have. This includes programs like the Adobe Creative Suite, Amazon's Kindle Apps, and files you download from online stores like iTunes. Likewise, it might be a good time to clean up the services you enabled two-factor authentication on."
                            },
                            {
                                title: "Step 3: Securely Format Your Hard Drive",
                                descriptiom: "As we've mentioned before, the only secure way to clean out your computer's hard drive is to format it so you start from scratch. This process is time-consuming, but it's necessary before you sell your computer to stranger. You don't want any personal information remaining on the hard drive."
                            }
                        ]
                    }
                ]
            }
        },   
    }
</script>


<style lang="scss">
   
</style>
