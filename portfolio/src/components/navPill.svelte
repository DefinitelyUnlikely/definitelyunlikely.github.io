<script lang="ts">
    import { activeSection } from "../lib/sectionState.svelte";

    function setActiveSection(section: string) {
        activeSection.current = section;
    }
</script>

<div class="nav-pill">
    <button onclick={() => setActiveSection("about")}>About Me</button>
    <button onclick={() => setActiveSection("experience")}>Experience</button>
    <button onclick={() => setActiveSection("projects")}>Projects</button>
    <button onclick={() => setActiveSection("education")}>Education</button>
</div>

<style>
</style>
