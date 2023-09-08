<template>
    <div class="content">
        <div class="outline-marker"></div>
        <div class="sections">
            <div class="text-color-3 section section-intro selected"></div>
            <div class="section section-projects">PROJECTS</div>
            <div class="section section-work">WORK</div>
            <div class="section section-about">ABOUT ME</div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.section {
    cursor: pointer;
}
.section:hover {
    text-decoration: underline;
}
.content {
    display: flex;
    width: 100%;
    margin-top: 60px;
    border-left: 1px solid rgba(82, 82, 89, .32);
    line-height: 2;
    padding: 0 0 0 20px;
    text-align: start;
}
</style>