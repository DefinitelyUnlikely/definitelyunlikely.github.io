<script lang="ts">
    import ExpCard from "./expCard.svelte";
</script>

<h2 class="lighter-text">Experience</h2>
<ExpCard
    title="Internship at Nexer"
    time="Jan - May 2026"
    description="Worked on an internal email sending software, to bring it from development to production.
    This taught me more about Microsoft Graph, Microsoft Azure, Clean Architecture, as well as working agile within a larger team.
    Working with Azure Cosmos DB gave me more insight into NoSQL databases. 
    Implementing live collaboration taught me about websockets and OT/CRDTs."
/>

<ExpCard
    title="Internship at EMCAP AB"
    time="Oct - Dec 2025"
    description="Worked with RAG integration with EMCAP's chatbot. Also worked on
    researching options for implementing an identity broker to handle
    authentication and authorization for different services and identity
    providers."
/>

<ExpCard
    title="Account Manager Telenor Prepaid"
    time="2018 - 2024"
    description="Thinking outside the box, daring to do what might be uncomfortable and
    having a finger on the pulse were important qualities."
/>

<ExpCard
    title="Customer Support Telenor"
    time="2016-2018"
    description="Solution-oriented thinking, asking the right questions and understanding
    the customer were important to perform a good job. Qualities I have
    great use of in programming."
/>

<style>
    h2 {
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 1rem;
    }
</style>
