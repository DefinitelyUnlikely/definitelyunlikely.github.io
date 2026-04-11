<script lang="ts">
    import placeholderIcon from "$lib/assets/icons/code-tag-svgrepo-com.svg";

    let { title, description, link, thumbnail } = $props<{
        title: string;
        description: string;
        link: string;
        thumbnail?: string;
    }>();
</script>

<a href={link} target="_blank" rel="noopener noreferrer" class="project-card">
    <div class="project-thumbnail">
        {#if thumbnail}
            <img src={thumbnail} alt="{title} thumbnail" />
        {:else}
            <img src={placeholderIcon} alt="{title} thumbnail" />
        {/if}
    </div>
    <div class="project-text">
        <h3 class="lighter-text" style="color: #ffffff">{title}</h3>
        <p>{description}</p>
    </div>
</a>

<style>
    .project-card {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        max-width: 350px;
        background-color: var(--background-color-secondary);
        border-radius: 12px;
        overflow: hidden;
        text-decoration: none;
        color: inherit;
        border: 1px solid var(--label-color);
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease;
        box-shadow: 0 4px 6px #00000040;
    }

    .project-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 15px #00000067;
        border-color: #525252; /* Slightly brighter than label-color for hover */
    }

    .project-thumbnail {
        width: 100%;
        height: 180px;
        background-color: var(--background-color);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-bottom: 1px solid var(--label-color);
    }

    .project-thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .project-text {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
    }

    .project-text h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
    }

    .project-text p {
        margin: 0;
        font-size: 0.95rem;
        color: var(--text-color);
        line-height: 1.4;
    }
</style>
