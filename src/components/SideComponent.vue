<template>
    <div class="block">
        <div class="text-color-extra">
            <span class="quote1">"</span>I have been tinkering with computers since I was too young to remember; I was born with the mind of an engineer. That's why, back in 2018, right after finishing high school, 
            I decided to pursue a bachelor's degree in Electrical and Electronics Engineering. During my years of study, I have been extensively working on personal projects, which lie
            in software development such as web applications, and systems programming with microcontrollers. I have also got plenty of technical support engineering experience after internships
            at <a href="https://www.ni.com/" class="text-color-4 link">NI</a> and <a href="https://www.criteo.com" class="text-color-4 link">Criteo</a>, great multinational companies.
            <br><br>
            In my free time I enjoy reading books- especially sci-fi novels-, practicing gymnastics and martial arts, and of course working on some tech projects of my own.<span class="quote2">"</span>
        </div>

        <section class="whole-section" data-section="projects" :style="{ opacity: sectionNameComp === 'projects' ? 1 : 0.7 }" ref="projectsElement">
            <div class="state-section-title text-color-def">Projects</div>
            <storymous-card></storymous-card>
            <woled-card></woled-card>
            <bombparty-card></bombparty-card>
            <bionicreading-card></bionicreading-card>
        </section>

        <section class="whole-section" data-section="work" :style="{ opacity: sectionNameComp === 'work' ? 1 : 0.7 }" ref="workElement">
            <div class="state-section-title text-color-def">Experience</div>
            <experience-card v-for="job in work" :key="job" :data="job"></experience-card>
        </section>

        <section class="whole-section" data-section="about" :style="{ opacity: sectionNameComp === 'about' ? 1 : 0.7 }" ref="aboutElement">
            <div class="state-section-title text-color-def">Blog</div>
            <project-card v-for="i in 8" :key="i" :data="projects[0]"></project-card>
        </section>

        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
    
</template>

<script setup>
import { useStateStore } from '@/store';
import ProjectCard from './projects/ProjectCard.vue';
import StorymousCard from "@/components/projects/StorymousCard.vue"
import WoledCard from './projects/WoledCard.vue';
import BombpartyCard from './projects/BombpartyCard.vue';
import BionicreadingCard from './projects/BionicreadingCard.vue';
import ExperienceCard from './Experience/ExperienceCard.vue';
import { onMounted } from 'vue'; // Import onMounted from Vue

import { ref } from 'vue';

const store = useStateStore();

const sectionNameComp = ref(null); // Define sectionNameComp in the main scope

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionName = entry.target.getAttribute('data-section');
      sectionNameComp.value = sectionName
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


// data to pass
const projects = ref([
    {
        title: "Bionic Reading for Twitter",
        description: "Apply bionic text to Twitter with this Chrome extension.",
        image: "storymous-forest.png"
    }
])

const work = ref([
    {
        position: "Technical Support Engineer Intern",
        description: "NI develops automated test and measurement systems, and it is widely recognized for its LabVIEW software, and for their ambitious engineering. I developed and designed an application that aimed to reduce energy usage at the office which now saves up to €50K annually worth of energy. This web application enables NI employees worldwide to remotely start their test systems so that they do not need to be powered on 24/7, and I achieved it byby setting up the necessary network infrastructure composed by IoT servers distributed across all subnets, and then broadcast WOL packets accordingly. Other responsibilities include providing support to customers, as well as users at the NI Community forum.",
        location: "Munich, Germany",
        company: "NI (National Instruments)"
    },
    {
        position: "Project team leader, Bachelor's Thesis",
        description: `Wiska manufactures electrical equipment for shipbuilding and other diverse industries. I, alongside a team of 3 other
                European students, worked on a project presented by the company, which aimed to reduce carbon emissions from
                their manufacturing processes. Using the provided data by our manager and after thorough research on greenhouse gas
                calculations, we created a GHG (Greenhouse Gas) Protocol guide for the company to follow.
                During the whole project I assumed the position of team leader, and I was responsible for follow-up presentations 
                at the company, as well as for the organisation of the team.`,
        location: "Hamburg, Germany",
        company: "Wiska GmbH"
    },
    {
        position: "English teacher",
        description: `Nironet is an academy that offers various courses to both students and adults. I worked here for more than a year,
                in which I mainly taught English to adult couples, but also tutored English to Baccalaureate students and high-schoolers,
                as well as teaching Spanish to foreign adults.`,
        location: "Barcelona, Spain",
        company: "Nironet School"
    },
    {
        position: "Staff member",
        description: `Verbeke Foundation is a Belgian museum of contemporary art. During my time here, and with the help of other co-workers
                and volunteers, I assisted in many various tasks,
                including serving at the canteen, assisting in the coordination of big events such as weddings and business meetings,
                offered customer support to visitors, and kept the whole place clean and hygenic.`,
        location: "Antwerp, Belgium",
        company: "Verbeke Foundation"
    }
])
</script>


<style scoped>
.block {
    max-width: 900px;
    margin-top: 8vh;
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
.whole-section {
  transition: all 0.5s;
}
.link {
    transition: 0.3s;
}
.link:hover {
    color: rgb(0, 255, 136);
    color: white;
}
.quote1 {
  color: rgba(255, 255, 255, 0.801);
  margin: 0 5px 0 0;
}
.quote2 {
  color: rgba(255, 255, 255, 0.801);
  margin: 0 0 0 5px;
  transform: scale(2);
}
</style>