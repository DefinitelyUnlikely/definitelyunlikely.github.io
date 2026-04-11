<script lang="ts">
    let languages: string[] = [
        "C#",
        "Python",
        "JavaScript/TypeScript",
        "HTML/CSS",
    ];
    let frameworks: string[] = [
        ".NET",
        ".NET MAUI",
        "ASP.NET",
        "Entity Framework",
        "Django",
        "React",
        "Svelte",
    ];
    let databases: string[] = [
        "PostgreSQL",
        "Azure SQL",
        "MS Access",
        "CosmosDb",
        "MongoDB",
    ];
    let tools: string[] = [
        "Git",
        "GitHub",
        "Visual Studio",
        "VSCode",
        "SCRUM",
        "Azure",
        "Docker",
        "xUnit",
    ];
</script>

<h2 class="lighter-text">Skills</h2>

<div class="languages-section">
    {#each languages as language}
        <p>{language}</p>
    {/each}
</div>

<div class="frameworks-section">
    {#each frameworks as framework}
        <p>{framework}</p>
    {/each}
</div>

<div class="databases-section">
    {#each databases as database}
        <p>{database}</p>
    {/each}
</div>

<div class="tools-section">
    {#each tools as tool}
        <p>{tool}</p>
    {/each}
</div>

<!-- Languages: C#, Python, JavaScript/TypeScript, HTML/CSS

Frameworks: .NET, .NET MAUI, ASP.NET, Entity Framework, Django, React, Svelte

Databases: PostgreSQL, Azure SQL, MS Access, CosmosDb, MongoDB

Tools: Git, GitHub, Visual Studio, VSCode, SCRUM, Azure, Docker, xUnit -->

<style>
    h2 {
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 1rem;
    }

    .lighter-text {
        color: var(--secondary-text-color);
    }
</style>
