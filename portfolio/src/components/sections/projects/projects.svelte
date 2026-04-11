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
        <button class="nav-button" onclick={scrollLeft} aria-label="Previous Project">
            <!-- Left Chevron SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        
        <div class="projects-carousel" bind:this={carousel}>
            <div class="carousel-item">
                <Project
                    title="Project 1"
                    description="This is an awesome description for the first placeholder project."
                    link="https://example.com"
                />
            </div>

            <div class="carousel-item">
                <Project
                    title="Project 2"
                    description="Another really cool project that does amazing things."
                    link="https://example.com"
                />
            </div>

            <div class="carousel-item">
                <Project
                    title="Project 3"
                    description="The third project in this amazing carousel demo."
                    link="https://example.com"
                />
            </div>

             <div class="carousel-item">
                <Project
                    title="Project 4"
                    description="Extra project just to make sure horizontal scrolling is visible."
                    link="https://example.com"
                />
            </div>
        </div>

        <button class="nav-button" onclick={scrollRight} aria-label="Next Project">
            <!-- Right Chevron SVG -->
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
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
