<script>
	import { contact } from '$lib/data/projects.js';
</script>

<footer class="contact wrap" id="contact">
	<!-- The tile rises in on scroll, and a soft glow follows the pointer across it. -->
	<motion-reveal y="32" duration="0.8">
		<motion-spotlight class="contact__tile" size="560">
			<div class="contact__copy">
				<span class="label label--section"
					>// <motion-scramble interval="0.03">Contact</motion-scramble></span
				>
				<h2 class="contact__title">
					<motion-headline delay="0.15" interval="0.05" duration="0.9"
						>Got a screen with too much on it?</motion-headline
					>
				</h2>
				<p class="contact__text">
					That's my favorite kind. Open to front-end roles and freelance projects. Email is fastest,
					and I usually reply within a day.
				</p>
			</div>
			<div class="contact__links">
				<motion-magnetic strength="0.2">
					<motion-press scale="0.96">
						<a class="btn btn--on-accent" href="mailto:{contact.email}">{contact.email}</a>
					</motion-press>
				</motion-magnetic>
				<motion-press scale="0.96">
					<a class="btn btn--on-accent-ghost" href={contact.linkedin} target="_blank" rel="noopener"
						>LinkedIn</a
					>
				</motion-press>
				<motion-press scale="0.96">
					<a class="btn btn--on-accent-ghost" href={contact.github} target="_blank" rel="noopener"
						>GitHub</a
					>
				</motion-press>
			</div>
		</motion-spotlight>
	</motion-reveal>
	<div class="site-foot">
		<span>© 2026 Floyd Jones</span>
		<span>Austin, TX</span>
		<span>SvelteKit + Claude Code</span>
		<a href="#top">Back to top ↑</a>
	</div>
</footer>

<style>
	.contact {
		padding-top: 40px;
		padding-bottom: 24px;
	}
	.contact__tile {
		padding: 56px;
		border-radius: var(--radius-tile);
		background: var(--accent-fill);
		color: var(--on-accent);
		display: flex;
		flex-wrap: wrap;
		gap: 40px;
		align-items: flex-end;
		justify-content: space-between;
	}
	.contact__copy {
		flex: 1 1 520px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.contact__copy .label {
		color: var(--on-accent-soft);
	}
	.contact__title {
		font-weight: 800;
		font-size: clamp(40px, 5vw, 72px);
		line-height: 0.98;
		letter-spacing: -0.035em;
		text-wrap: balance;
	}
	.contact__text {
		max-width: 520px;
		font-size: 19px;
		color: var(--on-accent-soft);
	}
	.contact__links {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}
	.btn--on-accent {
		background: #ffffff;
		color: #16181d;
		padding: 0 26px;
	}
	.btn--on-accent-ghost {
		border-color: var(--on-accent-line);
		color: #ffffff;
		font-weight: 500;
		padding: 0 22px;
	}
	.site-foot {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 8px 16px;
		flex-wrap: wrap;
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--muted);
	}
	.site-foot a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		text-decoration: none;
		transition: color 0.18s ease;
	}
	.site-foot a:hover {
		color: var(--ink);
	}

	@media (max-width: 640px) {
		.contact__tile {
			padding: 32px 24px;
		}
		/* Full-width buttons: the motion wrappers stretch, and each button fills its wrapper. */
		.contact__links motion-magnetic,
		.contact__links motion-press,
		.contact__links .btn {
			flex: 1 1 100%;
		}
		.contact__links .btn {
			justify-content: center;
		}
	}
</style>
