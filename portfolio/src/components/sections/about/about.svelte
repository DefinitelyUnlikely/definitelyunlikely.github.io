<script lang="ts">
    let showAbout = $state(true);
</script>

<div class="about">
    <h2 class="lighter-text">About me</h2>
    <button onclick={() => (showAbout = !showAbout)}
        >{showAbout ? "-" : "+"}</button
    >
    {#if showAbout}
        <p>
            I am a curious <span class="lighter-text">.NET student</span> who
            finds it easy to acquire new knowledge and who loves to
            <span class="lighter-text">grow and improve.</span> The feeling of solving
            problems is unbeatable. Previously I studied chemical engineering at
            Chalmers, but it is programming that I am passionate about and want to
            devote myself to in the future.
        </p>
        <p>
            From my time in <span class="lighter-text">customer service</span>
            and
            <span class="lighter-text">sales</span>
            I have learned to
            <span class="lighter-text">work independently</span>
            with great responsibility,
            <span class="lighter-text">think creatively</span> and
            <span class="lighter-text">solve problems.</span> Most of the time, it
            is simply a matter of asking the right questions!
        </p>
        <p>
            In my spare time I practice <span class="lighter-text">karate</span>
            and wouldn't say no to a board game evening with friends. Or a beer down
            at the local.
        </p>
    {/if}
</div>

<style>
    .about {
        margin: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    h2 {
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    .lighter-text {
        color: var(--secondary-text-color);
    }

    button {
        width: 5rem;
        height: 2rem;
        border-radius: 999px;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        font-size: 1.2rem;
        font-weight: 300;
        cursor: pointer;
        border: 1px solid var(--primary-color);
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.8);
    }

    button:hover {
        background-color: var(--secondary-color);
        color: var(--primary-color);
    }
</style>
