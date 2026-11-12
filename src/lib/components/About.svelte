<script>
	import { contact, roles, skills } from '$lib/data/projects.js';
</script>

<section class="about wrap" id="about">
	<div class="about__grid">
		<motion-stagger interval="0.12" duration="0.7" y="24">
			<div class="tile about__tile">
				<span class="label label--section"
					><span class="slashes" aria-hidden="true">//</span>
					<motion-scramble interval="0.03">About</motion-scramble></span
				>
				<p class="about__lead">
					Five-plus years of React and Svelte, mostly on SaaS and internal tools where the data is
					messy and the screen is always full.
				</p>
				<p class="about__text">
					I like that problem. Good front-end work there is mostly judgment: what to show, what to
					hide, and what should move.
				</p>
				<ul class="roles">
					{#each roles as role}
						<li class="role" class:role--current={role.current}>
							<span class="role__what"
								><span class="role__title">{role.title}</span><span class="role__org"
									>{role.org}</span
								></span
							><span class="role__dates">{role.dates}</span>
						</li>
					{/each}
				</ul>
				<motion-press class="about__resume" scale="0.96">
					<a class="btn btn--ghost" href={contact.resume} target="_blank" rel="noopener"
						>Resume (PDF)<svg viewBox="0 0 24 24" aria-hidden="true"
							><path d="M12 5v14M6 13l6 6 6-6"></path></svg
						></a
					>
				</motion-press>
			</div>
			<div class="tile about__tile skills">
				<span class="label label--section"
					><span class="slashes" aria-hidden="true">//</span>
					<motion-scramble interval="0.02">What I'm good at</motion-scramble></span
				>
				<motion-stagger delay="0.25" interval="0.08" y="12">
					{#each skills as skill}
						<div class="skill">
							<h3 class="skill__title">{skill.title}</h3>
							<p class="skill__text">{skill.text}</p>
						</div>
					{/each}
				</motion-stagger>
			</div>
		</motion-stagger>
	</div>
</section>

<style>
	.about {
		padding-top: 4.5rem;
		padding-bottom: 4.5rem;
	}
	.about__grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr);
		gap: var(--gap);
	}
	.about__tile {
		padding: 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
	.about__lead {
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 1.3;
		letter-spacing: -0.015em;
	}
	.about__text {
		color: var(--muted);
	}
	.roles {
		margin-top: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		list-style: none;
		padding: 0;
	}
	.role {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 0.25rem 1rem;
		flex-wrap: wrap;
		padding: 0.5rem 0 0.5rem 1rem;
		border-left: 0.125rem solid var(--line); /* the resume's entry rule */
	}
	.role--current {
		border-left-color: var(--line-strong);
	}
	.role__what {
		display: flex;
		flex-direction: column;
	}
	.role__title {
		font-weight: 700;
	}
	.role__org {
		font-size: 0.9375rem;
		color: var(--muted);
	}
	.role__dates {
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		color: var(--accent);
	}
	/* Keep the press wrapper to the button's width instead of the tile's. */
	.about__resume {
		align-self: flex-start;
	}
	.skills {
		gap: 0.5rem;
	}
	.skill {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 2rem;
		padding: 1.25rem 0;
		border-bottom: 1px solid var(--line);
	}
	.skill:last-child {
		border-bottom: 0;
	}
	.skill__title {
		flex: 0 0 13.75rem;
		font-weight: 700;
		font-size: 1.375rem;
		letter-spacing: -0.015em;
	}
	.skill__text {
		flex: 1 1 17.5rem;
		font-size: 1rem;
		color: var(--muted);
	}

	@media (max-width: 960px) {
		.about__grid {
			grid-template-columns: minmax(0, 1fr);
		}
	}
	@media (max-width: 640px) {
		.about {
			padding-top: 3rem;
			padding-bottom: 3rem;
		}
		.about__tile {
			padding: 1.75rem 1.5rem;
		}
		.skill__title {
			flex-basis: 100%;
		}
		.role {
			flex-direction: column;
			gap: 0.125rem;
		}
	}
</style>
