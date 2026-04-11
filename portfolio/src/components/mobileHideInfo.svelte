<script lang="ts">
    import { activeSection } from "$lib/sectionState.svelte";

    let hideFixedPanelMobile = $state(false);
</script>

{#if activeSection.current !== ""}
    <button
        class="mobile-toggle"
        onclick={() => (hideFixedPanelMobile = !hideFixedPanelMobile)}
    >
        {hideFixedPanelMobile ? "Show Profile Info" : "Hide Profile Info"}
    </button>
{/if}

<style>
    .mobile-toggle {
        display: none;
    }

    @media (max-width: 768px) {
        .mobile-toggle {
            display: block;
            margin: 0 auto 1rem auto;
            padding: 0.5rem 1.5rem;
            background-color: var(--accent-color);
            color: var(--secondary-text-color);
            border: none;
            border-radius: 999px;
            font-weight: 600;
            cursor: pointer;
            flex-shrink: 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .mobile-toggle:hover {
            opacity: 0.9;
        }
    }
</style>
