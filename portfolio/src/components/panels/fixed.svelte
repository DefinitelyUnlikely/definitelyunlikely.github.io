<script lang="ts">
    import { activeSection } from "$lib/sectionState.svelte";
    import About from "../sections/about.svelte";
    import Links from "../links.svelte";
    import ProfilePicture from "../profile-picture.svelte";

    let hideFixedPanelMobile = $state(false);
</script>

<div
    class="fixed-panel"
    class:hidden={activeSection.current === ""}
    class:mobile-hidden={hideFixedPanelMobile && activeSection.current !== ""}
>
    <div class="fixed-panel-content-wrapper">
        <h1 class="name">Martin Kåår Johansson</h1>
        <h2 class="title">Software Developer</h2>
        <ProfilePicture />
        <About />
        <Links />
    </div>
</div>

<style>
    .fixed-panel {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        transition: width 0.5s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .fixed-panel.hidden {
        width: 100%;
        height: 100%;
        align-items: center;
    }

    .fixed-panel-content-wrapper {
        width: 100%;
        max-width: 640px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .name {
        margin: 0.1rem;
        color: var(--secondary-text-color);
    }

    .title {
        margin: 0.1rem;
    }

    @media (max-width: 768px) {
        .fixed-panel {
            width: 100%;
            height: auto;
            align-items: center;
        }

        .fixed-panel.hidden {
            height: 100%;
        }

        .fixed-panel.mobile-hidden {
            display: none !important;
        }
    }
</style>
