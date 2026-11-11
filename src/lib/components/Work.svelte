<script>
	import { filters, projects, earlier } from '$lib/data/projects.js';
	import ProjectCard from './ProjectCard.svelte';

	// The first two projects share the wide feature row; the rest fill the row of three.
	const featureRow = projects.slice(0, 2);
	const threeRow = projects.slice(2);

	let active = 'all';

	// Non-matching projects dim instead of disappearing, so the layout never jumps.
	/**
	 * @param {string[]} categories
	 * @param {string} filter
	 */
	const isDim = (categories, filter) => filter !== 'all' && !categories.includes(filter);
</script>

<section class="work wrap" id="work">
	<span class="label label--section"
		><span class="slashes" aria-hidden="true">//</span>
		<motion-scramble interval="0.02">Selected projects</motion-scramble></span
	>
	<div class="section-head">
		<div class="section-head__title">
			<h2 class="h2"><motion-headline duration="0.9">Work</motion-headline></h2>
			<span class="section-head__meta">{projects.length} selected · {earlier.length} earlier</span>
		</div>
		<div class="filters" role="group" aria-label="Filter projects">
			{#each filters as filter}
				<motion-press scale="0.94">
					<button
						class="filter"
						type="button"
						aria-pressed={active === filter.id}
						on:click={() => (active = filter.id)}>{filter.label}</button
					>
				</motion-press>
			{/each}
		</div>
	</div>

	<div class="work__row work__row--feature">
		<motion-stagger interval="0.1" duration="0.7" y="24">
			{#each featureRow as project (project.id)}
				<ProjectCard {project} dim={isDim(project.categories, active)} />
			{/each}
		</motion-stagger>
	</div>

	<div class="work__row work__row--three">
		<motion-stagger interval="0.08" duration="0.7" y="24">
			{#each threeRow as project (project.id)}
				<ProjectCard {project} dim={isDim(project.categories, active)} />
			{/each}
		</motion-stagger>
	</div>

	<h3 class="label label--section subhead">
		<span class="slashes" aria-hidden="true">//</span>
		<motion-scramble interval="0.02">Earlier work</motion-scramble>
	</h3>
	<div class="rows">
		<motion-stagger interval="0.05" y="10">
			{#each earlier as item (item.id)}
				<a class="row" class:is-dim={isDim(item.categories, active)} href={item.href}
					><span class="row__title">{item.title}</span><span class="row__text"
						>{item.description} <span class="arrow" aria-hidden="true">↗</span></span
					></a
				>
			{/each}
		</motion-stagger>
	</div>
</section>

<style>
	.work {
		padding-top: 88px;
		padding-bottom: 72px;
	}
	.section-head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 24px;
		flex-wrap: wrap;
		margin: 10px 0 32px;
	}
	.section-head__title {
		display: flex;
		align-items: baseline;
		gap: 20px;
		flex-wrap: wrap;
	}
	.section-head__meta {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--muted);
	}

	.filters {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}
	.filter {
		min-height: 44px;
		padding: 0 16px;
		border-radius: var(--radius-ctl);
		border: 1px solid var(--line-strong);
		background: var(--tile);
		color: var(--ink);
		font-family: var(--font-mono);
		font-size: 12px;
		cursor: pointer;
		transition:
			transform 0.18s ease,
			border-color 0.18s ease;
	}
	.filter:hover {
		transform: translateY(-1px);
		border-color: var(--accent);
	}
	.filter[aria-pressed='true'] {
		background: var(--accent-fill);
		color: var(--on-accent);
		border-color: transparent;
	}

	.work__row {
		display: grid;
		gap: var(--gap);
	}
	.work__row--feature {
		grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
	}
	.work__row--three {
		grid-template-columns: repeat(3, minmax(0, 1fr));
		margin-top: var(--gap);
	}

	.subhead {
		margin: 48px 0 12px;
		font-weight: 400;
	}
	.rows {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		column-gap: 32px;
	}
	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		min-height: 64px;
		border-top: 1px solid var(--line);
		text-decoration: none;
		color: var(--ink);
		transition: opacity 0.25s ease;
	}
	.row__title {
		font-weight: 700;
		font-size: 20px;
		letter-spacing: -0.01em;
		transition: color 0.18s ease;
	}
	.row:hover .row__title {
		color: var(--accent);
	}
	.row__text {
		font-size: 15px;
		color: var(--muted);
		text-align: right;
	}
	/* !important: motion-stagger leaves an inline opacity on the rows once they have risen in. */
	.is-dim {
		opacity: 0.28 !important;
	}

	@media (max-width: 960px) {
		.work__row--feature,
		.work__row--three {
			grid-template-columns: minmax(0, 1fr);
		}
		.rows {
			grid-template-columns: minmax(0, 1fr);
		}
	}
	@media (max-width: 640px) {
		.work {
			padding-top: 64px;
			padding-bottom: 48px;
		}
		.row {
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			gap: 2px;
			padding: 12px 0;
		}
		.row__text {
			text-align: left;
		}
	}
</style>
