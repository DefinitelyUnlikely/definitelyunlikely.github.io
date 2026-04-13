<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import Navigation from "../components/shared/navigation.svelte";
	import Footer from "../components/shared/footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navigation navPillHeight={4} />
{@render children()}
<Footer />

<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(:root) {
		--background-color: #272727;
		--background-color-secondary: #2a2a2a;
		--text-color: #d8d6dd;
		--text-color-secondary: #ffffff;
		--accent-color: #525252b0;
		--label-color: #52525283;
		--font-family: "JetBrains Mono";
	}

	:global(body) {
		background-color: var(--background-color);
		color: var(--text-color);
		font-family: var(--font-family);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: 100vh;
		width: 100%;
		overflow: hidden;
	}

	:global(.lighter-text) {
		color: var(--text-color-secondary);
	}

	@media (max-width: 768px) {
		:global(body) {
			margin: 0.5rem;
		}
	}
</style>
