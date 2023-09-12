<template>
    <a href="https://www.storymous.com" style="text-decoration: none;" class="whole-card">
        <div class="card" @mouseover="zoomIn" @mouseout="zoomOut">
            <div class="img-container">
                <img src="@/assets/img/storymous-forest.png" alt="Img" :class="{ zoomeds: isZoomed }">
            </div>
            <div class="card-data">
                <div class="title-link-container">
                    <div class="card-data-title text-color-def">Storymous</div>
                    <div class="text-color-4 gh">repo<img src="@/assets/img/gh.png" alt="github logo" class="gh-logo"></div>
                </div> 
                <div class="card-data-description text-color-extra">Unique social media platform centered around storytelling where users are empowered to start and continue existing stories dynamically through a chapter-based system.</div>
                <div class="tags">
                    <div class="tag text-color-4">Vue.js</div>
                    <div class="tag text-color-4">JavaScript</div>
                    <div class="tag text-color-4">Python</div>
                    <div class="tag text-color-4">Flask</div>
                    <div class="tag text-color-4">MongoDB</div>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
  data() {
    return {
      isZoomed: false,
    };
  },
  methods: {
    zoomIn() {
      this.isZoomed = true;
    },
    zoomOut() {
      this.isZoomed = false;
    },
  },
};
</script>

<style scoped>
.title-link-container {
  display: flex;
  justify-content: space-between;
}
.gh-logo {
  height: 17px;
  width: auto;
  filter: brightness(150%);
  margin-left: 5px;
  transition: 0.2s all;
}
.gh-logo:hover {
  height: 17px;
  width: auto;
  filter: brightness(90%);
}
.gh {
  font-size: 13px;
  text-decoration: underline;
}
.zoomed {
    transform: scale(1.1);
    z-index: 999;
}
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
    transition: all 0.2s;
}
.card:hover {
    background-color: rgba(112, 112, 112, 0.089);
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
    transition: transform 0.6s;
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