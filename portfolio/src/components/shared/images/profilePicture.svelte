<script lang="ts">
    import profilePicture from "$lib/assets/img/linkedin-profile-pic.jpg";

    let clickCount = $state(0);

    let fiveClicks: string = "OUCH! Stop clicking me!";
    let tenClicks: string = "You're still going? Really?";
    let fifteenClicks: string = "I'm starting to think you don't like me.";
</script>

<div class="profile-pic" class:easter-egg-active={clickCount > 5}>
    <img
        id="prof-pic"
        src={profilePicture}
        alt="Martin Kåår Johansson"
        onclick={() => clickCount++}
        onkeydown={() => clickCount++}
        role=""
        tabindex="-1"
    />
    {#if clickCount > 5}
        <div class="easter-egg">
            <p>
                {#if clickCount > 15}
                    {fifteenClicks}
                {:else if clickCount > 10}
                    {tenClicks}
                {:else}
                    {fiveClicks}
                {/if}
            </p>
        </div>
    {/if}
</div>

<style>
    .profile-pic {
        margin: 1rem 0 1rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #prof-pic {
        width: 200px;
        border-radius: 50%;
        box-shadow: 0 0 3rem rgba(255, 255, 255, 0.473);
    }

    #prof-pic:hover {
        cursor: pointer;
    }

    .easter-egg-active #prof-pic {
        box-shadow: 0 0 3rem rgb(255, 115, 0);
        transition: box-shadow 0.5s ease-in-out;
    }

    .easter-egg-active .easter-egg {
        position: relative;
        top: -250px;
        left: 200px;
        color: var(--text-color);
        font-size: 1.2rem;
        font-weight: bold;
        background-color: var(--background-color);
        padding: 0.5rem 1rem;
        border-radius: 12px;
        box-shadow: 0 0 10px #00000067;
        z-index: 1;
    }
</style>
