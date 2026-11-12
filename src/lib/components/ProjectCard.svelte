<script>
	/** @type {(typeof import('$lib/data/projects.js').projects)[number]} */
	export let project;
	/** Dimmed by the work filter. The card stays in place and stays clickable. */
	export let dim = false;
</script>

<a class="tile card" class:card--feature={project.featured} class:is-dim={dim} href={project.href}>
	<!-- A soft accent glow follows the pointer across the card. -->
	<motion-spotlight class="card__spot" size="380">
		{#if project.image}
			<span class="shot"
				><img
					src={project.image}
					alt={project.imageAlt}
					width={project.imageWidth}
					height={project.imageHeight}
					loading="lazy"
					style="--pos: {project.imagePosition}"
				/></span
			>
		{:else}
			<span class="shot shot--placeholder"
				>[{project.title.toUpperCase()} SCREENSHOT OR VIDEO STILL]</span
			>
		{/if}
		<span class="card__body">
			<span class="label" class:label--accent={project.featured}>{project.label}</span>
			<span class="card__title">{project.title}</span>
			<span class="card__text">{project.description}</span>
			<span class="chips">
				{#each project.tags as tag}<span class="chip">{tag}</span>{/each}
			</span>
		</span>
	</motion-spotlight>
</a>

<style>
	.card {
		display: grid;
		text-decoration: none;
		color: var(--ink);
		transition:
			transform 0.22s var(--ease-out),
			border-color 0.22s ease,
			opacity 0.25s ease;
	}
	/* The card's padding and column layout live on the spotlight, which fills the card. */
	.card__spot {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-radius: calc(var(--radius-tile) - 1px);
		--mc-spotlight-color: color-mix(in srgb, var(--accent) 13%, transparent);
	}
	.card:hover {
		transform: translateY(-0.1875rem);
		border-color: var(--accent);
	}
	.card:hover .shot img {
		transform: scale(1.03);
	}
	.card .shot {
		height: 12.5rem;
	}
	/* The row wrappers live in Work.svelte. */
	:global(.work__row--feature) .card .shot {
		height: 23.75rem;
	}
	.card__body {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.25rem 0.5rem 0.5rem;
	}
	.card__title {
		font-weight: 700;
		font-size: 1.75rem;
		line-height: 1.05;
		letter-spacing: -0.02em;
	}
	.card--feature .card__title {
		font-size: 2.125rem;
		letter-spacing: -0.025em;
	}
	.card__text {
		max-width: 40rem;
		color: var(--muted);
	}
	.card .chips {
		margin-top: 0.25rem;
	}
	/* !important: motion-stagger leaves an inline opacity on the cards once they have risen in. */
	.is-dim {
		opacity: 0.28 !important;
	}

	/* Big screens: the rows are wider than the 1440px design, so the screenshots grow taller
	   with them and keep their shape. cqi is 1% of the row's width (85rem in that design). */
	@media (min-width: 1521px) {
		:global(.work__row) {
			container-type: inline-size;
		}
		.card .shot {
			height: max(12.5rem, 14.7cqi);
		}
		:global(.work__row--feature) .card .shot {
			height: max(23.75rem, 27.94cqi);
		}
	}
	@media (max-width: 960px) {
		.card .shot {
			height: auto;
			aspect-ratio: 2 / 1;
		}
		:global(.work__row--feature) .card .shot {
			height: auto;
			aspect-ratio: 16 / 10;
		}
		:global(.work__row--feature) .card .shot img {
			object-position: center top;
		}
	}
</style>
