<script lang="ts">
    import About from "../components/sections/about/about.svelte";
    import Contact from "../components/sections/contact/contact.svelte";
    import Experience from "../components/sections/experience/experience.svelte";
    import Hero from "../components/sections/hero/hero.svelte";
    import Projects from "../components/sections/projects/projects.svelte";
    import Skills from "../components/sections/skills/skills.svelte";
    import Links from "../components/shared/links.svelte";

    import { slide } from "svelte/transition";

    import { activeSection } from "$lib/sectionStore.svelte";
</script>

<main>
    {#key activeSection.current}
        <div class="content" transition:slide={{ duration: 500 }}>
            {#if activeSection.current === ""}
                <Hero />
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
        </div>
    {/key}
</main>

<style>
    main {
        padding-top: 5rem;
        margin-bottom: 2rem;
        display: flex;
        flex-grow: 1;
        min-height: 0;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        color: var(--primary-text-color);
        box-sizing: border-box;
        overflow-y: auto;
    }

    .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
</style>
