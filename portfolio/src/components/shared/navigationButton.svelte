<script lang="ts">
    import { activeSection } from "$lib/sectionStore.svelte";

    let { label, section } = $props<{ label: string; section: string }>();

    function handleClick() {
        activeSection.current = section;
    }
</script>

<button class="nav-button" onclick={handleClick}>{label}</button>

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
</style>
