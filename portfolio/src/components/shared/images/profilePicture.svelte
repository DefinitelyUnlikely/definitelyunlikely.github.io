<script lang="ts">
    import profilePicture from "$lib/assets/img/linkedin-profile-pic.jpg";
</script>

<div class="profile-pic">
    <img id="prof-pic" src={profilePicture} alt="Martin Kåår Johansson" />
</div>

<style>
    .profile-pic {
        margin: 1rem 0 1rem 0;
    }

    #prof-pic {
        width: 200px;
        border-radius: 50%;
        box-shadow: 0 0 3rem rgba(255, 255, 255, 0.473);
    }
</style>
