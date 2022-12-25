<template>
  <Header></Header>
  <Content></Content>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Content from '@/components/Content.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Content
  }
}
</script>
