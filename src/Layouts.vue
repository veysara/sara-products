<template>
  <div class="wrap">
    <!-- Header -->
    <Header />
      <main class="wrap-content">
        <router-view/>
      </main>
    <!-- Footer -->
    <Footer />
  </div>
</template>


<script>
  import Header from './components/layouts/header/Header.vue'
  import Footer from './components/layouts/footer/Footer.vue'


  export default {
    name: 'Layout',
    components: {
      Header,
      Footer
    }
  };
</script>


