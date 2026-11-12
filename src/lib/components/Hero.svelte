<script>
	import { stack } from '$lib/data/projects.js';
	import NetWorthChart from './NetWorthChart.svelte';
	import MotionStudy from './MotionStudy.svelte';

	// The headline types itself in. Its line breaks are written in (see .hero__title) so the
	// line being typed never re-wraps the lines above it.
	const title = 'Interfaces for\npeople who live\nin their data.';
	// The cursor holds still while it types and blinks once it stops, like a real caret.
	let typing = false;
</script>

<section class="hero wrap" id="top">
	<!-- Page load: the tiles rise in one after another (the staggers are display: contents, so
	     the grid is untouched) and the headline types itself in. -->
	<div class="hero__row">
		<motion-stagger duration="0.7" y="20">
			<div class="tile hero__lead">
				<p class="hero__eyebrow">
					<span class="dot" aria-hidden="true"></span><span
						><strong>Front-end engineer</strong> · Austin, TX · taking new work</span
					>
				</p>
				<!-- An invisible copy of the headline holds its full size, so the text below stays put
				     while the typewriter (stacked on top of it) is still empty. The typewriter's own
				     caret is a thin bar that can't be restyled, so the site's block cursor is drawn by
				     CSS instead (see .hero__title below). -->
				<h1 class="hero__title">
					<span class="hero__title-size" aria-hidden="true" translate="no">{title}</span>
					<motion-typewriter
						class:is-typing={typing}
						delay="0.45"
						interval="0.045"
						cursor="false"
						on:motion-start={() => (typing = true)}
						on:motion-finish={() => (typing = false)}>{title}</motion-typewriter
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
		padding-top: 1rem;
		padding-bottom: 1.5rem;
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
		min-height: 34.875rem;
		padding: 2.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1.25rem;
	}
	.hero__eyebrow {
		display: flex;
		align-items: flex-start;
		gap: 0.625rem;
		font-family: var(--font-mono);
		font-size: 0.75rem;
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
		/* The smallest size gives way on phones under ~400px wide, so the longest line ("people
		   who live", 6.9em) still fits inside the page gutter, the tile's padding and its
		   borders (5.625rem together) instead of dropping "live" onto a line of its own. */
		font-size: clamp(min(2.75rem, (100vw - 5.625rem) / 7.1), 5.8vw, 5.25rem);
		line-height: 0.95;
		letter-spacing: -0.035em;
		/* The invisible copy and the typewriter share one grid cell. Both keep the written-in
		   line breaks, so they wrap the same way and the finished line lands exactly on its
		   copy. (No text-wrap: balance: it would re-balance the lines on every keystroke.) */
		display: grid;
		white-space: pre-line;
	}
	.hero__title > * {
		grid-area: 1 / 1;
	}
	.hero__title-size {
		visibility: hidden;
	}
	/* The block cursor rides just after the last typed character. The copy carries one too, so
	   the cursor can never push the finished line to a size the copy didn't reserve. With no
	   script, or reduced motion, the whole headline shows with the cursor after it. */
	.hero__title > *::after {
		content: '';
		display: inline-block;
		width: 0.17em;
		height: 0.74em;
		margin-left: 0.1em;
		background: var(--accent-fill);
		animation: blink 1.1s steps(1) infinite;
	}
	.hero__title > .is-typing::after {
		animation: none;
	}
	.hero__lede {
		max-width: 37.5rem;
		font-size: 1.125rem;
		color: var(--muted);
	}
	.hero__cta {
		display: flex;
		gap: 0.75rem;
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
		font-size: 1.5rem;
		line-height: 1.15;
		letter-spacing: -0.015em;
		text-wrap: balance;
	}
	.now .mini__note {
		color: var(--inv-muted);
	}

	/* Row of three */
	.third {
		min-height: 12.75rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.75rem;
	}
	.third__big {
		font-weight: 700;
		font-size: 1.75rem;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}
	.third__text {
		font-size: 0.9375rem;
		color: var(--muted);
	}
	.latest {
		padding: 0.875rem;
		flex-direction: row;
		align-items: stretch;
		gap: 1rem;
		text-decoration: none;
		color: var(--ink);
		transition:
			transform 0.22s var(--ease-out),
			border-color 0.22s ease;
	}
	.latest:hover {
		transform: translateY(-0.1875rem);
		border-color: var(--accent);
	}
	.latest:hover .shot img {
		transform: scale(1.03);
	}
	/* The image fills the frame without sizing it, so a wide tile can't be stretched taller
	   by the screenshot's own proportions. */
	.latest__shot {
		position: relative;
		flex: 1 1 50%;
		min-height: 10.75rem;
	}
	.latest__shot img {
		position: absolute;
		inset: 0;
	}
	.latest__body {
		flex: 1 1 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0.625rem 0.375rem 0.625rem 0;
	}
	.latest__title {
		font-weight: 700;
		font-size: 1.5rem;
		line-height: 1.1;
		letter-spacing: -0.015em;
	}

	/* Big screens, where the layout is wider than the 1440px design (see --page-max): the
	   headline keeps its share of the lead tile instead of stopping at 84px, and the top row
	   grows taller with the layout, but never so tall that the hero stops fitting on screen
	   (16.25rem is the hero's padding and gaps plus the row of three). cqi is 1% of the
	   hero's content width, which is 85rem in the 1440px design. */
	@media (min-width: 1521px) {
		.hero {
			container-type: inline-size;
		}
		.hero__title {
			font-size: clamp(5.25rem, 6.18cqi, 7rem);
		}
		.hero__lead {
			min-height: max(34.875rem, min(41cqi, 100svh - var(--header-h) - 16.25rem));
		}
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
			padding: 1.75rem 1.5rem;
			gap: 1.5rem;
		}
	}
	@media (max-width: 520px) {
		.hero__pair {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
