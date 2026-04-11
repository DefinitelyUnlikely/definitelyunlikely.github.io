<script lang="ts">
    import About from "../components/sections/about/about.svelte";
    import Contact from "../components/sections/contact/contact.svelte";
    import Experience from "../components/sections/experience/experience.svelte";
    import Projects from "../components/sections/projects/projects.svelte";
    import Skills from "../components/sections/skills/skills.svelte";
    import Start from "../components/sections/start/start.svelte";

    import { activeSection } from "$lib/sectionStore.svelte";
</script>

<main>
    {#if activeSection.current === ""}
        <Start />
    {:else if activeSection.current === "about"}
        <About />
    {:else if activeSection.current === "contact"}
        <Contact />
    {:else if activeSection.current === "experience"}
        <Experience />
    {:else if activeSection.current === "projects"}
        <Projects />
    {:else if activeSection.current === "skills"}
        <Skills />
    {/if}
</main>

<style>
    main {
        margin-top: 2rem;
        margin-bottom: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100% - 5rem);
        color: var(--primary-text-color);
        overflow: hidden;
        box-sizing: border-box;
    }
</style>
