<template>
    <div class="content">
        <div class="outline-marker" :style="{ bottom: outlineMarkerBottom }"></div>
        <div class="sections">
            <div class="section section-projects" :class="{ 'text-color-1': selectedSection === 'projects' }" @click="scrollToSection(1)">Projects</div>
            <div class="section section-work" :class="{ 'text-color-1': selectedSection === 'work' }" @click="scrollToSection(2)">Experience</div>
            <div class="section section-about" :class="{ 'text-color-1': selectedSection === 'about' }" @click="scrollToSection(3)">Blog</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStateStore } from '@/store.js'

export default {
  data() {
    return {
      selectedSection: "projects"
    }
  },
  methods: {
    scrollToSection(section) {
      // Adjust the pixel value (500 in this example) to your desired scroll position.
      var scrollPosition = 0;
      if (section === 1) {
        scrollPosition = 350
      } else if (section === 2) {
        scrollPosition = 1030
      } else {
        scrollPosition = 1570
      }

      
      // Use window.scrollTo to scroll to the specified position.
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth', // Add smooth scrolling animation
      });
    },
    updateSelectedSection(section) {
      this.selectedSection = section
    }
  },
  computed: {
    ...mapState(useStateStore, ['getState']),
    outlineMarkerBottom() {
      this.updateSelectedSection(this.getState)
      if (this.getState === 'projects') {
        return '59px';
      } else if (this.getState === 'work') {
        return '30px';
      } else {
        return '0px';
      }
      
    },
  }
};
</script>

<style scoped>
.outline-marker {
    position: absolute;
    width: 2px;
    height: 28px;
    left: -2px;
    background-color: rgb(0, 255, 136);
    box-shadow: 0px 0px 10px 1px rgba(0, 255, 136, 0.3);
    transition: top .25s cubic-bezier(0,1,.5,1),background-color .5s,opacity .25s;
}
.section {
    cursor: pointer;
    transition: all 0.2s;
}
.section:hover {
    color: rgba(255, 255, 255, 0.8);
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