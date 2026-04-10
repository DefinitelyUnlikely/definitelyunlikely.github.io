<script lang="ts">
    import About from "../components/sections/about.svelte";
    import Experience from "../components/sections/experience.svelte";
    import Projects from "../components/sections/projects.svelte";
    import { activeSection } from "$lib/sectionState.svelte";
</script>

<main>
    <div class="fixed-panel">
        <div class="left">
            <!-- Name and occupation div -->
            <div class="name-occ">
                <div
                    style="display: flex; justify-content: space-between; align-items: flex-start;"
                >
                    <h2 class="lighter-text">Martin Kåår Johansson</h2>
                    <button
                        id="language-toggle"
                        class="lang-btn"
                        aria-label="Switch to English">EN</button
                    >
                </div>
                <h4>
                    Studerande <span class="lighter-text">.NET</span> Utvecklare
                    <br /> Teknikhögskolan
                </h4>
            </div>
            <!-- Div for image of me -->
            <div class="profile-pic">
                <img
                    id="prof-pic"
                    src="static/img/linkedin-profile-pic2.jpg"
                    alt="profile picture"
                />
            </div>
            <!-- Div for table of contents -->
            <div class="table-of-content">
                <a href="#start">Om Mig</a>
                <a href="#projects">Projekt</a>
                <a href="#exp">Erfarenhet</a>
            </div>
            <!--links -->
            <div class="links">
                <div class="github">
                    <a
                        href="https://github.com/DefinitelyUnlikely/"
                        target="_blank"
                        ><img
                            class="contact-icon"
                            id="gh-1"
                            src="static/assets/github-mark-white.svg"
                            alt="invertocat logo"
                        /></a
                    >
                </div>
                <div class="linkedin">
                    <a
                        href="https://linkedin.com/in/martin-kaar-johansson"
                        target="_blank"
                        ><img
                            src="static/img/InBug-White.png"
                            alt="LinkedIn ln Logo"
                            class="contact-icon"
                        /></a
                    >
                </div>
                <div class="email">
                    <a href="mailto:martin@kaarjohansson.se" target="_blank"
                        ><img
                            id="mail"
                            src="static/assets/email-8-svgrepo-com.svg"
                            alt="An icon of an email"
                            class="contact-icon"
                        /></a
                    >
                </div>
            </div>
            <!-- Phone -->
            <div class="phone">
                <p>Eller ring mig på: 0708 55 07 58</p>
            </div>
        </div>
    </div>
    <div class="section-panel">
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
    }

    .section-panel {
        width: 50%;
        height: 100%;
    }
</style>
