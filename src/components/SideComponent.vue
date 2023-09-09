<template>
    <div class="block">
        <div class="text-color-extra">
            I have been tinkering with computers since I was too young to remember; I was born with the mind of an engineer. That's why, back in 2017, right after finishing high school, 
            I decided to pursue a bachelor's degree in Electrical and Electronics Engineering. During my years of study, I have been extensively working on personal projects, which lie
            in software development such as web applications, and systems programming with microcontrollers. I have also got plenty of technical support engineering experience after internships
            at <a href="https://www.ni.com/" class="text-color-4 link">NI</a> and <a href="https://www.criteo.com" class="text-color-4 link">Criteo</a>, great multinational companies.
            <br><br>
            In my free time I enjoy reading books- especially sci-fi novels, practicing gymnastics and martial arts, and of course working on some tech projects of my own.
        </div>

        <section class="whole-section" data-section="projects">
            <div class="state-section-title text-color-def">Projects</div>
            <project-card v-for="i in 4" :key="i"></project-card>
        </section>

        <section class="whole-section" data-section="work">
            <div class="state-section-title text-color-def">Experience</div>
            <project-card v-for="i in 6" :key="i"></project-card>
        </section>

        <section class="whole-section" data-section="about">
            <div class="state-section-title text-color-def" >About me</div>
            <project-card v-for="i in 3" :key="i"></project-card>
        </section>

        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
    
</template>

<script setup>
import { useStateStore } from '@/store';
import ProjectCard from './ProjectCard.vue';
import { onMounted } from 'vue'; // Import onMounted from Vue

const store = useStateStore();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionName = entry.target.getAttribute('data-section');
      store.setState(sectionName);
    }
  });
}, {
  threshold: 0.8, // Adjust this threshold value as needed
});

// Use onMounted to observe all sections when the component is mounted
onMounted(() => {
  const sections = document.querySelectorAll('.whole-section');
  sections.forEach((section) => {
    observer.observe(section);
  });
});
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
.link {
    transition: 0.3s;
}
.link:hover {
    color: rgb(0, 255, 136);
    color: white;
}
</style>