<script lang="ts">
    import Project from "./project.svelte";
</script>

<div class="projects-container">
    <Project
        title="Project 1"
        description="Description 1"
        link="https://example.com"
    />
</div>

<style>
    .projects-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 2rem;
        width: 100%;
    }
</style>
