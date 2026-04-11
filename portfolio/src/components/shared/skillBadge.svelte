<script lang="ts">
    let { skill }: { skill: { name: string; icon: string } } = $props();
</script>

<div class="skill-badge">
    <img class="skill-icon" src={skill.icon} alt={skill.name} />
    <p class="skill-name">{skill.name}</p>
</div>

<style>
    .skill-badge {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;
        border-radius: 0.5rem;
        background-color: var(--background-color);
        border: 1px solid var(--background-color-secondary);
        box-shadow: 0 0 0 1px #00000067;
    }

    .skill-icon {
        height: 1.5rem;
        width: 1.5rem;
        margin-right: 0.5rem;
    }

    .skill-name {
        font-size: 0.8rem;
    }
</style>
