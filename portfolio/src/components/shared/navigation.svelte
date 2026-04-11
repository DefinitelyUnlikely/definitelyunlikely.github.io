<script lang="ts">
    import { activeSection } from "$lib/sectionStore.svelte";
    import { Hamburger } from "svelte-hamburgers";

    let sections = [
        { id: "", name: "Start" },
        { id: "about", name: "About" },
        { id: "skills", name: "Skills" },
        { id: "experience", name: "Experience" },
        { id: "projects", name: "Projects" },
        { id: "contact", name: "Contact" },
    ];

    let { navPillHeight } = $props<{ navPillHeight: number }>();

    let isMenuOpen = $state(false);

    function handleSectionClick(id: string) {
        activeSection.current = id;
        isMenuOpen = false;
    }
</script>

<nav>
    <div class="nav-pill" style="height: {navPillHeight}rem;">
        <div class="desktop-links">
            {#each sections as section}
                <button
                    class:active={activeSection.current === section.id}
                    onclick={() => handleSectionClick(section.id)}
                    >{section.name}</button
                >
            {/each}
        </div>

        <div class="mobile-header">
            <span class="mobile-title">
                {sections.find((s) => s.id === activeSection.current)?.name ||
                    "Start"}
            </span>
            <div class="hamburger-container">
                <Hamburger
                    --color="white"
                    --activeColor="white"
                    bind:open={isMenuOpen}
                />
            </div>
        </div>
    </div>

    {#if isMenuOpen}
        <div class="mobile-menu">
            {#each sections as section}
                <button
                    class:active={activeSection.current === section.id}
                    onclick={() => handleSectionClick(section.id)}
                    >{section.name}</button
                >
            {/each}
        </div>
    {/if}
</nav>

<style>
    .nav-pill {
        background-color: var(--background-color);
        display: flex;
        flex-shrink: 0;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        padding: 0 1rem;
        border-radius: 12px;
        box-shadow: 0 0 10px #00000067;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
    }

    .desktop-links {
        display: flex;
        gap: 0.5rem;
    }

    .mobile-header {
        display: none;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .mobile-title {
        font-weight: 600;
        font-size: 1.2rem;
        color: var(--text-color);
        padding-left: 1rem;
    }

    .hamburger-container {
        display: flex;
        align-items: center;
        transform: scale(0.8);
    }

    .mobile-menu {
        display: none;
        position: fixed;
        top: 3.5rem;
        left: 0;
        right: 0;
        background-color: var(--background-color-secondary);
        flex-direction: column;
        padding: 1rem;
        gap: 0.5rem;
        box-shadow: 0 8px 16px #00000040;
        z-index: 99;
        border-radius: 0 0 12px 12px;
    }

    nav button {
        background-color: var(--background-color);
        color: var(--text-color-secondary);
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .mobile-menu button {
        background-color: transparent;
        font-size: 1.1rem;
        padding: 0.75rem 1rem;
        text-align: left;
    }

    nav button.active {
        background-color: var(--accent-color);
        border: 1px solid var(--label-color);
        color: var(--text-color);
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
        .desktop-links {
            display: none;
        }

        .mobile-header {
            display: flex;
        }

        .mobile-menu {
            display: flex;
        }
    }
</style>
