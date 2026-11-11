<script>
	import { onMount } from 'svelte';
	import { contact } from '$lib/data/projects.js';
	import ThemeToggle from './ThemeToggle.svelte';

	const links = [
		{ id: 'work', label: 'Work' },
		{ id: 'approach', label: 'Approach' },
		{ id: 'about', label: 'About' }
	];
	// Every region of the page, in order. Only the ones in `links` light up a nav link.
	const regions = ['top', 'work', 'approach', 'about', 'contact'];

	/** The section the reader is in, or null in the hero. @type {string | null} */
	let active = null;
	/** @type {HTMLElement} */
	let bar;
	/** @type {Record<string, HTMLAnchorElement>} */
	const linkEls = {};
	// The accent marker on the header rule: where it sits, measured from the active link.
	let marker = { x: 0, w: 0 };

	function placeMarker() {
		const el = active ? linkEls[active] : null;
		if (!el || !bar) return;
		// The bar can wrap to two rows. Show the marker only while the link is on the row that
		// touches the rule; otherwise the link's own color carries the highlight.
		const onRule = bar.clientHeight - (el.offsetTop + el.offsetHeight) < 24;
		marker = { x: el.offsetLeft + 16, w: onRule ? el.offsetWidth - 32 : 0 };
	}
	$: active, placeMarker();

	onMount(() => {
		// A thin band 40% down the viewport: whichever region crosses it is the current one.
		const spy = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					const id = entry.target.id;
					active = links.some((link) => link.id === id) ? id : null;
				}
			},
			{ rootMargin: '-40% 0px -59% 0px' }
		);
		for (const id of regions) {
			const el = document.getElementById(id);
			if (el) spy.observe(el);
		}
		// The links move when the bar wraps or the fonts load.
		const resize = new ResizeObserver(placeMarker);
		resize.observe(bar);
		return () => {
			spy.disconnect();
			resize.disconnect();
		};
	});
</script>

<header class="site-header">
	<div class="wrap">
		<div class="site-header__bar" bind:this={bar}>
			<a class="wordmark" href="#top"
				>Floyd Jones<span class="wordmark__cursor" aria-hidden="true"></span></a
			>
			<nav class="site-nav" aria-label="Sections">
				{#each links as link}
					<a
						href="#{link.id}"
						aria-current={active === link.id ? 'location' : undefined}
						bind:this={linkEls[link.id]}
						><span class="slashes" aria-hidden="true">//</span>{link.label}</a
					>
				{/each}
			</nav>
			<div class="site-actions">
				<ThemeToggle />
				<motion-press class="site-actions__resume" scale="0.96">
					<a class="btn btn--ghost btn--sm" href={contact.resume} target="_blank" rel="noopener"
						>Resume</a
					>
				</motion-press>
				<motion-press scale="0.96">
					<a class="btn btn--ghost btn--sm" href="mailto:{contact.email}">Email me</a>
				</motion-press>
			</div>
			<!-- Slides along the header rule to sit under the current section's link. -->
			<span
				class="site-nav__marker"
				class:is-on={active !== null}
				style="width: {marker.w}px; transform: translateX({marker.x}px)"
				aria-hidden="true"
			></span>
		</div>
	</div>
</header>

<style>
	/* Sticks to the top of the viewport. The background repeats the page's dotted paper (same
	   origin, so at the top of the page the dots line up and the header looks unchanged). */
	.site-header {
		position: sticky;
		top: 0;
		z-index: 20;
		background:
			radial-gradient(var(--grid) 1px, transparent 1px) 0 0 / 22px 22px,
			var(--bg);
	}
	.site-header__bar {
		position: relative;
		min-height: 72px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px 24px;
		flex-wrap: wrap;
		border-bottom: 2px solid var(--ink); /* the resume's thick header rule */
	}
	.wordmark {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		font-weight: 800;
		font-size: 23px;
		letter-spacing: -0.02em;
		text-decoration: none;
	}
	/* static, as on the resume */
	.wordmark__cursor {
		width: 8px;
		height: 22px;
		margin-left: 6px;
		background: var(--accent-fill);
	}
	.site-nav {
		display: flex;
		gap: 4px;
		flex-wrap: wrap;
		font-family: var(--font-mono);
		font-size: 12px;
	}
	.site-nav a {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		min-height: 44px;
		padding: 0 16px;
		color: var(--muted);
		text-decoration: none;
		transition: color 0.18s ease;
	}
	.site-nav a:hover,
	.site-nav a[aria-current] {
		color: var(--ink);
	}
	/* A short blue block on the header rule, the same blue block as the one after the name. */
	.site-nav__marker {
		position: absolute;
		left: 0;
		bottom: -3px;
		height: 4px;
		background: var(--accent-fill);
		opacity: 0;
		pointer-events: none;
		transition:
			transform 0.35s var(--ease-out),
			width 0.35s var(--ease-out),
			opacity 0.2s ease;
	}
	.site-nav__marker.is-on {
		opacity: 1;
	}
	.site-actions {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	/* Below this the bar has no room for a third control; the resume is still in About. */
	@media (max-width: 900px) {
		.site-actions__resume {
			display: none;
		}
	}
	@media (max-width: 640px) {
		.site-nav {
			order: 3;
			width: 100%;
			margin-inline: -16px;
		}
	}
	/* On very narrow or very short screens a pinned header would cover too much of the page,
	   so it scrolls away with the rest. */
	@media (max-width: 359px), (max-height: 480px) {
		.site-header {
			position: static;
		}
	}
</style>
