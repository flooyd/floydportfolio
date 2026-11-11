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
		padding-top: 72px;
		padding-bottom: 72px;
	}
	.approach .h2 {
		margin: 10px 0 40px;
		max-width: 900px;
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
		min-height: 240px;
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.step__head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: var(--font-mono);
		font-size: 11px;
	}
	.step__num {
		color: var(--accent);
		font-weight: 600;
	}
	.owner {
		padding: 4px 9px;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-chip);
		letter-spacing: 0.08em;
		color: var(--muted);
	}
	.owner--pair {
		padding: 5px 9px;
		border: 0;
		background: var(--accent-fill);
		color: var(--on-accent);
	}
	.step__title {
		font-weight: 700;
		font-size: 28px;
		letter-spacing: -0.02em;
	}
	.step__text {
		font-size: 15px;
		color: var(--muted);
	}

	@media (max-width: 1100px) {
		.steps {
			grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		}
		.step {
			min-height: 200px;
		}
	}
	@media (max-width: 640px) {
		.approach {
			padding-top: 48px;
			padding-bottom: 48px;
		}
		.step {
			min-height: 0;
		}
	}
</style>
