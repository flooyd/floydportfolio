<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let ready = false;
	onMount(() => { ready = true; });

	const youtubeId = 'aTI3RknsNMM';
	const email = 'floydtjones@gmail.com';
	const linkedin = 'https://linkedin.com/in/flooyd';
	const github = 'https://github.com/flooyd';

	const projects = [
		{
			title: 'finTrack',
			featured: true,
			desc: 'A money tracker that gets out of your way — log income and expenses in one keystroke and watch your net worth climb in real time.',
			image: '/networth.png',
			link: "https://project-r11eo.vercel.app",
			tech: ['SvelteKit', 'Charts', 'Finance']
		},
		{
			title: 'Language Learn',
			spotlight: true,
			desc: 'Interactive, gamified language-learning platform with flashcards and quizzes.',
			image: 'https://raw.githubusercontent.com/flooyd/language-learn/refs/heads/main/static/home.png',
			link: 'https://language-learn-nine.vercel.app/',
			tech: ['Education', 'JavaScript', 'Web']
		},
		{
			title: 'The Chat Room',
			desc: 'AI-driven real-time chat with smart responses and live presence.',
			image: '/chatroom.png',
			link: "https://github.com/flooyd/chatroom",
			tech: ['AI', 'WebSocket', 'SvelteKit']
		},
		{
			title: 'The Forum',
			desc: 'AI-powered comment generation and conversation enhancement.',
			image: 'https://i.imgur.com/IjCixfJ.png',
			link: 'https://github.com/flooyd/forum',
			tech: ['AI', 'Community', 'Node.js']
		},
		{
			title: 'Mango',
			desc: 'Advanced Dota 2 replay analysis and navigation tool.',
			image: 'https://i.imgur.com/YHHAuUY.png',
			link: 'https://github.com/flooyd/mango',
			tech: ['React', 'Data Viz', 'Gaming']
		},
		{
			title: 'Dota 2 LFG',
			desc: 'Team finding and matchmaking for Dota 2 players.',
			image: 'https://github.com/flooyd/dota2lfg/raw/master/readme%20images/dota2lfg.PNG',
			link: 'https://github.com/flooyd/dota2lfg',
			tech: ['React', 'Gaming', 'Node.js']
		},
		{
			title: 'Curiosity & Friends',
			desc: 'Mars rover photo browser built on the NASA API.',
			image: 'https://github.com/flooyd/Curiosity-and-Friends/raw/master/images/caf.PNG?raw=true',
			link: 'https://flooyd.github.io/Curiosity-and-Friends/',
			tech: ['NASA API', 'Space', 'jQuery']
		},
		{
			title: 'TD Map Editor',
			desc: 'Tower-defense map creation tool built with Solid.js.',
			image: 'https://i.imgur.com/xKox8dl.png',
			link: 'https://github.com/flooyd/solidtd',
			tech: ['Solid.js', 'Gaming', 'Editor']
		}
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if ready}
	<header class="topbar" transition:fade={{ duration: 700 }}>
		<a href="#top" class="wordmark"><span class="mark">FJ</span> Floyd Jones</a>
		<nav class="topnav">
			<a href="#work" class="hide">work</a>
			<span class="ndot hide"></span>
			<a href={linkedin} target="_blank" rel="noopener">linkedin</a>
			<a href={github} target="_blank" rel="noopener">github</a>
			<a href="mailto:{email}">email</a>
		</nav>
	</header>

	<main id="top">
		<!-- ===================== HERO ===================== -->
		<section class="hero" transition:fly={{ y: 30, duration: 900, easing: quintOut }}>
			<span class="eyebrow"><span class="blip"></span><span>$</span>&nbsp;<b>full-stack-developer</b></span>
			<h1 class="name">Floyd <span class="grad">Jones</span></h1>
			<p class="tagline">
				I build <b>reliable, user-first web apps</b> — from real-time chat to finance tooling — with 5+
				years across the full stack.
			</p>
			<div class="cta">
				<a href={linkedin} target="_blank" rel="noopener" class="btn">
					<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
					LinkedIn
				</a>
				<a href={github} target="_blank" rel="noopener" class="btn">
					<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.72-4.04-1.42-4.04-1.42-.54-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
					GitHub
				</a>
				<a href="mailto:{email}" class="btn primary">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/></svg>
					Get in touch
				</a>
			</div>

			<div class="media">
				<div class="frame graph">
					<span class="cap"><span class="blip"></span>finTrack — net worth</span>
					<img src="/networth.png" alt="finTrack net worth graph showing $48,210 climbing over a year" />
				</div>
				<div class="frame video">
					<span class="cap"><span class="blip"></span>Mango in action</span>
					<iframe
						src="https://www.youtube.com/embed/{youtubeId}?rel=0"
						title="Floyd Jones — project walkthrough"
						allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</div>

			<span class="scrollcue">selected work<span class="ln"></span></span>
		</section>

		<!-- ===================== WORK ===================== -->
		<section class="work" id="work">
			<div class="wrap">
				<div class="work-head">
					<h2>Selected Work</h2>
					<span class="meta">// <b>{projects.length} projects</b> · full-stack, AI &amp; gaming</span>
				</div>
				<div class="grid">
					{#each projects as p}
						<a
							class="card"
							class:featured={p.featured}
							class:spotlight={p.spotlight}
							href={p.link}
							target="_blank"
							rel="noopener"
						>
							<span class="go">
								<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
							</span>
							<div class="shot"><img src={p.image} alt={p.title} loading="lazy" /></div>
							<div class="body">
								{#if p.featured}<span class="ribbon">NEW · FEATURED</span>{/if}
								<h3>{p.title}</h3>
								<p>{p.desc}</p>
								<div class="tags">
									{#each p.tech as t}<span class="tag">{t}</span>{/each}
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</section>

		<!-- ===================== CONTACT ===================== -->
		<section class="contact">
			<div class="contact-inner">
				<div>
					<h2>Let's build something solid.</h2>
					<p>
						Open to full-stack roles and freelance projects. The fastest way to reach me is email — I
						usually reply within a day.
					</p>
				</div>
				<div class="contact-cta">
					<a href="mailto:{email}" class="btn email">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/></svg>
						{email}
					</a>
					<a href={linkedin} target="_blank" rel="noopener" class="btn ghost">LinkedIn</a>
					<a href={github} target="_blank" rel="noopener" class="btn ghost">GitHub</a>
				</div>
			</div>
		</section>
	</main>

	<footer>
		<div class="foot-inner">
			<span>© 2026 Floyd Jones</span>
			<div class="foot-links">
				<a href={linkedin} target="_blank" rel="noopener">LinkedIn</a>
				<a href={github} target="_blank" rel="noopener">GitHub</a>
				<a href="mailto:{email}">Email</a>
			</div>
		</div>
	</footer>
{/if}

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
	:global(body) {
		margin: 0;
		background: #e9eef4;
		color: #16202b;
		font-family: 'Space Grotesk', system-ui, sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	:root {
		--bg: #e9eef4;
		--bg-2: #f3f6fa;
		--surface: #ffffff;
		--ink: #16202b;
		--muted: #5d6b7a;
		--line: #d8e0ea;
		--blue: #2f7fc4;
		--blue-bright: #4ba3e3;
		--blue-deep: #215f96;
		--blue-fill: #e6f1fb;
		--shadow: 0 1px 2px rgba(22, 32, 43, 0.04), 0 12px 34px rgba(33, 95, 150, 0.1);
		--shadow-lg: 0 2px 6px rgba(22, 32, 43, 0.06), 0 30px 70px rgba(33, 95, 150, 0.18);
		--mono: 'JetBrains Mono', ui-monospace, monospace;
		--sans: 'Space Grotesk', system-ui, sans-serif;
	}
	* {
		box-sizing: border-box;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	img {
		display: block;
		max-width: 100%;
	}

	/* top bar */
	.topbar {
		height: 62px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 clamp(20px, 5vw, 64px);
		position: relative;
		z-index: 5;
	}
	.wordmark {
		display: flex;
		align-items: center;
		gap: 11px;
		font-weight: 600;
		letter-spacing: -0.01em;
	}
	.mark {
		width: 30px;
		height: 30px;
		border-radius: 8px;
		background: var(--blue);
		color: #fff;
		display: grid;
		place-items: center;
		font-family: var(--mono);
		font-size: 13px;
		font-weight: 600;
		box-shadow: 0 4px 12px rgba(47, 127, 196, 0.35);
	}
	.topnav {
		display: flex;
		align-items: center;
		gap: 26px;
		font-family: var(--mono);
		font-size: 12.5px;
	}
	.topnav a {
		color: var(--muted);
		transition: color 0.18s;
	}
	.topnav a:hover {
		color: var(--blue);
	}
	.topnav .ndot {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--line);
	}

	/* hero */
	.hero {
		min-height: calc(100vh - 62px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: clamp(14px, 2.5vh, 30px) clamp(20px, 5vw, 64px) clamp(20px, 3vh, 40px);
		position: relative;
		overflow: hidden;
	}
	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(120% 90% at 50% 118%, rgba(75, 163, 227, 0.2), transparent 55%),
			radial-gradient(80% 60% at 50% -10%, rgba(255, 255, 255, 0.9), transparent 60%),
			linear-gradient(180deg, var(--bg-2), var(--bg));
		z-index: 0;
	}
	.hero > * {
		position: relative;
		z-index: 1;
	}
	.eyebrow {
		font-family: var(--mono);
		font-size: 13px;
		letter-spacing: 0.02em;
		color: var(--blue-deep);
		margin: 0 0 18px;
		display: inline-flex;
		align-items: center;
		gap: 9px;
		padding: 7px 14px;
		border: 1px solid var(--line);
		border-radius: 100px;
		background: rgba(255, 255, 255, 0.7);
		box-shadow: 0 1px 2px rgba(22, 32, 43, 0.04);
	}
	.eyebrow .blip {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--blue-bright);
		box-shadow: 0 0 0 4px rgba(75, 163, 227, 0.18);
	}
	.eyebrow b {
		color: var(--blue-deep);
		font-weight: 600;
	}
	.name {
		font-size: clamp(2.7rem, 6vw, 4.6rem);
		font-weight: 600;
		line-height: 0.98;
		letter-spacing: -0.035em;
		margin: 0;
	}
	.name .grad {
		background: linear-gradient(120deg, var(--blue-deep), var(--blue-bright));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	.tagline {
		font-size: clamp(1rem, 1.7vw, 1.22rem);
		color: var(--muted);
		max-width: 620px;
		margin: 18px auto 0;
		line-height: 1.55;
	}
	.tagline b {
		color: var(--ink);
		font-weight: 500;
	}
	.cta {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 26px;
	}
	.btn {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		font-family: var(--mono);
		font-size: 13px;
		font-weight: 500;
		padding: 11px 18px;
		border-radius: 11px;
		border: 1px solid var(--line);
		background: var(--surface);
		color: var(--ink);
		box-shadow: var(--shadow);
		transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s, color 0.18s;
	}
	.btn svg {
		width: 17px;
		height: 17px;
	}
	.btn:hover {
		transform: translateY(-2px);
		border-color: var(--blue-bright);
		color: var(--blue-deep);
		box-shadow: var(--shadow-lg);
	}
	.btn.primary {
		background: var(--blue);
		color: #fff;
		border-color: var(--blue);
		box-shadow: 0 6px 18px rgba(47, 127, 196, 0.4);
	}
	.btn.primary:hover {
		background: var(--blue-deep);
		color: #fff;
		border-color: var(--blue-deep);
	}

	.media {
		display: flex;
		flex-wrap: nowrap;
		gap: clamp(14px, 2vw, 26px);
		justify-content: center;
		align-items: stretch;
		margin-top: clamp(20px, 3.5vh, 36px);
		width: 100%;
	}
	.frame {
		position: relative;
		border-radius: 16px;
		background: var(--surface);
		border: 1px solid var(--line);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
		height: clamp(196px, 33vh, 312px);
	}
	.frame .cap {
		position: absolute;
		top: 12px;
		left: 12px;
		z-index: 3;
		font-family: var(--mono);
		font-size: 10.5px;
		font-weight: 500;
		letter-spacing: 0.04em;
		color: var(--blue-deep);
		background: rgba(255, 255, 255, 0.86);
		backdrop-filter: blur(4px);
		border: 1px solid var(--line);
		padding: 5px 11px;
		border-radius: 100px;
		display: inline-flex;
		align-items: center;
		gap: 7px;
	}
	.frame .cap .blip {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--blue-bright);
	}
	.frame.graph {
		aspect-ratio: 1390 / 1018;
	}
	.frame.graph img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top center;
	}
	.frame.video {
		aspect-ratio: 16 / 9;
		padding: 0;
		background: #000;
	}
	.frame.video iframe {
		width: 100%;
		height: 100%;
		border: 0;
		display: block;
	}
	.scrollcue {
		margin-top: clamp(16px, 3vh, 30px);
		font-family: var(--mono);
		font-size: 11px;
		letter-spacing: 0.12em;
		color: var(--muted);
		text-transform: uppercase;
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		gap: 7px;
	}
	.scrollcue .ln {
		width: 1px;
		height: 26px;
		background: linear-gradient(var(--blue-bright), transparent);
		animation: drop 1.8s ease-in-out infinite;
	}
	@keyframes drop {
		0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
		50% { opacity: 1; transform: scaleY(1); }
	}

	/* work (dark) */
	.work {
		--ink: #eaf1f8;
		--muted: #8c99a9;
		--line: #243140;
		--surface: #131c26;
		--blue: #5bb0ee;
		--blue-bright: #7ec5f5;
		--blue-fill: rgba(91, 176, 238, 0.12);
		background:
			radial-gradient(90% 60% at 50% 0%, #122130 0%, transparent 60%),
			#0d141c;
		color: var(--ink);
		padding: clamp(64px, 9vh, 120px) clamp(20px, 5vw, 64px) clamp(40px, 6vh, 70px);
	}
	.wrap {
		max-width: 1180px;
		margin: 0 auto;
	}
	.work-head {
		display: flex;
		align-items: baseline;
		gap: 16px;
		flex-wrap: wrap;
		margin-bottom: clamp(30px, 5vh, 54px);
	}
	.work-head h2 {
		font-size: clamp(2rem, 4.5vw, 3.2rem);
		font-weight: 600;
		letter-spacing: -0.03em;
		margin: 0;
		color: var(--ink);
	}
	.work-head .meta {
		font-family: var(--mono);
		font-size: 12.5px;
		color: var(--muted);
	}
	.work-head .meta b {
		color: var(--blue-bright);
		font-weight: 500;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: clamp(16px, 2vw, 24px);
	}
	.card {
		grid-column: span 4;
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: 16px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
		position: relative;
	}
	.card:hover {
		transform: translateY(-4px);
		border-color: rgba(91, 176, 238, 0.55);
		box-shadow: 0 24px 50px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(91, 176, 238, 0.25);
	}
	.card .shot {
		aspect-ratio: 16 / 10;
		background: #0a1018;
		overflow: hidden;
		border-bottom: 1px solid var(--line);
	}
	.card .shot img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top center;
		transition: transform 0.4s ease;
	}
	.card:hover .shot img {
		transform: scale(1.045);
	}
	.card .body {
		padding: 20px 22px 22px;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.card h3 {
		font-size: 1.35rem;
		font-weight: 600;
		letter-spacing: -0.02em;
		margin: 0;
	}
	.card p {
		font-size: 0.92rem;
		line-height: 1.55;
		color: var(--muted);
		margin: 9px 0 16px;
		flex: 1;
	}
	.tags {
		display: flex;
		gap: 7px;
		flex-wrap: wrap;
	}
	.tag {
		font-family: var(--mono);
		font-size: 10.5px;
		font-weight: 500;
		letter-spacing: 0.03em;
		color: var(--blue-bright);
		border: 1px solid rgba(91, 176, 238, 0.3);
		background: var(--blue-fill);
		padding: 4px 9px;
		border-radius: 7px;
	}
	.card .go {
		position: absolute;
		top: 14px;
		right: 14px;
		z-index: 2;
		width: 34px;
		height: 34px;
		border-radius: 9px;
		background: rgba(13, 20, 28, 0.7);
		backdrop-filter: blur(6px);
		border: 1px solid var(--line);
		display: grid;
		place-items: center;
		opacity: 0;
		transform: translateY(-4px);
		transition: opacity 0.25s, transform 0.25s, background 0.25s;
	}
	.card .go svg {
		width: 16px;
		height: 16px;
		stroke: var(--blue-bright);
	}
	.card:hover .go {
		opacity: 1;
		transform: translateY(0);
	}
	.card.featured {
		grid-column: span 8;
		flex-direction: row;
	}
	.card.featured .shot {
		aspect-ratio: auto;
		flex: 1.15;
		border-bottom: none;
		border-right: 1px solid var(--line);
		min-height: 280px;
		background: #e0dfda;
	}
	.card.featured .shot img {
		object-fit: contain;
		object-position: center;
	}

	.card .shot img {
		object-fit: contain;
		object-position: center;
	}
	.card.featured .body {
		flex: 1;
		justify-content: center;
		padding: clamp(24px, 3vw, 38px);
	}
	.card.featured h3 {
		font-size: clamp(1.7rem, 2.4vw, 2.3rem);
	}
	.card.featured p {
		font-size: 1rem;
		flex: 0;
		margin-bottom: 20px;
	}
	.ribbon {
		align-self: flex-start;
		font-family: var(--mono);
		font-size: 10.5px;
		font-weight: 600;
		letter-spacing: 0.08em;
		color: #052238;
		background: var(--blue-bright);
		padding: 5px 11px;
		border-radius: 7px;
		margin-bottom: 16px;
	}
	.card.spotlight {
		grid-column: span 4;
	}

	/* contact / footer */
	.contact {
		--ink: #eaf1f8;
		--muted: #8c99a9;
		--line: #243140;
		background: #0d141c;
		padding: clamp(48px, 8vh, 96px) clamp(20px, 5vw, 64px) 0;
	}
	.contact-inner {
		max-width: 1180px;
		margin: 0 auto;
		border: 1px solid #243140;
		border-radius: 22px;
		background:
			radial-gradient(80% 140% at 100% 0%, rgba(91, 176, 238, 0.16), transparent 55%),
			#111b25;
		padding: clamp(34px, 5vw, 60px);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 30px;
		flex-wrap: wrap;
	}
	.contact-inner h2 {
		font-size: clamp(1.8rem, 3.5vw, 2.8rem);
		font-weight: 600;
		letter-spacing: -0.03em;
		margin: 0;
		color: #eaf1f8;
	}
	.contact-inner p {
		color: #8c99a9;
		margin: 12px 0 0;
		font-size: 1.02rem;
		max-width: 440px;
		line-height: 1.55;
	}
	.contact-cta {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}
	.btn.email {
		background: #5bb0ee;
		color: #052238;
		border: 1px solid #5bb0ee;
		font-weight: 600;
		box-shadow: 0 8px 24px rgba(91, 176, 238, 0.3);
	}
	.btn.email:hover {
		background: #7ec5f5;
		color: #052238;
		transform: translateY(-2px);
	}
	.btn.ghost {
		background: transparent;
		color: #cfe0ee;
		border: 1px solid #2c3c4e;
		box-shadow: none;
	}
	.btn.ghost:hover {
		border-color: #5bb0ee;
		color: #fff;
	}
	footer {
		background: #0d141c;
		color: #5d6b7a;
		padding: 40px clamp(20px, 5vw, 64px) 44px;
	}
	.foot-inner {
		max-width: 1180px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		flex-wrap: wrap;
		border-top: 1px solid #1c2733;
		padding-top: 28px;
		font-family: var(--mono);
		font-size: 12px;
	}
	.foot-inner a {
		color: #8c99a9;
	}
	.foot-inner a:hover {
		color: #5bb0ee;
	}
	.foot-links {
		display: flex;
		gap: 22px;
	}

	@media (max-width: 880px) {
		.card {
			grid-column: span 6;
		}
		.card.featured {
			grid-column: span 12;
		}
		.card.spotlight {
			grid-column: span 6;
		}
	}
	@media (max-width: 640px) {
		.hero {
			min-height: 0;
			padding-top: 30px;
			padding-bottom: 50px;
		}
		.media {
			flex-wrap: wrap;
		}
		.card,
		.card.spotlight {
			grid-column: span 12;
		}
		.card.featured {
			flex-direction: column;
		}
		.card.featured .shot {
			border-right: none;
			border-bottom: 1px solid var(--line);
			min-height: 0;
			aspect-ratio: 16 / 10;
		}
		.topnav .hide {
			display: none;
		}
		.frame {
			height: auto;
			width: 100%;
			max-width: 520px;
		}
		.frame.graph,
		.frame.video {
			aspect-ratio: 16 / 10;
		}
	}
</style>
