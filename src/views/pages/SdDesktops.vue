<template>
  <div class="desktops" id="desktops">
    
    <background :title="TitlePage" :image="BackgroundImage" />

    <!-- form desktop ................ -->
      <div class="form-desktop container">
        <div class="row row-cols-1 row-cols-md-2 mt-5">
          <div class="col" v-for="(desktop, index) in Desktop" :key="'desktop-' + index">
            <div class="form">
              <router-link class="navbar-brand" to="/about-desktop-price">
                <img class="image card-img-top rounded" :src="desktop.image" alt="..." />
              </router-link>
              <div class="card-body">
                <h4 class="card-title"> {{desktop.title}} </h4>
                <div class="name" v-for="(list, index) in desktop.ListsDesktop" :key="index">
                  <h6 class="processor mt-3"> <strong> {{list.title}} </strong> {{list.description}}</h6>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    <!-- ................. -->
  </div>
</template>


<script>
  import Background from '../../components/SdBackground.vue'

  export default {
    name: 'Desktops',
    components: {
      Background
    },
    data() {
      return {
        TitlePage: 'Desktops',
        BackgroundImage: require('../../assets/images/pages/desktop/bg.png'),

        Desktop: [
          {
            image: require('../../assets/images/pages/desktop/1.jpg'),
            title: "Desktop Computer",
            ListsDesktop: [
              {
                title: "Processor: ",
                description: "Intel core 2 duo 3.00 GHz Processor"
              },
              {
                title: "Main board:",
                description: "G41 Motherboard"
              },
              {
                title: "Storage:",
                description: "Toshiba, Samsung 1TB, 7200RPM"
              },
              {
                title: "Casing:",
                description: "ATX Casing"
              },
              {
                title: "Power supply:",
                description: "500W"
              },
              {
                title: "DVD:",
                description: "DVD Writer Samsung, Asus"
              },
              {
                title: "Warranty:",
                description: "3 Years Limited Warranty"
              },
            ]
          },
          {
            image: require('../../assets/images/pages/desktop/2.jpg'),
            title: "Desktop Computer",
            ListsDesktop: [
              {
                title: "Processor: ",
                description: "Intel core 2 duo 3.00 GHz Processor"
              },
              {
                title: "Main board:",
                description: "G41 Motherboard"
              },
              {
                title: "Storage:",
                description: "Toshiba, Samsung 1TB, 7200RPM"
              },
              {
                title: "Casing:",
                description: "ATX Casing"
              },
              {
                title: "Power supply:",
                description: "500W"
              },
              {
                title: "DVD:",
                description: "DVD Writer Samsung, Asus"
              },
              {
                title: "Warranty:",
                description: "3 Years Limited Warranty"
              },
            ]
          },
          {
            image: require('../../assets/images/pages/desktop/3.jpg'),
            title: "Desktop Computer",
            ListsDesktop: [
              {
                title: "Processor: ",
                description: "Intel core 2 duo 3.00 GHz Processor"
              },
              {
                title: "Main board:",
                description: "G41 Motherboard"
              },
              {
                title: "Storage:",
                description: "Toshiba, Samsung 1TB, 7200RPM"
              },
              {
                title: "Casing:",
                description: "ATX Casing"
              },
              {
                title: "Power supply:",
                description: "500W"
              },
              {
                title: "DVD:",
                description: "DVD Writer Samsung, Asus"
              },
              {
                title: "Warranty:",
                description: "3 Years Limited Warranty"
              },
            ]
          },
          {
            image: require('../../assets/images/pages/desktop/4.jpg'),
            title: "Desktop Gaming",
            ListsDesktop: [
              {
                title: "Processor: ",
                description: "Intel core 2 duo 3.00 GHz Processor"
              },
              {
                title: "Main board:",
                description: "G41 Motherboard"
              },
              {
                title: "Storage:",
                description: "Toshiba, Samsung 1TB, 7200RPM"
              },
              {
                title: "Casing:",
                description: "ATX Casing"
              },
              {
                title: "Power supply:",
                description: "500W"
              },
              {
                title: "DVD:",
                description: "DVD Writer Samsung, Asus"
              },
              {
                title: "Warranty:",
                description: "3 Years Limited Warranty"
              },
            ]
          },
          {
            image: require('../../assets/images/pages/desktop/5.jpg'),
            title: "Desktop Gaming",
            ListsDesktop: [
              {
                title: "Processor: ",
                description: "Intel core 2 duo 3.00 GHz Processor"
              },
              {
                title: "Main board:",
                description: "G41 Motherboard"
              },
              {
                title: "Storage:",
                description: "Toshiba, Samsung 1TB, 7200RPM"
              },
              {
                title: "Casing:",
                description: "ATX Casing"
              },
              {
                title: "Power supply:",
                description: "500W"
              },
              {
                title: "DVD:",
                description: "DVD Writer Samsung, Asus"
              },
              {
                title: "Warranty:",
                description: "3 Years Limited Warranty"
              },
            ]
          },
          {
            image: require('../../assets/images/pages/desktop/6.jpg'),
            title: "Desktop Gaming",
            ListsDesktop: [
              {
                title: "Processor: ",
                description: "Intel core 2 duo 3.00 GHz Processor"
              },
              {
                title: "Main board:",
                description: "G41 Motherboard"
              },
              {
                title: "Storage:",
                description: "Toshiba, Samsung 1TB, 7200RPM"
              },
              {
                title: "Casing:",
                description: "ATX Casing"
              },
              {
                title: "Power supply:",
                description: "500W"
              },
              {
                title: "DVD:",
                description: "DVD Writer Samsung, Asus"
              },
              {
                title: "Warranty:",
                description: "3 Years Limited Warranty"
              },
            ]
          }
        ]
      }
    },
  };
</script>


<style  lang="scss">
  
</style>














