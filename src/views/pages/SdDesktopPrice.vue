<template>
    <div id="desktop-price">
        <section class="s-desktop">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="mt-3">Desktop Gaming</h3> 
                        <div class="image mt-4">
                            <img class="img-fluid" :src="require('../../assets/images/pages/desktop-price/1.jpg')" alt="...">
                        </div>
                    
                        <div class="d-flex bd-highlight mt-4 mb-5">
                            <h4 class="me-auto bd-highlight"><strong>Discount:</strong> 20%</h4> &nbsp; &nbsp; &nbsp; &nbsp;
                            <h4 class="bd-highlight"><strong>Price:</strong> $2500</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    export default {
        name: 'Desktops-Price',
        data() {
            return {
                
            };
        },
    };
</script>


<style lang="scss">

</style>
