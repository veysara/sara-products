<template>
    <div class="about-contact" id="about-contact">


        <background :title="TitlePage" :image="BackgroundImage" />
    
        <!-- ........................ -->
        <section class="container">
            <h2 class="title mt-3 mb-3 text-center">Registration</h2>
            <div class="content">
                <form action="#">
                    <div class="user-details">
                        <div class="input-box">
                            <label class="details">Frist Name</label>
                            <input type="text" class="form-control" placeholder="Your first name" aria-label="Server">
                        </div>
                        <div class="input-box">
                            <label class="details">Last Name</label>
                            <input type="text" class="form-control" placeholder="Your last name" aria-label="Server">
                        </div>
                        <div class="input-box">
                            <label class="details">Email</label>
                            <input type="text" class="form-control" placeholder="Your email" aria-label="Server">
                        </div>
                        <div class="input-box">
                            <label class="details">Phone Number</label>
                            <input type="text" class="form-control" placeholder="Your phone number" aria-label="Server">
                        </div>
                        <div class="input-box">
                            <label class="details">Name Products</label>
                            <select class="form-select" id="inputGroupSelect02">
                                <option value="1">Desktop</option>
                                <option value="2">Laptop</option>
                                <option value="2">Iphone</option>
                                <option value="2">iPads</option>
                            </select>
                            
                        </div>
                        <div class="input-box">
                            <label class="details">Check</label>
                            <select class="form-select" id="inputGroupSelect02">
                                <option value="1">Pay Now</option>
                                <option value="2">Installment Pay</option>
                            </select>
                        </div>
                    </div>
                    <div class="gender-details">
                        <label class="gender-title"> <strong>Gender</strong> </label>
                        <div class="form-check mt-3">
                            <label class="form-check-label" for="flexRadioDefault1">Male</label>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        </div>
                        <div class="form-check mt-2">
                            <label class="form-check-label" for="flexRadioDefault2">Female</label>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        </div>
                        <div class="form-check mt-2">
                            <label class="form-check-label" for="flexRadioDefault2">Prefer not say</label>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        </div>
                    </div>
                    <div class="button">
                       <input type="submit" value="Submit Info">
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>


<script>
    import Background from '../../components/SdBackground.vue'

    export default {
        name: 'About-Contact',
        components: {
            Background
        },

        data() {
            return {
                TitlePage: 'Contact',
                BackgroundImage: require('../../assets/images/pages/contact/bg-img.png')
            }
        },
    }
</script>

<style lang="scss">
   
</style>