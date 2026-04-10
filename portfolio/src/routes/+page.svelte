<script lang="ts">
    import About from "../components/sections/about.svelte";
    import Experience from "../components/sections/experience.svelte";
    import Projects from "../components/sections/projects.svelte";
    import Skills from "../components/sections/skills.svelte";
    import { activeSection } from "$lib/sectionState.svelte";
    import { slide } from "svelte/transition";

    import githubIcon from "$lib/assets/github-mark-white.svg";
    import linkedinIcon from "$lib/images/InBug-White.png";
    import emailIcon from "$lib/assets/email-8-svgrepo-com.svg";
    import profilePic from "$lib/images/linkedin-profile-pic2.jpg";

    let hideFixedPanelMobile = $state(false);
</script>

<main>
    {#if activeSection.current !== ""}
        <button
            class="mobile-toggle"
            onclick={() => (hideFixedPanelMobile = !hideFixedPanelMobile)}
        >
            {hideFixedPanelMobile ? "Show Profile Info" : "Hide Profile Info"}
        </button>
    {/if}
    <div
        class="fixed-panel"
        class:hidden={activeSection.current === ""}
        class:mobile-hidden={hideFixedPanelMobile &&
            activeSection.current !== ""}
    >
        <div class="fixed-panel-content-wrapper">
            <h1 class="name">Martin Kåår Johansson</h1>
            <h2 class="title">Software Developer</h2>

            <div class="profile-pic">
                <img
                    id="prof-pic"
                    src={profilePic}
                    alt="Martin Kåår Johansson"
                />
            </div>

            <div class="about">
                <h2 class="lighter-text">About me</h2>
                <p>
                    I am a curious <span class="lighter-text">.NET student</span
                    >
                    who finds it easy to acquire new knowledge and who loves to
                    <span class="lighter-text">grow and improve.</span> The feeling
                    of solving problems is unbeatable. Previously I studied chemical
                    engineering at Chalmers, but it is programming that I am passionate
                    about and want to devote myself to in the future.
                </p>
                <p>
                    From my time in <span class="lighter-text"
                        >customer service</span
                    >
                    and
                    <span class="lighter-text">sales</span>
                    I have learned to
                    <span class="lighter-text">work independently</span>
                    with great responsibility,
                    <span class="lighter-text">think creatively</span> and
                    <span class="lighter-text">solve problems.</span> Most of the
                    time, it is simply a matter of asking the right questions!
                </p>
                <p>
                    In my spare time I practice <span class="lighter-text"
                        >karate</span
                    > and wouldn't say no to a board game evening with friends. Or
                    a beer down at the local.
                </p>
            </div>

            <div class="links">
                <div class="github">
                    <a
                        href="https://github.com/DefinitelyUnlikely/"
                        target="_blank"
                        ><img
                            class="contact-icon"
                            id="gh-1"
                            src={githubIcon}
                            alt="invertocat logo"
                        /></a
                    >
                </div>
                <div class="linkedin">
                    <a
                        href="https://linkedin.com/in/martin-kaar-johansson"
                        target="_blank"
                        ><img
                            src={linkedinIcon}
                            alt="LinkedIn ln Logo"
                            class="contact-icon"
                        /></a
                    >
                </div>
                <div class="email">
                    <a href="mailto:martin@kaarjohansson.se" target="_blank"
                        ><img
                            id="mail"
                            src={emailIcon}
                            alt="An icon of an email"
                            class="contact-icon"
                        /></a
                    >
                </div>
            </div>
        </div>
    </div>
    {#if activeSection.current !== ""}
        <div class="section-panel" in:slide={{ duration: 400, delay: 100 }}>
            <div class="section-panel-content-wrapper">
                {#key activeSection.current}
                    <div in:slide={{ duration: 400, delay: 100 }}>
                        {#if activeSection.current === "skills"}
                            <Skills />
                        {:else if activeSection.current === "experience"}
                            <Experience />
                        {:else if activeSection.current === "projects"}
                            <Projects />
                        {/if}
                    </div>
                {/key}
            </div>
        </div>
    {/if}
</main>

<style>
    main {
        margin-top: 2rem;
        margin-bottom: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: var(--primary-text-color);
        overflow: hidden;
    }

    .fixed-panel {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        transition: width 0.5s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .fixed-panel.hidden {
        width: 100%;
        height: 100%;
        align-items: center;
    }

    .fixed-panel-content-wrapper {
        width: 100%;
        max-width: 640px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .name {
        margin: 0.1rem;
        color: var(--secondary-text-color);
    }

    .title {
        margin: 0.1rem;
    }

    .about {
        margin: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .lighter-text {
        color: var(--secondary-text-color);
    }

    .profile-pic {
        margin: 1rem 0 1rem 0;
    }

    #prof-pic {
        width: 200px;
        border-radius: 50%;
        box-shadow: 0 4px 5rem rgba(0, 0, 0, 0.8);
    }

    .links {
        margin-bottom: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .links > div {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    #gh-1 {
        width: 25px;
        /* Github logo need size adjustment due to being round */
    }

    .contact-icon {
        width: 30px;
        margin-right: 0.1rem;
    }

    .contact-icon:hover {
        width: 40px;
        transition: ease 0.2s;
    }

    #gh-1:hover {
        width: 35px;
    }

    .section-panel {
        width: 50%;
        height: 100%;
        overflow-y: auto;
    }

    .section-panel-content-wrapper {
        width: 100%;
        max-width: 640px;
    }

    .mobile-toggle {
        display: none;
    }

    @media (max-width: 768px) {
        main {
            flex-direction: column;
            justify-content: flex-start;
            overflow-y: auto;
            padding-top: 1rem;
        }

        .mobile-toggle {
            display: block;
            margin: 0 auto 1rem auto;
            padding: 0.5rem 1.5rem;
            background-color: var(--accent-color);
            color: var(--secondary-text-color);
            border: none;
            border-radius: 999px;
            font-weight: 600;
            cursor: pointer;
            flex-shrink: 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .mobile-toggle:hover {
            opacity: 0.9;
        }

        .fixed-panel {
            width: 100%;
            height: auto;
            align-items: center;
        }

        .fixed-panel.hidden {
            height: 100%;
        }

        .fixed-panel.mobile-hidden {
            display: none !important;
        }

        .section-panel {
            width: 100%;
            height: auto;
            overflow-y: visible;
            padding-bottom: 2rem;
            margin-top: 1rem;
        }

        .section-panel-content-wrapper {
            padding: 0 1rem;
        }
    }
</style>
