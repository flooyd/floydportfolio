<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	let ready = false;

	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
<main>
	<div transition:fly={{y: -100, duration: 1000}} class="name">
		Floyd Jones
		<div>
			<a href="https://linkedin.com/in/flooyd">Linkedin</a>
			<a href="https://github.com/flooyd">GitHub</a>
		</div>
	</div>
	<div class="title">Full Stack Developer</div>
	<div transition:fade={{duration: 1000}} class="intro">
		Hello! I am a web developer with 5 years of experience. I have worked on a
		variety of projects ranging from small business websites to large scale web applications. My
		hobby projects include some game development. I am looking for a job
		using, in this order, Svelte, React, or Solid. Please check out my projects below and feel free
		to contact me!
	</div>
	<div class="title" >Projects</div>
    <div class="projects">
	<div transition:fly={{duration: 1000, x: -1000}} class="project">
            <a target="__blank" href="https://github.com/flooyd/portfolioo">
				<div>Homepage - A flashier, alternative portfolio.</div>
				<img src="https://raw.githubusercontent.com/flooyd/portfolioo/refs/heads/main/public/images/Portfolio.PNG" alt="screenshot of app">
			</a>	
        </div>
        <div transition:fly={{duration: 1000, x: -1000}} class="project">
            <a target="__blank" href="https://github.com/flooyd/things">
				<div>App Editor - An app editor made with SvelteKit and NestJS</div>
				<img src="https://github.com/flooyd/things/raw/main/public/images/grid.png?raw=true" alt="screenshot of app">
			</a>	
        </div>
	<div  transition:fly={{duration: 1000, x: -1000}} class="project">
            <a target="__blank" href="https://github.com/flooyd/weblearn">
			<div>webLearn - A language learning site</div>
			<img src="https://raw.githubusercontent.com/flooyd/weblearn/refs/heads/main/static/images/weblearn3.png" alt="screenshot of app">
			</a>
            
        </div>
	<div  transition:fly={{duration: 1000, x: -1000}} class="project">
            <a target="__blank" href="https://github.com/flooyd/mango">
			<div>Mango - Dota 2 Replay Navigator</div>
			<img src="https://raw.githubusercontent.com/flooyd/mango/refs/heads/master/client/public/Mango.PNG" alt="screenshot of app">
			</a>
            
        </div>
	<div  transition:fly={{duration: 1000, x: -1000}} class="project">
            <a target="__blank" href="https://github.com/flooyd/dota2lfg">
		<div>Dota 2 LFG - A group finding app for Dota 2</div>
		<img src="https://github.com/flooyd/dota2lfg/raw/master/readme%20images/dota2lfg.PNG" alt="screenshot of app">
	    </a>
        </div>
	<div  transition:fly={{duration: 1000, x: -1000}} class="project">
            <a target="__blank" href="https://flooyd.github.io/Curiosity-and-Friends/">
		<div>Curiosity and Friends - Browse Mars rover photos</div>
		<img src="https://github.com/flooyd/Curiosity-and-Friends/raw/master/images/caf.PNG?raw=true" alt="screenshot of app">
	    </a>
        </div>
        <div  transition:fly={{duration: 1000, x: -1000}} class="project">
            <a target="__blank" href="https://github.com/flooyd/solidtd">
		<div>TD Map Editor - Made with Solid</div>
		<img src="https://i.imgur.com/xKox8dl.png" alt="screenshot of game">
		</a>
	</div>
     <div  transition:fly={{duration: 1000, x: -1000}} class="project">
            <a target="__blank" href="https://raw.githubusercontent.com/flooyd/floydportfolio/refs/heads/main/static/cards.jpg">
		<div>Drag and drop and flippable playing cards</div>
		<img src https://raw.githubusercontent.com/flooyd/floydportfolio/refs/heads/main/static/cards.jpg" alt="screenshot of game">
		</a>
	</div>
    </div>
</main>
{/if}

<style>
	main {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		font-family: 'Open Sans', sans-serif;
	}

	.name {
		font-size: 33.18px;
		font-weight: bold;
		font-family: 'Roboto Slab', serif;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: lightgreen;
		padding: 11.11px 19.2px;
	}

	.title {
		font-size: 23.04px;
		width: fit-content;
		font-style: italic;
		padding: 11.11px 19.2px;
	}

	.intro {
		margin-top: 11;
		font-size: 16px;
		padding: 0px 19.2px;
		padding-bottom: 11.11px;
        max-width: 800px;
		border-bottom: 3px solid lightgreen;
	}

    .project {
        margin-top: 13.33px;
        display: flex;
        flex-direction: column;
        gap: 13.33px;
		padding: 0px 19.2px;
		border: 1px solid transparent
    }

	.project:hover {
		border: 1px solid lightgreen;
		border-radius: 5px;
	}

    a {
        font-size: 19.2px;
        font-weight: bold;
        text-decoration: none;
		color: black
    }

	a div {
		margin-bottom: 11.11px;
	}

	.project a {
		color: black;
	}

    img {
        max-width: 300px;
    }

	.projects {
		display: flex;
		flex-wrap: wrap;
	}
</style>
