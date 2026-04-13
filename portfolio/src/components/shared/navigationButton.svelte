<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { activeSection } from "$lib/sectionStore.svelte";

    let { label, section } = $props<{ label: string; section: string }>();

    const IDLE_TIMEOUT_MS = 3000;

    function handleClick() {
        activeSection.current = section;
    }

    let isVisible = $state(true);
    let idleTimer: ReturnType<typeof setTimeout>;

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

<button class="nav-button" class:hidden={!isVisible} onclick={handleClick}
    >{label}</button
>

<style>
    .nav-button {
        background-color: var(--background-color);
        color: var(--text-color-secondary);
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 12px;
        cursor: pointer;
        transition:
            opacity 0.4s ease,
            transform 0.4s ease;
        font-family: "JetBrains Mono";
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        .nav-button.hidden {
            opacity: 0;
            pointer-events: none;
            transform: translateY(-4px);
        }
    }
</style>
