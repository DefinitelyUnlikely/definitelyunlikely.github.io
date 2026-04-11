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
		--background-color: #000000;
		--background-color-secondary: #1a1a1a;
		--text-color: #ffffff;
		--text-color-secondary: #9e9e9e;
		--accent-color: #ff000033;
		--font-family: "Inter", sans-serif;
	}

	:global(body) {
		background-color: var(--background-color);
		color: var(--text-color);
		font-family: var(--font-family);
	}
</style>
