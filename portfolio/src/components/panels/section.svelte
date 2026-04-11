<script lang="ts">
    import { activeSection } from "$lib/sectionState.svelte";
    import { slide } from "svelte/transition";
    import Skills from "../sections/skills/skills.svelte";
    import Experience from "../sections/experience/experience.svelte";
    import Projects from "../sections/projects/projects.svelte";
</script>

{#if activeSection.current !== ""}
    <div class="section-panel" in:slide={{ duration: 400, delay: 100 }}>
        <div class="section-panel-content-wrapper">
            {#key activeSection.current}
                <div in:slide={{ duration: 400, delay: 100 }}>
                    {#if activeSection.current === "skills"}
                        <Skills />
                    {:else if activeSection.current === "experience"}
                        <Experience />
                    {:else if activeSection.current === "projects"}
                        <Projects />
                    {/if}
                </div>
            {/key}
        </div>
    </div>
{/if}

<style>
    .section-panel {
        width: 50%;
        height: 100%;
        overflow-y: auto;
    }

    .section-panel-content-wrapper {
        width: 100%;
        max-width: 640px;
    }

    @media (max-width: 768px) {
        .section-panel {
            width: 100%;
            height: auto;
            overflow-y: visible;
            padding-bottom: 2rem;
            margin-top: 1rem;
        }

        .section-panel-content-wrapper {
            padding: 0 1rem;
        }
    }
</style>
