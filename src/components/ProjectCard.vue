<template>
    <div class="card">
        <img :src="imgSrc" alt="Img">
        <div class="card-data">
            <div class="card-data-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
            <div class="card-data-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel beatae nostrum suscipit corrupti earum nulla autem debitis est enim quaerat, ipsam accusantium iste rem ullam neque saepe blanditiis voluptas sint!</div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ["data"],
    computed: {
        imgSrc() {
            return require("@/assets/img/gopher.png")
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: row;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio and cover container */
}
</style>