<script lang="ts">
    import SkillBadge from "../../shared/skillBadge.svelte";

    const skills = [
        { name: "C#", icon: "/icons/csharp.svg" },
        { name: ".NET", icon: "/icons/dotnet.svg" },
        { name: "ASP.NET Core", icon: "/icons/aspnetcore.svg" },
        {
            name: "Entity Framework Core",
            icon: "/icons/entityframeworkcore.svg",
        },
        { name: "SQL Server", icon: "/icons/sqlserver.svg" },
        { name: "Git", icon: "/icons/git.svg" },
        { name: "GitHub", icon: "/icons/github.svg" },
        { name: "Visual Studio", icon: "/icons/visualstudio.svg" },
        { name: "Visual Studio Code", icon: "/icons/visualstudiocode.svg" },
    ];
</script>

<section id="skills" class="skills">
    <h2>Skills & Technologies</h2>
    <div class="skills-text">
        <p>Some of the skills, technologies and tools I have worked with:</p>
    </div>
    <div class="skills-grid">
        {#each skills as skill}
            <SkillBadge {skill} />
        {/each}
    </div>
</section>

<style>
    .skills {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        width: 100%;
        max-width: 600px;
    }

    .skills-text {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        width: 100%;
    }
</style>
