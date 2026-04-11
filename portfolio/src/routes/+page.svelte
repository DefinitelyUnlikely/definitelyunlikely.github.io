<script lang="ts">
    import FixedPanel from "../components/panels/fixed.svelte";
    import SectionPanel from "../components/panels/section.svelte";
    import MobileHideInfo from "../components/mobileHideInfo.svelte";
</script>

<main>
    <MobileHideInfo />
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

    @media (max-width: 768px) {
        main {
            flex-direction: column;
            justify-content: flex-start;
            overflow-y: auto;
            padding-top: 1rem;
        }
    }
</style>
