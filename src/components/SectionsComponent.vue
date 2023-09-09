<template>
    <div class="content">
        <div class="outline-marker"></div>
        <div class="sections">
            <div class="section section-intro selected"></div>
            <div class="section section-projects" @click="scrollToSection(1)">Projects</div>
            <div class="section section-work" @click="scrollToSection(2)">Work</div>
            <div class="text-color-1 section section-about" @click="scrollToSection(3)">About me</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStateStore } from '@/store.js'

export default {
  methods: {
    scrollToSection(section) {
      // Adjust the pixel value (500 in this example) to your desired scroll position.
      const scrollPosition = section * 450;
      
      // Use window.scrollTo to scroll to the specified position.
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth', // Add smooth scrolling animation
      });
    },
  },
  computed: {
    ...mapState(useStateStore, ['getState']),
    
  }
};
</script>

<style scoped>
.outline-marker {
    position: absolute;
    width: 2px;
    height: 28px;
    bottom: 0px;
    left: -2px;
    background-color: rgb(0, 255, 136);
    box-shadow: 0px 0px 10px 1px rgba(0, 255, 136, 0.3);
    transition: top .25s cubic-bezier(0,1,.5,1),background-color .5s,opacity .25s;
}
.section {
    cursor: pointer;
}
.section:hover {
    text-decoration: underline;
}

.section-intro {
    color: white;
}
.content {
    display: flex;
    position: relative;
    width: 100%;
    margin-top: 25px;
    border-left: 1px solid rgba(82, 82, 89, .32);
    line-height: 1.8;
    padding: 60px 0 0 15px;
    text-align: start;
}
</style>