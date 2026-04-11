<script lang="ts">
    import Project from "./project.svelte";

    let carousel: HTMLElement;

    function scrollLeft() {
        if (carousel) {
            // Scroll by roughly one item's width + gap
            carousel.scrollBy({ left: -370, behavior: "smooth" });
        }
    }

    function scrollRight() {
        if (carousel) {
            carousel.scrollBy({ left: 370, behavior: "smooth" });
        }
    }
</script>

<div class="projects-section">
    <h2 class="section-title lighter-text" style="color: #ffffff">Projects</h2>

    <div class="carousel-wrapper">
        <button
            class="nav-button"
            onclick={scrollLeft}
            aria-label="Previous Project"
        >
            <!-- Left Chevron SVG -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><polyline points="15 18 9 12 15 6"></polyline></svg
            >
        </button>

        <div class="projects-carousel" bind:this={carousel}>
            <div class="carousel-item">
                <Project
                    title="Sales Data Analysis"
                    description="Self-driven project during my time at Telenor - 
                    where I used Python to fetch data from an MS Access database and sorted this based on product type,
                    region and sales value to create insight into where the most valuable customers were found.
                    Created a simple UI in TKinter for easier use."
                    link="https://github.com/DefinitelyUnlikely/redacted-sales-analysis-tool"
                />
            </div>

            <div class="carousel-item">
                <Project
                    title="Demo of OAuth 2.0 PKCE with Identity Broker"
                    description="A demo built with Svelte and Better-Auth to demonstrate how to use OAuth 2.0 with PKCE
                    for authentication across multiple identity providers and applications.
                    The demo was primarily created as a learning project to understand the practical implementation
                    and to provide a clear overview of the workflow during my internship at EMCAP."
                    link="https://github.com/DefinitelyUnlikely/oauth2.0_with_pkce_broker_demo"
                />
            </div>

            <div class="carousel-item">
                <Project
                    title="Finance Application"
                    description="School project with the goal of creating an app that handles transactions
                    for different accounts and to save this in a database.
                    Chose to make a frontend in NET MAUI to learn about cross-platform development."
                    link="https://github.com/DefinitelyUnlikely/PersonalFinanceApp"
                />
            </div>

            <div class="carousel-item">
                <Project
                    title="Remote drive (Dropbox clone)"
                    description="A school project where I developed an API for file and folder management,
                    including authentication and authorization. The project included a web-based frontend in SvelteKit,
                    and aimed to mimic basic functionality from cloud storage services like Dropbox."
                    link="https://github.com/DefinitelyUnlikely/FileHostingApp"
                />
            </div>

            <div class="carousel-item">
                <Project
                    title="Healthcare Application (Backend)"
                    description="Backend for a healthcare app, with the purpose of booking appointments at healthcare centers.
                    Focus was on implementing CI/CD and unit testing and learning about GitHub Actions."
                    link="https://github.com/DefinitelyUnlikely/HealthCareAppBackend"
                />
            </div>

            <div class="carousel-item">
                <Project
                    title="Room Booking System"
                    description="Group project focusing on working according to scrum,
                    developing our Git methodology and learning more about ASP.NET and authentication/authorization."
                    link="https://github.com/DefinitelyUnlikely/BookingApplication"
                />
            </div>
        </div>

        <button
            class="nav-button"
            onclick={scrollRight}
            aria-label="Next Project"
        >
            <!-- Right Chevron SVG -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><polyline points="9 18 15 12 9 6"></polyline></svg
            >
        </button>
    </div>
</div>

<style>
    .projects-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 1200px;
    }

    .section-title {
        margin-bottom: 2rem;
    }

    .carousel-wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        gap: 1rem;
    }

    .projects-carousel {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none; /* Firefox */
        padding: 1rem 0; /* Padding prevents clipping of box-shadows */
        width: 100%;
        scroll-behavior: smooth;
    }

    .projects-carousel::-webkit-scrollbar {
        display: none; /* Chrome/Safari */
    }

    .carousel-item {
        flex: 0 0 auto; /* Prevent flex items from shrinking */
        width: 350px;
        max-width: 85vw; /* Essential for tiny mobile screens */
        scroll-snap-align: center;
        display: flex;
        justify-content: center;
    }

    .nav-button {
        background-color: var(--background-color-secondary);
        color: var(--text-color);
        border: 1px solid var(--label-color);
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease;
        flex-shrink: 0; /* Don't squash the buttons */
        z-index: 10;
        box-shadow: 0 2px 5px #00000040;
    }

    .nav-button:hover {
        background-color: var(--accent-color);
        transform: scale(1.05);
    }

    .nav-button:active {
        transform: scale(0.95);
    }

    /* Target mobile devices for better swipe UI */
    @media (max-width: 768px) {
        .nav-button {
            display: none; /* Hide buttons, rely on touch scroll */
        }

        .carousel-wrapper {
            gap: 0;
        }

        .projects-carousel {
            padding: 1rem 1rem; /* Give some edge breathing room */
        }
    }
</style>
