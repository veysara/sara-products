<template>
    <div id="buy-ipad" class="col-md-5 container">
        <h3 class="feature-title text-center mt-5">Input Data List For But Ipad</h3>
        <div class="form-group mt-3">
            <input type="text" class="form-control" placeholder="Buyer Name" name="">
        </div>
        <div class="form-group mt-3">
            <input type="email" class="form-control" placeholder="Email Address" name="email">
        </div>
        <div class="form-group mt-3">
            <input type="phone" class="form-control" placeholder="Phone Number" name="phone">
        </div>
        <div class="purpose card mt-3">
            <div class="card-body">
                <h5 class="title">Gender</h5>
                <div class="form-group">
                    <div class="form-check form-check-inline" v-for="option in options_gender" :key="option.gender">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">{{option.gender}}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group mt-3">
            <textarea class="form-control" placeholder="Description ..." rows="4"></textarea>
        </div>
        <div class="text-center mb-5">
            <input type="submit" class="btn mt-3" value="Submit Info" name="">
        </div>
    </div>
</template>



<script>
    export default {
        name: 'Buy-Ipads',
        data() {
           return {
                options_gender: [
                    { gender: 'Male' },
                    { gender: 'Female' },
                    { gender: 'Other' }
                ],
           };
        },
    }
</script>



<style lang="scss">
   
</style>