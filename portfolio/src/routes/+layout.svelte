<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import NavPill from "../components/navPill.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavPill />
<div class="cursor-shadow" id="cursorShadow"></div>
{@render children()}

<style>
	:global(:root) {
		--primary-bg-color: #18181b;
		--primary-text-color: #a1a1aa;
		--secondary-text-color: #fafafa;
		--accent-color: #f97316;
		--label-color: #c2410c;
	}

	:global(body) {
		background-color: var(--primary-bg-color);
	}
</style>
