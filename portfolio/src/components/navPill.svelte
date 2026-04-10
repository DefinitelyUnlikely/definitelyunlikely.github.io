<script lang="ts">
    import { activeSection } from "../lib/sectionState.svelte";
    import { onMount } from "svelte";

    function setActiveSection(section: string) {
        activeSection.current = section;
        showPill();
    }

    let visible = $state(true);
    let hideTimer: ReturnType<typeof setTimeout>;

    function showPill() {
        visible = true;
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => {
            visible = false;
        }, 3000);
    }

    function handleInteraction() {
        showPill();
    }

    onMount(() => {
        // Start the initial hide timer
        hideTimer = setTimeout(() => {
            visible = false;
        }, 3000);

        window.addEventListener("pointermove", handleInteraction);
        window.addEventListener("keydown", handleInteraction);
        window.addEventListener("scroll", handleInteraction);
        window.addEventListener("pointerdown", handleInteraction);

        return () => {
            clearTimeout(hideTimer);
            window.removeEventListener("pointermove", handleInteraction);
            window.removeEventListener("keydown", handleInteraction);
            window.removeEventListener("scroll", handleInteraction);
            window.removeEventListener("pointerdown", handleInteraction);
        };
    });
</script>

<div class="nav-pill" class:hidden={!visible}>
    <button
        class:active={activeSection.current === "skills"}
        onclick={() => setActiveSection("skills")}>Skills</button
    >
    <button
        class:active={activeSection.current === "experience"}
        onclick={() => setActiveSection("experience")}>Experience</button
    >
    <button
        class:active={activeSection.current === "projects"}
        onclick={() => setActiveSection("projects")}>Projects</button
    >
</div>

<style>
    .nav-pill {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background-color: var(--primary-bg-color);
        border-radius: 9999px;
        transition:
            opacity 0.4s ease,
            transform 0.4s ease;
        opacity: 1;
        transform: translateY(0);
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.8);
    }

    .nav-pill button {
        color: var(--primary-text-color);
        font-size: 1.5rem;
        font-weight: 300;
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 0.4rem 1.2rem;
        border-radius: 9999px;
        transition:
            background-color 0.2s ease,
            color 0.2s ease;
    }

    .nav-pill button.active {
        background-color: var(--accent-color);
        color: var(--primary-bg-color);
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .nav-pill {
            width: 80%;
            height: 3rem;
            position: fixed;
            bottom: 1.5rem;
            left: 50%;
            transform: translateX(-50%);
            padding: 0.5rem 0.5rem;
            gap: 0.25rem;
            z-index: 100;
        }

        .nav-pill.hidden {
            opacity: 0;
            transform: translateX(-50%) translateY(1rem);
            pointer-events: none;
        }

        .nav-pill button {
            font-size: 0.85rem;
            padding: 0.35rem 0.75rem;
        }
    }
</style>
