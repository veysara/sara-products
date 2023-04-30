<template>
    <div class="background">
       <div class="bg-img" :style="{'background-image': 'url(' + image + ')' }">
            <h1 class="title animated bounceInLeft text-center fw-bold">{{title}}</h1>
       </div>
    </div>
</template>


<script>
    export default {
        name: 'PropBackground',
        data () {
            return {}
        }, 
        props: {
            title: {
               type: String,
               default: 'text'
            },
            image: {
               type: String,
               default: 'image'
            }  
        },   
    }
</script>


<style lang="scss">
   
</style>