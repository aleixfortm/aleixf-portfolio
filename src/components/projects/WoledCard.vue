<template>
    <a href="https://github.com/aleixfortm/woled" style="text-decoration: none;">
        <div class="card">
            <div class="img-container">
                <img src="@/assets/img/gopher.png" alt="Img">
            </div>
            <div class="card-data">
                <div class="card-data-title text-color-def">Woled</div>
                <div class="card-data-description text-color-extra">A user-friendly CLI Wake-on-LAN tool. Add your own devices, edit config data and broadcast WOL packets through a CLI application.</div>
                <div class="tags">
                    <div class="tag text-color-4">Golang</div>
                    <div class="tag text-color-4">Cobra</div>
                </div>
            </div>
            
        </div>
    </a>
</template>

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
    background-color: rgb(32, 47, 56);
    object-fit: contain;
    transition: all 0.3s;
}
@media (max-width: 700px) {
  .card {
    flex-direction:column-reverse;
  }
  .card-data {
    margin-bottom: 10px;
  }
}
</style>