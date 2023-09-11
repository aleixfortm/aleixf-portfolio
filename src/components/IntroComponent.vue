<template>
    <div class="intro">
        <div class="intro-data-box">
            <div class="intro-name text-color-1">
                Aleix Fort
            </div>
            <div class="intro-subtitle text-color-def">
                Graduate Electrical Engineer
            </div>
            <div class="text-color-extra summary">
                I specialize in technical support, web development, and computer engineering
            </div>
        </div>
        <sections-component></sections-component>
        <div class="curious-data">
            Designed and coded by me, using
        </div>
        <div class="tags">
            <div class="tag text-color-4">Vue 3</div>
            <div class="tag text-color-4">Pinia</div>
        </div>
    </div>
    
</template>

<script setup>
import SectionsComponent from './SectionsComponent.vue';

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
.curious-data {
    margin: 400px 0 0 0;
}
.intro {
    top: 90px;
    position: sticky;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    max-width: 360px;
    min-width: 360px;
    border-radius: 10px;
    margin: 80px 60px 10px 10px;
    height: fit-content;
    transition: 0.2s all;
}
.intro-name {
    font-size: 60px;
    padding: 0;
    line-height: 1;
}
.intro-subtitle {
    font-size: 20px;
}
.summary {
    padding-top: 15px;
}
</style>