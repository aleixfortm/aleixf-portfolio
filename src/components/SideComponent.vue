<template>
    <div class="block">
        <div class="text-color-extra">
            Lorem ipsum, dolor <span class="text-color-1">sit amet consectetur adipisicing elit. Doloremque</span> <span class="text-color-2">commodi corporis consequuntur placeat, suscipit repudiandae,</span> quo aut expedita alias harum quidem vel qui optio nobis explicabo mollitia in error! Quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci aliquid <span class="text-color-3">laudantium modi quae provident odit</span> voluptatem temporibus iusto fugit! Sequi exercitationem nostrum ex minima, at architecto tempore aut asperiores! <span class="text-color-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Placeat esse, perspiciatis aliquam aliquid ipsam qui in autem sapiente repellendus magni a accusamus, architecto possimus expedita praesentium rem perferendis ad dolorem!
            <br>
            <br>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <span class="text-color-3">Doloremque commodi corporis consequuntur placeat, suscipit repudiandae, quo aut expedita alias </span>harum quidem vel qui optio nobis explicabo mollitia in error! Quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span class="text-color-1">Veritatis</span> adipisci aliquid laudantium modi quae provident odit voluptatem temporibus iusto fugit! <span class="text-color-2">Sequi exercitationem nostrum ex minima,</span> at architecto tempore aut asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat esse, perspiciatis aliquam aliquid ipsam qui in autem sapiente repellendus magni a accusamus, architecto possimus expedita praesentium rem perferendis ad dolorem!
        </div>
        <project-card></project-card>
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
    components: {
        ProjectCard
    }
}
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
</style>