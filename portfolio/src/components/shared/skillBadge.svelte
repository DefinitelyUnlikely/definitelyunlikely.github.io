<script lang="ts">
    let { skill }: { skill: { name: string; icon: string } } = $props();
</script>

<div class="skill-badge">
    <img src={skill.icon} alt={skill.name} />
    <p>{skill.name}</p>
</div>

<style>
</style>
