<template>
  <div class="main">
    <intro-component></intro-component>
    <side-component></side-component>
  </div>
</template>

<script>
import IntroComponent from './components/IntroComponent.vue';
import SideComponent from './components/SideComponent.vue'

export default {
  components: {
    IntroComponent,
    SideComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.text-color-1 {
  color: rgb(0, 255, 136);
}
.text-color-2 {
  color: rgb(255, 174, 0);
}
.text-color-3 {
  color: rgb(234, 0, 255);
}
.text-color-4 {
  color: rgba(138, 255, 200, 0.808);
}
.text-color-def {
  color: rgba(255, 255, 255, 0.8);
}
.text-color-extra {
  color: #648099;
}

.text-size-title {
  font-size: 55px;
  font-weight: bold;
}
.text-size-subtitle {
  font-size: 18px;
  font-weight: bold;
}
.text-size-normal {
    font-size: 16px;
}
#app {
  color: #516e88;
  background-color: #111827;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
}

.main {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

@media (max-width: 1100px) {
  .main {
    flex-direction: column;
  }
}


</style>
