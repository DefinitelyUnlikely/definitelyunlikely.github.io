<script lang="ts">
    import { activeSection } from "$lib/sectionStore.svelte";
    function moveForward() {
        switch (activeSection.current) {
            case "":
                activeSection.current = "about";
                break;
            case "about":
                activeSection.current = "skills";
                break;
            case "skills":
                activeSection.current = "experience";
                break;
            case "experience":
                activeSection.current = "projects";
                break;
            case "projects":
                activeSection.current = "contact";
                break;
            case "contact":
                activeSection.current = "";
                break;
        }
    }
</script>

<button onclick={() => moveForward()} title="Move Forward">
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
</button>

<style>
    button {
        position: fixed;
        bottom: 2rem;
        background-color: var(--accent-color);
        border: 1px solid var(--label-color);
        color: var(--text-color);
        padding: 0.5rem 1rem;
        border-radius: 12px;
        cursor: pointer;
    }
</style>
