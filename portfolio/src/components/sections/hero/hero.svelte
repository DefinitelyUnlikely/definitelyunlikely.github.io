<script lang="ts">
    import ProfilePicture from "../../shared/images/profilePicture.svelte";
</script>

<div class="hero">
    <div class="hero-text">
        <h1>Martin Kåår Johansson</h1>
        <ProfilePicture />
        <p>Software Developer</p>
    </div>
</div>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        font-size: 2rem;
        font-weight: bold;
    }

    .hero-text p {
        font-size: 1.5rem;
    }
</style>
