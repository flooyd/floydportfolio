<script>
	import { steps } from '$lib/data/projects.js';
</script>

<section class="approach wrap" id="approach">
	<span class="label label--section"
		><span class="slashes" aria-hidden="true">//</span>
		<motion-scramble interval="0.02">How I work with Claude</motion-scramble></span
	>
	<h2 class="h2 h2--fluid">
		<motion-headline interval="0.05" duration="0.9"
			>How a feature gets from sketch to shipped.</motion-headline
		>
	</h2>
	<ol class="steps">
		<motion-stagger interval="0.08" duration="0.7" y="24">
			{#each steps as step (step.num)}
				<li class="tile step" class:tile--flag={step.pair}>
					<div class="step__head">
						<span class="step__num">{step.num}</span><span
							class="owner"
							class:owner--pair={step.pair}>{step.pair ? 'CLAUDE + ME' : 'ME'}</span
						>
					</div>
					<h3 class="step__title">{step.title}</h3>
					<p class="step__text">{step.text}</p>
				</li>
			{/each}
		</motion-stagger>
	</ol>
</section>

<style>
	.approach {
		padding-top: 4.5rem;
		padding-bottom: 4.5rem;
	}
	.approach .h2 {
		margin: 0.625rem 0 2.5rem;
		max-width: 56.25rem;
	}
	.steps {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: var(--gap);
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.step {
		min-height: 15rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.step__head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: var(--font-mono);
		font-size: 0.6875rem;
	}
	.step__num {
		color: var(--accent);
		font-weight: 600;
	}
	.owner {
		padding: 0.25rem 0.5625rem;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-chip);
		letter-spacing: 0.08em;
		color: var(--muted);
	}
	.owner--pair {
		padding: 0.3125rem 0.5625rem;
		border: 0;
		background: var(--accent-fill);
		color: var(--on-accent);
	}
	.step__title {
		font-weight: 700;
		font-size: 1.75rem;
		letter-spacing: -0.02em;
	}
	.step__text {
		font-size: 0.9375rem;
		color: var(--muted);
	}

	@media (max-width: 1100px) {
		.steps {
			grid-template-columns: repeat(auto-fit, minmax(13.75rem, 1fr));
		}
		.step {
			min-height: 12.5rem;
		}
	}
	@media (max-width: 640px) {
		.approach {
			padding-top: 3rem;
			padding-bottom: 3rem;
		}
		.step {
			min-height: 0;
		}
	}
</style>
