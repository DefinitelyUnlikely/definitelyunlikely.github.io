<script lang="ts">
    import gitHubIcon from "$lib/assets/github-mark-white.svg";
    import linkedinIcon from "$lib/assets/img/InBug-White.png";
    import emailIcon from "$lib/assets/email-8-svgrepo-com.svg";
</script>

<div class="links">
    <div class="github">
        <a href="https://github.com/DefinitelyUnlikely/" target="_blank"
            ><img
                class="contact-icon"
                id="gh-1"
                src={gitHubIcon}
                alt="invertocat logo"
            /></a
        >
    </div>
    <div class="linkedin">
        <a href="https://linkedin.com/in/martin-kaar-johansson" target="_blank"
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

<style>
    .links {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.2rem;
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
</style>
