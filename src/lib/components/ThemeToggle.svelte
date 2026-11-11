<script>
	import { onMount } from 'svelte';

	// The inline script in app.html sets data-theme on <html> before first paint.
	// The icon swap is pure CSS off that attribute; this state only drives the label.
	/** @type {'light' | 'dark'} */
	let theme = 'dark';
	// The icon draws itself in after a switch, not when the page loads.
	let switched = false;

	onMount(() => {
		theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
	});

	function toggle() {
		theme = theme === 'dark' ? 'light' : 'dark';
		switched = true;
		document.documentElement.setAttribute('data-theme', theme);
		try {
			localStorage.setItem('theme', theme);
		} catch (e) {
			// Storage can be unavailable (private mode); the toggle still works for this visit.
		}
	}
</script>

<motion-press scale="0.92">
	<button
		class="icon-btn"
		type="button"
		aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
		on:click={toggle}
	>
		{#if switched}
			<!-- After a switch the theme is known here, so render the one icon and let it draw in. -->
			{#key theme}
				<motion-icon animation="draw rotate" trigger="mount" duration="0.6">
					{#if theme === 'dark'}
						<svg viewBox="0 0 24 24" aria-hidden="true"
							><circle cx="12" cy="12" r="4"></circle><path
								d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
							></path></svg
						>
					{:else}
						<svg viewBox="0 0 24 24" aria-hidden="true"
							><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"></path></svg
						>
					{/if}
				</motion-icon>
			{/key}
		{:else}
			<svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true"
				><circle cx="12" cy="12" r="4"></circle><path
					d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
				></path></svg
			>
			<svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true"
				><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"></path></svg
			>
		{/if}
	</button>
</motion-press>

<style>
	.icon-btn {
		width: 44px;
		height: 44px;
		padding: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-ctl);
		border: 1px solid var(--line-strong);
		background: var(--tile);
		color: var(--ink);
		cursor: pointer;
		transition: border-color 0.18s ease;
	}
	.icon-btn:hover {
		border-color: var(--accent);
	}
	.icon-btn svg {
		width: 18px;
		height: 18px;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
	motion-icon {
		--mc-icon-size: 18px;
		display: inline-block;
		width: 18px;
		height: 18px;
		line-height: 0;
	}
	/* No data-theme (scripts off) falls back to the light tokens, so it shows the moon too. */
	:global([data-theme='dark']) .icon-moon,
	:global(:root:not([data-theme='dark'])) .icon-sun {
		display: none;
	}
</style>
