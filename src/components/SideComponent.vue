<template>
    <div class="block">
        <div class="text-color-extra">
            I have been tinkering with computers since I was too young to remember; I was born with the mind of an engineer. That's why back in 2017, after finishing high school, 
            I decided to pursue a bachelor's degree in Electrical and Electronics Engineering. During my years of study, I have been extensively working on personal projects, which lie
            in software development such as web applications, and systems programming with microcontrollers. I have also got plenty of technical support engineering experience after some internships
            with amazing multinational companies.
            <br><br>
            In my free time I enjoy reading books- especially sci-fi novels, practicing gymnastics and martial arts, and of course working on some tech projects of my own.
        </div>

        <div class="state-section-title text-color-def">Projects</div>
        <project-card v-for="i in 3" :key="i"></project-card>
        <div class="state-section-title text-color-def">Work</div>
        <project-card v-for="i in 3" :key="i"></project-card>
        <div class="state-section-title text-color-def">About me</div>
        <project-card v-for="i in 3" :key="i"></project-card>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
    
</template>

<script setup>
import { useStateStore } from '@/store';
import ProjectCard from './ProjectCard.vue';
const store = useStateStore()

store.setState("Projects")

</script>

<style scoped>
.block {
    max-width: 1000px;
    margin-top: 80px;
    padding: 10px;
    text-align: justify;
    overflow-wrap: break-word;
    hyphens: auto;
}
.state-section-title {
    font-size: 22px;
    margin: 50px 0 0 0;
    padding: 0 0 0 10px;
    border-left: 5px solid rgb(0, 255, 136);
}
</style>