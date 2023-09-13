<template>
    <div class="whole-card">
        <div class="card" @mouseover="zoomIn" @mouseout="zoomOut">
            <div class="card-data">
                <div class="title-link-container">
                    <div class="card-data-title text-color-def">{{ data.position }}</div>
                    <div class="data-column">
                      <div class="text-color-4 company">{{ data.company }}</div>
                      <div class="text-color-def location">{{ data.location }}</div>
                    </div>
                </div> 
                <div class="card-data-description text-color-extra">{{ data.description }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isZoomed: false,
    };
  },
  props: ["data"],
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
.company {

}
.data-column {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.gh-logo {
  height: 17px;
  width: auto;
  filter: brightness(150%);
  margin-left: 5px;
  transition: 0.2s all;
}
.date {
  min-width: fit-content;
  margin: 0px 25px 0 0;
  font-size: 15px;
  line-height: 1;
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