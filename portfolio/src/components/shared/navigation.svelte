<script lang="ts">
    import { activeSection } from "$lib/sectionStore.svelte";

    let sections = [
        { id: "", name: "Start" },
        { id: "about", name: "About" },
        { id: "skills", name: "Skills" },
        { id: "experience", name: "Experience" },
        { id: "projects", name: "Projects" },
        { id: "contact", name: "Contact" },
    ];

    let { navPillHeight } = $props<{ navPillHeight: number }>();
</script>

<nav>
    <div class="nav-pill" style="height: {navPillHeight}rem;">
        {#each sections as section}
            <button
                class:active={activeSection.current === section.id}
                onclick={() => (activeSection.current = section.id)}
                >{section.name}</button
            >
        {/each}
    </div>
</nav>

<style>
    .nav-pill {
        background-color: var(--background-color);
        display: flex;
        flex-shrink: 0;
        justify-content: center;
        gap: 0.5rem;
        padding: 1rem;
        border-radius: 12px;
        box-shadow: 0 0 10px #00000067;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
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
