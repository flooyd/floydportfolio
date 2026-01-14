<script>
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let ready = false;
	let currentProject = 0;

	onMount(() => {
		ready = true;
	});

	const projects = [
		{
			title: "The Forum",
			description: "AI-powered comment generation platform with intelligent conversation enhancement",
			image: "./theforum.png",
			link: "https://raw.githubusercontent.com/flooyd/floydportfolio/refs/heads/main/static/theforum.png",
			tech: ["AI", "React", "Node.js"]
		},
		{
			title: "Finance Tracker",
			description: "Comprehensive React Native app for income and expense management",
			image: "./financetrackerweb.png",
			link: "https://raw.githubusercontent.com/flooyd/floydportfolio/refs/heads/main/static/financetrackerweb.png",
			tech: ["React Native", "Mobile", "Finance"]
		},
		{
			title: "App Editor",
			description: "Full-stack application builder with SvelteKit frontend and NestJS backend",
			image: "https://github.com/flooyd/things/raw/main/public/images/grid.png?raw=true",
			link: "https://github.com/flooyd/things",
			tech: ["SvelteKit", "NestJS", "TypeScript"]
		},
		{
			title: "WebLearn",
			description: "Interactive language learning platform with gamified experience",
			image: "https://raw.githubusercontent.com/flooyd/weblearn/refs/heads/main/static/images/weblearn3.png",
			link: "https://github.com/flooyd/weblearn",
			tech: ["Education", "JavaScript", "Web"]
		},
		{
			title: "Mango",
			description: "Advanced Dota 2 replay analysis and navigation tool",
			image: "https://raw.githubusercontent.com/flooyd/mango/refs/heads/master/client/public/Mango.PNG",
			link: "https://github.com/flooyd/mango",
			tech: ["Gaming", "Data Analysis", "React"]
		},
		{
			title: "Dota 2 LFG",
			description: "Team finding and matchmaking application for Dota 2 players",
			image: "https://github.com/flooyd/dota2lfg/raw/master/readme%20images/dota2lfg.PNG",
			link: "https://github.com/flooyd/dota2lfg",
			tech: ["Gaming", "Community", "Node.js"]
		},
		{
			title: "Curiosity and Friends",
			description: "Mars rover photo browser with NASA API integration",
			image: "https://github.com/flooyd/Curiosity-and-Friends/raw/master/images/caf.PNG?raw=true",
			link: "https://flooyd.github.io/Curiosity-and-Friends/",
			tech: ["NASA API", "Space", "Vue.js"]
		},
		{
			title: "TD Map Editor",
			description: "Tower Defense map creation tool built with Solid.js",
			image: "https://i.imgur.com/xKox8dl.png",
			link: "https://github.com/flooyd/solidtd",
			tech: ["Solid.js", "Gaming", "Editor"]
		},
		{
			title: "Interactive Cards",
			description: "Drag-and-drop playing cards",
			image: "https://raw.githubusercontent.com/flooyd/floydportfolio/refs/heads/main/static/cards.jpg",
			link: "https://raw.githubusercontent.com/flooyd/floydportfolio/refs/heads/main/static/cards.jpg",
			tech: ["Animation", "Gaming", "JavaScript"]
		}
	];
</script>

