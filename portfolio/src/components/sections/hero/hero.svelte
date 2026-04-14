<script lang="ts">
    import ProfilePicture from "../../shared/images/profilePicture.svelte";
</script>

<div class="hero">
    <div class="hero-text">
        <h1 class="name">Martin Kåår Johansson</h1>
        <ProfilePicture />
        <p class="title">Full stack Developer</p>
        <p class="location">Gothenburg, Sweden</p>
        <p class="subtitle">
            Hey! I am a fullstack developer, with years of experience within
            sales and customer support - which I believe gives me a unique
            perspective on that writing code and creating <span class="dramatic"
                >software</span
            > is about solving real issues for real people. Always eager to learn
            new things and improve upon my craft.
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
        max-width: 600px;
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
        text-align: center;
        overflow-wrap: break-word;
    }

    @media (max-width: 600px) {
        .hero-text h1 {
            font-size: 2.2rem;
        }
    }

    .hero-text .title {
        font-size: 1.5rem;
        background-color: var(--label-color);
        padding: 0.5rem 1rem;
        border-radius: 12px;
        margin-top: 0rem;
        box-shadow: 0 0 10px #00000067;
    }

    .hero-text .subtitle {
        font-size: 1.2rem;
        margin-top: 0.5rem;
        text-align: center;
        line-height: 1.25;
    }

    .hero-text p {
        margin: 0.25rem 0;
    }

    .dramatic {
        color: rgb(255, 115, 0);
        font-weight: bold;
        font-style: italic;
    }
</style>
