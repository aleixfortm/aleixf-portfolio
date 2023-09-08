<template>
    <div class="card">
        <div class="img-container">
            <img :src="imgSrc" alt="Img">
        </div>
        <div class="card-data">
            <div class="card-data-title text-color-def">Storymous</div>
            <div class="card-data-description text-color-extra">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel beatae nostrum suscipit corrupti earum nulla autem debitis est enim quaerat, ipsam accusantium iste rem ullam neque saepe blanditiis voluptas sint!</div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ["data"],
    computed: {
        imgSrc() {
            return require("@/assets/img/storymous-forest.png")
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: row;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    margin: 10px 0 0 0;
    padding: 10px;
    cursor: pointer;
    transition: all 0.1s;
}
.card:hover {
    background-color: rgba(211, 211, 211, 0.07);
}
.card-data-title {
    line-height: 1;
    margin-bottom: 6px;
    width: fit-content;
}
.card-data-title:hover {
    text-decoration: underline;
}
.img-container {
    margin: 0 20px 0 0;
}
.img-container img {
    border-radius: 5px;
    width: 240px;
    height: 120px;
    object-fit: cover;
    transition: all 0.3s;
}
</style>