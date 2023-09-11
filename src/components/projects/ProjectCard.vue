<template>
    <div class="card">
        <div class="img-container"></div>
        <div class="card-data">
            <div class="card-data-title text-color-def">Dummy title</div>
            <div class="card-data-description text-color-extra">This description and details are under construction... Coming soon!</div>
        </div>
        
    </div>
</template>

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
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background-color: rgb(116, 116, 116);
}
</style>