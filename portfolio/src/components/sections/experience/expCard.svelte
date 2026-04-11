<script lang="ts">
    let { title, time, description } = $props<{
        title: string;
        time: string;
        description: string;
    }>();
</script>

<div class="card">
    <h3>{title}</h3>
    <p>{time}</p>
    <p>{description}</p>
</div>

<style>
    .card {
        background-color: var(--secondary-bg-color);
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    h3 {
        color: var(--secondary-text-color);
    }

    p {
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 1rem;
    }
</style>
