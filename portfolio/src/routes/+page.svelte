<script lang="ts">
    import { activeSection } from "$lib/sectionState.svelte";
    import FixedPanel from "../components/panels/fixed.svelte";
    import SectionPanel from "../components/panels/section.svelte";

    let hideFixedPanelMobile = $state(false);
</script>

<main>
    {#if activeSection.current !== ""}
        <button
            class="mobile-toggle"
            onclick={() => (hideFixedPanelMobile = !hideFixedPanelMobile)}
        >
            {hideFixedPanelMobile ? "Show Profile Info" : "Hide Profile Info"}
        </button>
    {/if}

    <FixedPanel />
    <SectionPanel />
</main>

<style>
    main {
        margin-top: 2rem;
        margin-bottom: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: var(--primary-text-color);
        overflow: hidden;
    }

    .mobile-toggle {
        display: none;
    }

    @media (max-width: 768px) {
        main {
            flex-direction: column;
            justify-content: flex-start;
            overflow-y: auto;
            padding-top: 1rem;
        }

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
