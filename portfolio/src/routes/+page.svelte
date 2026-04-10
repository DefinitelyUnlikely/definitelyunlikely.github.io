<script lang="ts">
    import About from "../components/sections/about.svelte";
    import Experience from "../components/sections/experience.svelte";
    import Projects from "../components/sections/projects.svelte";
    import { activeSection } from "$lib/sectionState.svelte";
</script>

<main>
    <div class="fixed-panel"></div>
    <div class="section-panel">
        {#if activeSection.current === "about"}
            <About />
        {:else if activeSection.current === "experience"}
            <Experience />
        {:else if activeSection.current === "projects"}
            <Projects />
        {/if}
    </div>
</main>

<style>
    main {
        margin-top: 2rem;
        margin-bottom: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: var(--primary-text-color);
        overflow: hidden;
    }

    .fixed-panel {
        width: 50%;
        height: 100%;
    }

    .section-panel {
        width: 50%;
        height: 100%;
    }
</style>
