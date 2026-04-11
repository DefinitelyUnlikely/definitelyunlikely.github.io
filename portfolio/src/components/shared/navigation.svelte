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
    .nav-pill {
        background-color: var(--background-color);
        display: flex;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 12px;
        box-shadow: 0 0 10px #00000067;
        height: 2rem;
    }

    .nav-pill button {
        background-color: var(--background-color);
        color: var(--text-color-secondary);
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 12px;
        cursor: pointer;
    }

    .nav-pill button.active {
        background-color: var(--accent-color);
        border: 1px solid var(--label-color);
        color: var(--text-color);
    }
</style>
