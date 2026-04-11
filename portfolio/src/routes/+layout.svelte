<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import Navigation from "../components/shared/navigation.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navigation />
{@render children()}

<style>
	:global(:root) {
		--background-color: #272727;
		--background-color-secondary: #2a2a2a;
		--text-color: #ffffff;
		--text-color-secondary: #d8d6dd;
		--accent-color: #c2400c83;
		--label-color: #c2410c;
		--font-family: "Inter", sans-serif;
	}

	:global(body) {
		background-color: var(--background-color);
		color: var(--text-color);
		font-family: var(--font-family);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
</style>
