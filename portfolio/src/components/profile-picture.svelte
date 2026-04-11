<script lang="ts">
    import profilePic from "$lib/images/linkedin-profile-pic2.jpg";
</script>

<div class="profile-pic">
    <img id="prof-pic" src={profilePic} alt="Martin Kåår Johansson" />
</div>

<style>
    .profile-pic {
        margin: 1rem 0 1rem 0;
    }

    #prof-pic {
        width: 200px;
        border-radius: 50%;
        box-shadow: 0 4px 5rem rgba(0, 0, 0, 0.8);
    }
</style>
