<script setup>
import { defineProps } from 'vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  githubLink: { type: String, required: false },
  appLink: { type: String, required: true },
  imageRight: { type: Boolean, default: false }
})
</script>

<template>
    <div class="row">
      <div :class="['col-lg-6 my-auto', { 'order-lg-2': imageRight }]">
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
        <div v-show="githubLink">
            <br>詳しい説明は<a :href="githubLink">こちら(github)</a>
        </div>
        <h4 class="border-bottom my-3"/>
      </div>
      <div :class="['col-lg-6', { 'order-lg-1': imageRight }]">
        <a :href="appLink">
          <slot></slot>
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