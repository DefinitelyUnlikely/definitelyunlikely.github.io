<script lang="ts">
    import SkillBadge from "../../shared/skillBadge.svelte";

    import azureDevopsIcon from "$lib/assets/icons/Azure Devops.svg";
    import azureSqlIcon from "$lib/assets/icons/Azure SQL Database.svg";
    import azureIcon from "$lib/assets/icons/Azure.svg";
    import csharpIcon from "$lib/assets/icons/CSharp.svg";
    import css3Icon from "$lib/assets/icons/CSS3.svg";
    import djangoIcon from "$lib/assets/icons/Django.svg";
    import dockerIcon from "$lib/assets/icons/Docker.svg";
    import gitIcon from "$lib/assets/icons/Git.svg";
    import githubActionsIcon from "$lib/assets/icons/GitHub Actions.svg";
    import githubIcon from "$lib/assets/icons/GitHub.svg";
    import javascriptIcon from "$lib/assets/icons/JavaScript.svg";
    import kotlinIcon from "$lib/assets/icons/Kotlin.svg";
    import linuxIcon from "$lib/assets/icons/Linux.svg";
    import matlabIcon from "$lib/assets/icons/MATLAB.svg";
    import mongodbIcon from "$lib/assets/icons/MongoDB.svg";
    import postgresIcon from "$lib/assets/icons/PostgresSQL.svg";
    import pythonIcon from "$lib/assets/icons/Python.svg";
    import reactIcon from "$lib/assets/icons/React.svg";
    import svelteIcon from "$lib/assets/icons/Svelte.svg";
    import typescriptIcon from "$lib/assets/icons/TypeScript.svg";
    import vscodeIcon from "$lib/assets/icons/Visual Studio Code (VS Code).svg";
    import windows11Icon from "$lib/assets/icons/Windows 11.svg";
    import xmlIcon from "$lib/assets/icons/XML.svg";
    import dotnetIcon from "$lib/assets/icons/dotnet-svgrepo-com.svg";
    import xunitIcon from "$lib/assets/icons/xunit.svg";

    const skills = [
        { name: "C#", icon: csharpIcon },
        { name: ".NET", icon: dotnetIcon },
        { name: "xUnit", icon: xunitIcon },
        { name: "Python", icon: pythonIcon },
        { name: "Django", icon: djangoIcon },
        { name: "JavaScript", icon: javascriptIcon },
        { name: "TypeScript", icon: typescriptIcon },
        { name: "React", icon: reactIcon },
        { name: "Svelte", icon: svelteIcon },
        { name: "CSS3", icon: css3Icon },
        { name: "Kotlin", icon: kotlinIcon },
        { name: "MATLAB", icon: matlabIcon },
        { name: "Git", icon: gitIcon },
        { name: "GitHub", icon: githubIcon },
        { name: "GitHub Actions", icon: githubActionsIcon },
        { name: "Azure DevOps", icon: azureDevopsIcon },
        { name: "Azure", icon: azureIcon },
        { name: "Azure SQL", icon: azureSqlIcon },
        { name: "PostgreSQL", icon: postgresIcon },
        { name: "MongoDB", icon: mongodbIcon },
        { name: "Docker", icon: dockerIcon },
        { name: "Linux", icon: linuxIcon },
        { name: "VS Code", icon: vscodeIcon },
        { name: "Windows 11", icon: windows11Icon },
        { name: "XML", icon: xmlIcon },
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
