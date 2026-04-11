<script lang="ts">
</script>

<div class="contact-section">
    <h2 class="section-title lighter-text" style="color: #ffffff">Contact</h2>

    <form
        action="https://formsubmit.co/4ecbe5dcb150195b783485ad274bb4b7"
        method="POST"
    >
        <label for="name">Your name</label>
        <input type="text" name="name" required />
        <label for="email">Your email</label>
        <input type="email" name="email" required />
        <label for="message">Message</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
    </form>
</div>

<style>
    .contact-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 1200px;
    }

    .section-title {
        margin-bottom: 2rem;
    }
</style>
