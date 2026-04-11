<script lang="ts">
    import { activeSection } from "$lib/sectionStore.svelte";
</script>

<nav>
    <div class="nav-pill">
        <button
            class:active={activeSection.current === ""}
            onclick={() => (activeSection.current = "")}>Home</button
        >
        <button
            class:active={activeSection.current === "about"}
            onclick={() => (activeSection.current = "about")}>About</button
        >
        <button
            class:active={activeSection.current === "experience"}
            onclick={() => (activeSection.current = "experience")}
            >Experience</button
        >
        <button
            class:active={activeSection.current === "projects"}
            onclick={() => (activeSection.current = "projects")}
            >Projects</button
        >
        <button
            class:active={activeSection.current === "skills"}
            onclick={() => (activeSection.current = "skills")}>Skills</button
        >
        <button
            class:active={activeSection.current === "contact"}
            onclick={() => (activeSection.current = "contact")}>Contact</button
        >
    </div>
</nav>

<style>
</style>
