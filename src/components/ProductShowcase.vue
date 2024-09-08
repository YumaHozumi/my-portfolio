<script>
export default {
  name: 'ProductShowcase',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    githubLink: {
      type: String,
      required: true
    },
    appLink: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageRight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
    <div class="row">
        <div :class="['col-lg-6', { 'order-lg-2': imageRight, 'my-auto': !imageRight }]">
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
        <br>詳しい説明は<a :href="githubLink">こちら(github)</a>
        <h4 class="border-bottom my-3"></h4>
        </div>
        <div :class="['col-lg-6', { 'order-lg-1': imageRight }]">
        <a :href="appLink">
            <img :src="imageSrc" class="img-fluid" loading="lazy">
        </a>
        <h4 class="border-bottom"></h4>
        </div>
    </div>
</template>
  

<style scoped>
.row {
margin-bottom: 2rem;
}
</style>