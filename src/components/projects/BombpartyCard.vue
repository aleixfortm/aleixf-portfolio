<template>
    <div class="card" @click="redirectURL">
        <div class="img-container">
            <img src="@/assets/img/bombparty_icon.jpeg" alt="Img">
        </div>
        <div class="card-data">
            <div class="card-data-title text-color-def">Bombparty bot</div>
            <div class="card-data-description text-color-extra">Webscraping bot that plays bombparty games autonomously.</div>
            <div class="tags">
                <div class="tag text-color-4">Python</div>
                <div class="tag text-color-4">Selenium</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        redirectURL() {
            window.location.href = 'https://github.com/aleixfortm/bomparty-bot';
        }
    }
}
</script>

<style scoped>
.tags {
    display: flex;
    margin-top: 5px;
}
.tag {
    padding: 1px 8px;
    font-size: 14px;
    margin: 0 5px 0 0;
    background-color:rgba(138, 138, 138, 0.205);
    border-radius: 10px;
}
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