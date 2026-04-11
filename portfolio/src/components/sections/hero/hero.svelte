<script lang="ts">
    import ProfilePicture from "../../shared/images/profilePicture.svelte";
</script>

<div class="hero">
    <div class="hero-text">
        <h1 class="name">Martin Kåår Johansson</h1>
        <ProfilePicture />
        <p class="title">Full stack Developer</p>
        <p class="subtitle">
            Passionate about building scalable and maintainable software
        </p>
    </div>
</div>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .hero-text h1 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 0rem;
    }

    .hero-text .title {
        font-size: 1.5rem;
        background-color: var(--accent-color);
        padding: 0.5rem 1rem;
        border-radius: 12px;
        margin-top: 0rem;
        box-shadow: 0 0 10px #00000067;
    }

    .hero-text .subtitle {
        font-size: 1.2rem;
    }
</style>