{#if ready}
	<main>
		<!-- Hero Section -->
		<section class="hero" transition:fade={{ duration: 1200, easing: quintOut }}>
			<div class="hero-background"></div>
			<div class="hero-content">
				<div class="hero-text" transition:fly={{ y: 50, duration: 1000, delay: 200, easing: quintOut }}>
					<h1 class="name">Floyd Jones</h1>
					<p class="title">Full Stack Developer</p>
					<p class="intro">
						Crafting exceptional digital experiences with 5+ years of expertise in scalable, 
						user-centric applications that push the boundaries of modern web development.
					</p>
					<div class="social-links">
						<a href="https://linkedin.com/in/flooyd" class="social-link linkedin" target="_blank">
							<svg viewBox="0 0 24 24" fill="currentColor">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
							</svg>
							LinkedIn
						</a>
						<a href="https://github.com/flooyd" class="social-link github" target="_blank">
							<svg viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
							GitHub
						</a>
					</div>
				</div>
				<div class="hero-visual" transition:scale={{ duration: 1000, delay: 400, easing: quintOut }}>
					<div class="floating-elements">
						<div class="element element-1"></div>
						<div class="element element-2"></div>
						<div class="element element-3"></div>
					</div>
				</div>
			</div>
		</section>

		<!-- Projects Section -->
		<section class="projects-section" transition:fly={{ y: 100, duration: 1000, delay: 600 }}>
			<div class="container">
				<h2 class="section-title">Featured Projects</h2>
				<div class="projects-grid">
					{#each projects as project, i}
						<div 
							class="project-card" 
							transition:fly={{ y: 50, duration: 800, delay: 100 * i, easing: quintOut }}
						>
							<div class="project-image">
								<img src={project.image} alt={project.title} loading="lazy" />
								<div class="project-overlay">
									<a href={project.link} target="_blank" class="project-link">
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
											<path d="m9 18 6-6-6-6"/>
										</svg>
									</a>
								</div>
							</div>
							<div class="project-content">
								<h3 class="project-title">{project.title}</h3>
								<p class="project-description">{project.description}</p>
								<div class="project-tech">
									{#each project.tech as tech}
										<span class="tech-tag">{tech}</span>
									{/each}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Footer -->
		<footer class="footer">
			<div class="container">
				<p>&copy; 2025 Floyd Jones. Crafted with ❤️</p>
			</div>
		</footer>
	</main>
{/if}

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		background: #0a0a0a;
		color: #e8e8e8;
	}

	main {
		min-height: 100vh;
		font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
		background: #0a0a0a;
		color: #e8e8e8;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Hero Section */
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		overflow: hidden;
		background: #0a0a0a;
	}

	.hero-background {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background:
			repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 138, 0, 0.03) 2px, rgba(255, 138, 0, 0.03) 4px),
			repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 138, 0, 0.03) 2px, rgba(255, 138, 0, 0.03) 4px),
			radial-gradient(ellipse at 20% 40%, rgba(255, 138, 0, 0.15) 0%, transparent 50%),
			radial-gradient(ellipse at 80% 60%, rgba(255, 69, 0, 0.12) 0%, transparent 50%),
			linear-gradient(180deg, #0a0a0a 0%, #050505 100%);
		animation: float 20s ease-in-out infinite;
		pointer-events: none;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-20px) rotate(1deg); }
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		z-index: 1;
		position: relative;
	}

	.hero-text {
		z-index: 2;
	}

	.name {
		font-size: clamp(4rem, 10vw, 9rem);
		font-weight: 200;
		font-family: 'Newsreader', serif;
		color: #fff;
		margin: 0 0 1rem 0;
		line-height: 0.95;
		letter-spacing: -0.04em;
		text-shadow: 0 0 40px rgba(255, 138, 0, 0.3);
	}

	.title {
		font-size: clamp(0.85rem, 1.5vw, 1.1rem);
		font-weight: 400;
		color: #ff8a00;
		margin: 0 0 2rem 0;
		font-family: 'Fira Code', monospace;
		position: relative;
		text-transform: uppercase;
		letter-spacing: 0.15em;
	}

	.title::before {
		content: '$ ';
		color: #ff4500;
		font-weight: 700;
	}

	.intro {
		font-size: clamp(1.1rem, 2vw, 1.3rem);
		line-height: 1.8;
		color: #a8a8a8;
		margin: 0 auto 3rem auto;
		max-width: 560px;
		font-weight: 200;
	}

	.social-links {
		display: flex;
		gap: 1.5rem;
	}

	.social-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background: transparent;
		border: 1px solid rgba(255, 138, 0, 0.3);
		border-radius: 0;
		color: #ff8a00;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		transition: all 0.3s ease;
		font-family: 'Fira Code', monospace;
		position: relative;
		overflow: hidden;
	}

	.social-link::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: rgba(255, 138, 0, 0.1);
		transition: left 0.3s ease;
	}

	.social-link:hover::before {
		left: 0;
	}

	.social-link:hover {
		border-color: #ff8a00;
		transform: translateX(4px);
		box-shadow: -4px 4px 0 rgba(255, 138, 0, 0.3);
	}

	.social-link svg {
		width: 20px;
		height: 20px;
	}

	.hero-visual {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 500px;
	}

	.floating-elements {
		position: relative;
		width: 300px;
		height: 300px;
		perspective: 1000px;
	}

	.element {
		position: absolute;
		transform-style: preserve-3d;
	}

	.element::before,
	.element::after {
		content: '';
		position: absolute;
		border: 2px solid rgba(255, 138, 0, 0.4);
		background: rgba(255, 138, 0, 0.05);
	}

	/* Front face */
	.element::before {
		width: 100%;
		height: 100%;
		transform: translateZ(0);
	}

	/* Side faces created with box-shadow for depth effect */
	.element::after {
		width: 100%;
		height: 100%;
		transform: translateZ(-40px);
		border-color: rgba(255, 138, 0, 0.2);
		background: rgba(255, 138, 0, 0.02);
	}

	.element-1 {
		width: 180px;
		height: 180px;
		top: -40px;
		left: -40px;
		animation: float1 6s ease-in-out infinite;
		filter: drop-shadow(0 0 20px rgba(255, 138, 0, 0.3));
	}

	.element-2 {
		width: 120px;
		height: 120px;
		top: 80px;
		right: -20px;
		animation: float2 8s ease-in-out infinite;
		filter: drop-shadow(0 0 20px rgba(255, 138, 0, 0.3));
	}

	.element-3 {
		width: 140px;
		height: 140px;
		bottom: -30px;
		left: 80px;
		animation: float3 7s ease-in-out infinite;
		filter: drop-shadow(0 0 20px rgba(255, 138, 0, 0.3));
	}

	@keyframes float1 {
		0%, 100% {
			transform: translate(0, 0) rotateX(45deg) rotateY(0deg) rotateZ(45deg);
		}
		50% {
			transform: translate(10px, -20px) rotateX(45deg) rotateY(180deg) rotateZ(45deg);
		}
	}

	@keyframes float2 {
		0%, 100% {
			transform: translate(0, 0) rotateX(30deg) rotateY(0deg) rotateZ(15deg);
		}
		50% {
			transform: translate(-15px, 15px) rotateX(30deg) rotateY(-180deg) rotateZ(15deg);
		}
	}

	@keyframes float3 {
		0%, 100% {
			transform: translate(0, 0) rotateX(60deg) rotateY(0deg) rotateZ(-25deg);
		}
		50% {
			transform: translate(20px, -10px) rotateX(60deg) rotateY(180deg) rotateZ(-25deg);
		}
	}

	/* Projects Section */
	.projects-section {
		padding: 8rem 0;
		background:
			repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 138, 0, 0.02) 10px, rgba(255, 138, 0, 0.02) 20px),
			linear-gradient(180deg, #0a0a0a 0%, #000000 100%);
		color: #fff;
		border-top: 2px solid rgba(255, 138, 0, 0.2);
		position: relative;
	}

	.section-title {
		font-size: clamp(3rem, 8vw, 7rem);
		font-weight: 800;
		text-align: center;
		margin: 0 0 4rem 0;
		color: #fff;
		font-family: 'IBM Plex Sans', sans-serif;
		text-shadow: 0 0 60px rgba(255, 138, 0, 0.4);
		letter-spacing: -0.03em;
		line-height: 1;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.project-card {
		background: #0f0f0f;
		border-radius: 0;
		overflow: hidden;
		border: 1px solid rgba(255, 138, 0, 0.2);
		transition: all 0.4s ease;
		position: relative;
	}

	.project-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, transparent, #ff8a00, transparent);
		opacity: 0;
		transition: opacity 0.4s ease;
	}

	.project-card:hover::before {
		opacity: 1;
	}

	.project-card:hover {
		transform: translateX(8px);
		border-color: rgba(255, 138, 0, 0.6);
		box-shadow: -8px 8px 0 rgba(255, 138, 0, 0.2), 0 0 40px rgba(255, 138, 0, 0.15);
	}

	.project-image {
		position: relative;
		height: 200px;
		overflow: hidden;
		background: #000;
		border-bottom: 1px solid rgba(255, 138, 0, 0.2);
	}

	.project-image img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		transition: transform 0.4s ease;
	}

	.project-card:hover .project-image img {
		transform: scale(1.1);
	}

	.project-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.85);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.project-card:hover .project-overlay {
		opacity: 1;
	}

	.project-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 60px;
		height: 60px;
		background: #ff8a00;
		border-radius: 0;
		color: #000;
		transition: all 0.3s ease;
		text-decoration: none;
		border: 2px solid #ff8a00;
	}

	.project-link:hover {
		background: transparent;
		color: #ff8a00;
		transform: rotate(90deg) scale(1.1);
	}

	.project-link svg {
		width: 24px;
		height: 24px;
	}

	.project-content {
		padding: 2rem;
	}

	.project-title {
		font-size: 1.6rem;
		font-weight: 700;
		margin: 0 0 0.85rem 0;
		color: #fff;
		font-family: 'IBM Plex Sans', sans-serif;
		letter-spacing: -0.02em;
	}

	.project-description {
		font-size: 0.95rem;
		line-height: 1.65;
		color: #9a9a9a;
		margin: 0 0 1.25rem 0;
		font-weight: 300;
	}

	.project-tech {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-tag {
		padding: 0.3rem 0.9rem;
		background: transparent;
		border: 1px solid rgba(255, 138, 0, 0.4);
		border-radius: 0;
		font-size: 0.75rem;
		color: #ff8a00;
		font-weight: 600;
		font-family: 'Fira Code', monospace;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		transition: all 0.3s ease;
	}

	.tech-tag:hover {
		background: rgba(255, 138, 0, 0.1);
		border-color: #ff8a00;
	}

	/* Footer */
	.footer {
		padding: 3rem 0;
		text-align: center;
		border-top: 2px solid rgba(255, 138, 0, 0.2);
		background: #000;
		color: #666;
	}

	.footer p {
		margin: 0;
		color: #666;
		font-size: 0.85rem;
		font-family: 'Fira Code', monospace;
		letter-spacing: 0.05em;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.hero-content {
			grid-template-columns: 1fr;
			gap: 2rem;
			text-align: center;
		}

		.hero-visual {
			height: 300px;
			margin-top: 20px;
		}

		.floating-elements {
			width: 200px;
			height: 200px;
			margin-top: 20px;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}

		.social-links {
			justify-content: center;
		}

		.container {
			padding: 0 1rem;
		}
	}

	@media (max-width: 480px) {
		.hero {
			padding: 4rem 0;
		}
		
		.projects-section {
			padding: 4rem 0;
		}

		.project-card {
			margin: 0 0.5rem;
		}
	}
</style>
