<script>
	import { stack } from '$lib/data/projects.js';
	import NetWorthChart from './NetWorthChart.svelte';
	import MotionStudy from './MotionStudy.svelte';
</script>

<section class="hero wrap" id="top">
	<!-- Page load: the tiles rise in one after another (the staggers are display: contents, so
	     the grid is untouched) and the headline slides up word by word. -->
	<div class="hero__row">
		<motion-stagger duration="0.7" y="20">
			<div class="tile hero__lead">
				<p class="hero__eyebrow">
					<span class="dot" aria-hidden="true"></span><span
						><strong>Front-end engineer</strong> · Austin, TX · taking new work</span
					>
				</p>
				<!-- The blinking cursor is drawn by CSS after the last word (see .hero__title below),
			     because motion-headline keeps plain text only. -->
				<h1 class="hero__title">
					<motion-headline delay="0.15" interval="0.05" duration="0.9"
						>Interfaces for people who live in their data.</motion-headline
					>
				</h1>
				<p class="hero__lede">
					I'm Floyd. I build dashboards, editors and internal tools in React and Svelte, with motion
					that explains what just happened. Claude is in my loop every day. The judgment stays mine.
				</p>
				<div class="hero__cta">
					<motion-magnetic strength="0.2">
						<motion-press scale="0.96">
							<a class="btn btn--primary" href="#work"
								>See the work<svg viewBox="0 0 24 24" aria-hidden="true"
									><path d="M12 5v14M6 13l6 6 6-6"></path></svg
								></a
							>
						</motion-press>
					</motion-magnetic>
					<motion-press scale="0.96">
						<a class="btn btn--ghost" href="#approach">How I work with Claude</a>
					</motion-press>
				</div>
			</div>
		</motion-stagger>

		<div class="hero__side">
			<motion-stagger delay="0.1" duration="0.7" y="20">
				<NetWorthChart />
			</motion-stagger>

			<div class="hero__pair">
				<motion-stagger delay="0.2" interval="0.1" duration="0.7" y="20">
					<MotionStudy />
					<div class="tile tile--inverse mini now">
						<span class="label">Now</span>
						<p class="now__text">Freelancing. Open to front-end roles.</p>
						<span class="mini__note">5+ years · React, Svelte</span>
					</div>
				</motion-stagger>
			</div>
		</div>
	</div>

	<div class="hero__row hero__row--thirds">
		<motion-stagger delay="0.25" interval="0.08" duration="0.7" y="20">
			<div class="tile third">
				<span class="label">With Claude</span>
				<p class="third__big">
					Spec <span class="arrow" aria-hidden="true">→</span> pair
					<span class="arrow" aria-hidden="true">→</span> polish
				</p>
				<p class="third__text">
					I write the spec, Claude Code drafts, I read every diff, and we polish it together.
				</p>
			</div>
			<div class="tile third">
				<span class="label">Stack</span>
				<div class="chips chips--lg">
					{#each stack as item}<span class="chip">{item}</span>{/each}
				</div>
			</div>
			<a class="tile third latest" href="#work">
				<span class="shot latest__shot"
					><img
						src="/work/bookbuilder.webp"
						alt="Book Builder chapter editor"
						width="1390"
						height="1018"
						style="--pos: 30% 38%"
					/></span
				>
				<span class="latest__body">
					<span class="label">Latest</span>
					<span class="latest__title">Book Builder</span>
					<span class="third__text"
						>A writing workshop for novelists <span class="arrow" aria-hidden="true">→</span></span
					>
				</span>
			</a>
		</motion-stagger>
	</div>
</section>

<style>
	.hero {
		padding-top: 16px;
		padding-bottom: 24px;
		display: flex;
		flex-direction: column;
		gap: var(--gap);
	}
	.hero__row {
		display: grid;
		grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
		gap: var(--gap);
	}
	.hero__row--thirds {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.hero__lead {
		min-height: 558px;
		padding: 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 20px;
	}
	.hero__eyebrow {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--muted);
	}
	.hero__eyebrow strong {
		color: var(--accent);
		font-weight: 600;
	}
	.hero__eyebrow .dot {
		margin-top: 0.45em;
	}
	.hero__title {
		font-weight: 800;
		font-size: clamp(44px, 5.8vw, 84px);
		line-height: 0.95;
		letter-spacing: -0.035em;
		text-wrap: balance;
	}
	/* The cursor rides on the last word, inside its mask, so it slides up with "data." and can
	   never wrap onto a line of its own. Before the headline is split (no script yet, or none
	   at all) it follows the text instead. */
	.hero__title :global(motion-headline > span:last-child > [data-unit]::after),
	.hero__title :global(motion-headline:not([data-ready])::after) {
		content: '';
		display: inline-block;
		width: 0.17em;
		height: 0.74em;
		margin-left: 0.1em;
		background: var(--accent-fill);
		animation: blink 1.1s steps(1) infinite;
	}
	.hero__lede {
		max-width: 600px;
		font-size: 18px;
		color: var(--muted);
	}
	.hero__cta {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}

	.hero__side {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
	}
	.hero__pair {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--gap);
	}

	/* "Now" tile (the shared .mini rules are in global.css) */
	.now .label {
		color: var(--inv-accent);
	}
	.now__text {
		font-weight: 700;
		font-size: 24px;
		line-height: 1.15;
		letter-spacing: -0.015em;
	}
	.now .mini__note {
		color: var(--inv-muted);
	}

	/* Row of three */
	.third {
		min-height: 204px;
		padding: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 12px;
	}
	.third__big {
		font-weight: 700;
		font-size: 28px;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}
	.third__text {
		font-size: 15px;
		color: var(--muted);
	}
	.latest {
		padding: 14px;
		flex-direction: row;
		align-items: stretch;
		gap: 16px;
		text-decoration: none;
		color: var(--ink);
		transition:
			transform 0.22s var(--ease-out),
			border-color 0.22s ease;
	}
	.latest:hover {
		transform: translateY(-3px);
		border-color: var(--accent);
	}
	.latest:hover .shot img {
		transform: scale(1.03);
	}
	.latest__shot {
		flex: 1 1 50%;
		min-height: 172px;
	}
	.latest__body {
		flex: 1 1 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 10px 6px 10px 0;
	}
	.latest__title {
		font-weight: 700;
		font-size: 24px;
		line-height: 1.1;
		letter-spacing: -0.015em;
	}

	@media (max-width: 960px) {
		.hero__row,
		.hero__row--thirds {
			grid-template-columns: minmax(0, 1fr);
		}
		.hero__lead {
			min-height: 0;
		}
	}
	@media (max-width: 640px) {
		.hero__lead {
			padding: 28px 24px;
			gap: 24px;
		}
	}
	@media (max-width: 520px) {
		.hero__pair {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
