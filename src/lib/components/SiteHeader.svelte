<script>
	import { contact } from '$lib/data/projects.js';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="site-header wrap">
	<div class="site-header__bar">
		<a class="wordmark" href="#top"
			>Floyd Jones<span class="wordmark__cursor" aria-hidden="true"></span></a
		>
		<nav class="site-nav" aria-label="Sections">
			<a href="#work"><span class="slashes" aria-hidden="true">//</span>Work</a>
			<a href="#approach"><span class="slashes" aria-hidden="true">//</span>Approach</a>
			<a href="#about"><span class="slashes" aria-hidden="true">//</span>About</a>
		</nav>
		<div class="site-actions">
			<ThemeToggle />
			<motion-press scale="0.96">
				<a class="btn btn--ghost btn--sm" href="mailto:{contact.email}">Email me</a>
			</motion-press>
		</div>
	</div>
</header>

<style>
	.site-header__bar {
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
	.site-nav a:hover {
		color: var(--ink);
	}
	.site-actions {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	@media (max-width: 640px) {
		.site-nav {
			order: 3;
			width: 100%;
			margin-inline: -16px;
		}
	}
</style>
