<script lang="ts">
    import About from "../components/sections/about.svelte";
    import Experience from "../components/sections/experience.svelte";
    import Projects from "../components/sections/projects.svelte";
    import { activeSection } from "$lib/sectionState.svelte";

    import githubIcon from "$lib/assets/github-mark-white.svg";
    import linkedinIcon from "$lib/images/InBug-White.png";
    import emailIcon from "$lib/assets/email-8-svgrepo-com.svg";
    import profilePic from "$lib/images/linkedin-profile-pic2.jpg";
</script>

<main>
    <div class="fixed-panel" class:hidden={activeSection.current === ""}>
        <h1 class="name">Martin Kåår Johansson</h1>
        <h2 class="title">Software Developer</h2>

        <div class="profile-pic">
            <img id="prof-pic" src={profilePic} alt="Martin Kåår Johansson" />
        </div>

        <div class="skills">
            <h3>Skills</h3>
        </div>

        <div class="education">
            <h3>Education</h3>
        </div>

        <div class="links">
            <div class="github">
                <a href="https://github.com/DefinitelyUnlikely/" target="_blank"
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
    <div class="section-panel" class:hidden={activeSection.current === ""}>
        {#if activeSection.current === "about"}
            <About />
        {:else if activeSection.current === "experience"}
            <Experience />
        {:else if activeSection.current === "projects"}
            <Projects />
        {/if}
    </div>
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
        align-items: center;
    }

    .fixed-panel.hidden {
        width: 100%;
        height: 100%;
    }

    .name {
        margin: 0.1rem;
    }

    .title {
        margin: 0.1rem;
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

    .section-panel.hidden {
        display: none;
    }
</style>
